"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import MateriaCard from "./MateriaCard";
import PopupOptativas from "./PopupOptativas";
import { Materia, EstadoMateria } from "../types";
import {
    obtenerMateriasVisibles,
    obtenerMateriasOptativas,
    agruparMateriasPorCuatrimestre,
    ordenarClavesGrupos,
    calcularDatosFlechas,
    crearMapaMaterias,
    crearMapaDependientes,
    obtenerCadenaCompleta
} from "../lib/diagrama";

export interface DiagramaPlanProps {
    materias: Materia[];
    getEstado: (codigo: string) => EstadoMateria;
    handleCicloEstado: (codigo: string) => void;
    estaDesbloqueada: (codigo: string) => boolean;
}

export default function DiagramaPlan({
    materias,
    getEstado,
    handleCicloEstado,
    estaDesbloqueada,
}: DiagramaPlanProps) {
    const refContenedor = useRef<HTMLDivElement>(null);
    const refsTarjetas = useRef<Map<string, HTMLDivElement>>(new Map());
    const [materiaSeleccionada, setMateriaSeleccionada] = useState<string | null>(null);
    const [flechas, setFlechas] = useState<
        { x1: number; y1: number; x2: number; y2: number; from: string; to: string }[]
    >([]);
    const [popupOptativas, setPopupOptativas] = useState<{
        grupo: string;
        x: number;
        y: number;
    } | null>(null);
    const [tamanoSvg, setTamanoSvg] = useState({ width: 0, height: 0 });

    const materiasVisibles = useMemo(() => obtenerMateriasVisibles(materias), [materias]);
    const materiasOptativas = useMemo(() => obtenerMateriasOptativas(materias), [materias]);
    const agrupadas = useMemo(() => agruparMateriasPorCuatrimestre(materiasVisibles), [materiasVisibles]);
    const clavesOrdenadas = useMemo(() => ordenarClavesGrupos(agrupadas), [agrupadas]);
    const datosFlechas = useMemo(() => calcularDatosFlechas(materiasVisibles), [materiasVisibles]);

    const materiasPorCodigo = useMemo(() => crearMapaMaterias(materias), [materias]);
    const mapaDependientes = useMemo(() => crearMapaDependientes(materias), [materias]);

    const materiasDestacadas = useMemo(() => {
        if (!materiaSeleccionada) return new Set<string>();
        return obtenerCadenaCompleta(materiaSeleccionada, materiasPorCodigo, mapaDependientes);
    }, [materiaSeleccionada, materiasPorCodigo, mapaDependientes]);

    const calcularFlechas = useCallback(() => {
        if (!refContenedor.current) return;
        const containerRect = refContenedor.current.getBoundingClientRect();

        const nuevasFlechas: typeof flechas = [];

        for (const arrow of datosFlechas) {
            const fromEl = refsTarjetas.current.get(arrow.from);
            const toEl = refsTarjetas.current.get(arrow.to);
            if (!fromEl || !toEl) continue;

            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();

            const x1 =
                fromRect.left + fromRect.width / 2 - containerRect.left + refContenedor.current.scrollLeft;
            const y1 =
                fromRect.bottom - containerRect.top + refContenedor.current.scrollTop;
            const x2 =
                toRect.left + toRect.width / 2 - containerRect.left + refContenedor.current.scrollLeft;
            const y2 =
                toRect.top - containerRect.top + refContenedor.current.scrollTop;

            nuevasFlechas.push({ x1, y1, x2, y2, from: arrow.from, to: arrow.to });
        }

        setFlechas(nuevasFlechas);
        setTamanoSvg({
            width: refContenedor.current.scrollWidth,
            height: refContenedor.current.scrollHeight,
        });
    }, [datosFlechas]);

    useEffect(() => {
        const timer = setTimeout(calcularFlechas, 150);
        window.addEventListener("resize", calcularFlechas);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", calcularFlechas);
        };
    }, [calcularFlechas, materias]);

    useEffect(() => {
        const contenedor = refContenedor.current;
        if (!contenedor) return;
        contenedor.addEventListener("scroll", calcularFlechas);
        return () => contenedor.removeEventListener("scroll", calcularFlechas);
    }, [calcularFlechas]);

    const handleSeleccion = (codigo: string) => {
        setMateriaSeleccionada((prev) => (prev === codigo ? null : codigo));
    };

    const handleMostrarOptativas = (grupo: string) => {
        const el = refsTarjetas.current.get(grupo === "optativa1" ? "OP1" : "OP2");
        if (el) {
            const rect = el.getBoundingClientRect();
            setPopupOptativas({ grupo, x: rect.left, y: rect.bottom });
        }
    };

    const setRefTarjeta = useCallback(
        (codigo: string) => (el: HTMLDivElement | null) => {
            if (el) {
                refsTarjetas.current.set(codigo, el);
            } else {
                refsTarjetas.current.delete(codigo);
            }
        },
        []
    );

    const isFlechaDestacada = (from: string, to: string) => {
        if (!materiaSeleccionada) return false;
        const chain = new Set([materiaSeleccionada, ...materiasDestacadas]);
        return chain.has(from) && chain.has(to);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMateriaSeleccionada(null);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (!materiaSeleccionada) return;

            const target = e.target as HTMLElement;
            if (target.closest('[data-codigo]') || target.closest('.optativas-popup')) {
                return;
            }

            setMateriaSeleccionada(null);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [materiaSeleccionada]);

    return (
        <div ref={refContenedor} className="relative w-full overflow-clip px-2 pb-24 md:pb-32">
            <svg
                className="pointer-events-none absolute top-0 left-0"
                style={{
                    width: tamanoSvg.width || "100%",
                    height: tamanoSvg.height || "100%",
                }}
            >
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="8"
                        markerHeight="6"
                        refX="8"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 8 3, 0 6" fill="rgba(100, 116, 139, 0.4)" />
                    </marker>
                    <marker
                        id="arrowhead-hl"
                        markerWidth="8"
                        markerHeight="6"
                        refX="8"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 8 3, 0 6" fill="rgba(34, 211, 238, 0.8)" />
                    </marker>
                </defs>
                {flechas.map((arrow, i) => {
                    const destacada = isFlechaDestacada(arrow.from, arrow.to);
                    const midY = (arrow.y1 + arrow.y2) / 2;

                    return (
                        <path
                            key={`${arrow.from}-${arrow.to}-${i}`}
                            d={`M ${arrow.x1} ${arrow.y1} C ${arrow.x1} ${midY}, ${arrow.x2} ${midY}, ${arrow.x2} ${arrow.y2}`}
                            fill="none"
                            stroke={
                                destacada
                                    ? "rgba(34, 211, 238, 0.7)"
                                    : "rgba(100, 116, 139, 0.2)"
                            }
                            strokeWidth={destacada ? 1.5 : 1}
                            markerEnd={destacada ? "url(#arrowhead-hl)" : "url(#arrowhead)"}
                            className="transition-all duration-300"
                            style={{
                                opacity: materiaSeleccionada && !destacada ? 0.15 : 1,
                                filter: materiaSeleccionada && !destacada ? "blur(2px)" : "none",
                            }}
                        />
                    );
                })}
            </svg>

            <div className="relative z-[2] flex w-full flex-col gap-8 pt-4 md:gap-14 md:pt-6">
                {clavesOrdenadas.map((key) => {
                    const [anio, cuatri] = key.split("-").map(Number);
                    const materiasEnGrupo = agrupadas[key];

                    return (
                        <div key={key} className="flex w-full flex-col gap-0.5 md:flex-row md:items-start md:gap-3">
                            <div className="flex shrink-0 flex-row items-baseline gap-1.5 md:w-16 md:flex-col md:items-center md:pt-3 md:text-center">
                                <span className="text-lg font-bold text-cyan-400/80 md:text-3xl">
                                    {anio}°
                                </span>
                                <span className="text-[9px] uppercase tracking-wider text-slate-400 md:text-[11px] md:tracking-widest">
                                    {cuatri === 0 ? "Anual" : cuatri === 1 ? "1er Cuat" : "2do Cuat"}
                                </span>
                            </div>

                            <div className="grid flex-1 gap-1.5 grid-cols-3 md:gap-3 md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
                                {materiasEnGrupo.map((materia) => {
                                    const estado = getEstado(materia.codigo);
                                    const isSeleccionada = materiaSeleccionada === materia.codigo;
                                    const isDestacada = materiasDestacadas.has(materia.codigo);
                                    const isAtenuada =
                                        materiaSeleccionada !== null && !isSeleccionada && !isDestacada;
                                    const isBloqueada = !estaDesbloqueada(materia.codigo);

                                    return (
                                        <MateriaCard
                                            key={materia.codigo}
                                            materia={materia}
                                            estado={estado}
                                            isDestacada={isDestacada}
                                            isSeleccionada={isSeleccionada}
                                            isAtenuada={isAtenuada}
                                            isBloqueada={isBloqueada}
                                            onSeleccionar={handleSeleccion}
                                            onCiclarEstado={handleCicloEstado}
                                            onMostrarOptativas={handleMostrarOptativas}
                                            refTarjeta={setRefTarjeta(materia.codigo)}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {popupOptativas && (
                <PopupOptativas
                    grupo={popupOptativas.grupo}
                    optativas={materiasOptativas.filter(
                        (m) => m.grupoOptativa === popupOptativas.grupo
                    )}
                    posicion={{ x: popupOptativas.x, y: popupOptativas.y }}
                    onCerrar={() => setPopupOptativas(null)}
                    onSeleccionar={handleSeleccion}
                    getEstado={getEstado}
                />
            )}
        </div>
    );
}
