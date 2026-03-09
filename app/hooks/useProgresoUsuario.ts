"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { EstadoMateria, Materia } from "../types";

interface ProgresoUsuario {
    carreraId: string | null;
    facultad: string | null;
    materias: Record<string, EstadoMateria>;
}

const STORAGE_KEY = "plan-estudios-progress";

function cargarProgreso(): ProgresoUsuario {
    if (typeof window === "undefined") {
        return { carreraId: null, facultad: null, materias: {} };
    }
    try {
        const guardado = localStorage.getItem(STORAGE_KEY);
        if (guardado) {
            return JSON.parse(guardado);
        }
    } catch { }
    return { carreraId: null, facultad: null, materias: {} };
}

function guardarProgreso(progreso: ProgresoUsuario) {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

export function useProgresoUsuario() {
    const [progreso, setProgreso] = useState<ProgresoUsuario>({
        carreraId: null,
        facultad: null,
        materias: {},
    });

    const isFirstRender = useRef(true);

    useEffect(() => {
        const guardado = cargarProgreso();
        if (guardado.carreraId || Object.keys(guardado.materias).length > 0) {
            setProgreso(guardado);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        guardarProgreso(progreso);
    }, [progreso]);

    const actualizarProgreso = useCallback((updater: (prev: ProgresoUsuario) => ProgresoUsuario) => {
        setProgreso((prev) => updater(prev));
    }, []);

    const getEstado = useCallback(
        (codigo: string): EstadoMateria => {
            return progreso.materias[codigo] || "pendiente";
        },
        [progreso.materias]
    );

    const handleCicloEstado = useCallback((codigo: string) => {
        actualizarProgreso((prev) => {
            const actual = prev.materias[codigo] || "pendiente";
            const siguiente: EstadoMateria =
                actual === "pendiente"
                    ? "regular"
                    : actual === "regular"
                        ? "aprobada"
                        : "pendiente";
            return {
                ...prev,
                materias: { ...prev.materias, [codigo]: siguiente },
            };
        });
    }, [actualizarProgreso]);

    const setCarrera = useCallback((carreraId: string | null, facultad: string | null) => {
        actualizarProgreso((prev) => ({ ...prev, carreraId, facultad }));
    }, [actualizarProgreso]);

    const puedeCursar = useCallback(
        (
            correlativas: string[],
            todasLasMaterias: { codigo: string; correlativas: string[] }[]
        ): boolean => {
            if (correlativas.length === 0) return true;
            return correlativas.every((cod) => {
                const estado = progreso.materias[cod];
                return estado === "aprobada" || estado === "regular";
            });
        },
        [progreso.materias]
    );

    const estaDesbloqueada = useCallback(
        (codigo: string, materias: Materia[]): boolean => {
            const materia = materias.find((m) => m.codigo === codigo);
            if (!materia || !materia.correlativas || materia.correlativas.length === 0) return true;
            return materia.correlativas.every((cod) => {
                const estado = progreso.materias[cod] || "pendiente";
                return estado === "aprobada" || estado === "regular";
            });
        },
        [progreso.materias]
    );

    const isPrimeraVez = progreso.carreraId === null;

    return {
        progreso,
        getEstado,
        handleCicloEstado,
        setCarrera,
        puedeCursar,
        estaDesbloqueada,
        isPrimeraVez,
    };
}
