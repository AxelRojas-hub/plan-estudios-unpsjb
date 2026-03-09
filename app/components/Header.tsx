"use client";

import { useState, useEffect } from "react";
import type { Carrera } from "../types";

export interface HeaderProps {
    carreras: Carrera[];
    carreraSeleccionada: Carrera | null;
    onSeleccionarCarrera: (carrera: Carrera) => void;
    onLimpiarCarrera?: () => void;
}

export default function Header({
    carreras,
    carreraSeleccionada,
    onSeleccionarCarrera,
    onLimpiarCarrera,
}: HeaderProps) {
    const facultades = [...new Set(carreras.map((c) => c.facultad))].sort((a, b) => a.localeCompare(b, "es"));
    const [facultadSeleccionada, setFacultadSeleccionada] = useState<string>(
        carreraSeleccionada?.facultad || facultades[0] || ""
    );

    useEffect(() => {
        if (carreraSeleccionada) {
            setFacultadSeleccionada(carreraSeleccionada.facultad);
        }
    }, [carreraSeleccionada]);

    const carrerasPorFacultad = carreras
        .filter((c) => c.facultad === facultadSeleccionada)
        .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

    return (
        <header className="z-50 border-b border-slate-700/50 bg-black/95">
            <div className="mx-auto max-w-[1600px] px-3 py-2 md:px-6 md:py-3">
                <div className="mb-1.5 text-center md:mb-3">
                    <h1 className="text-base font-bold tracking-wide text-slate-100 md:text-2xl">
                        {carreraSeleccionada
                            ? carreraSeleccionada.nombre.toUpperCase()
                            : "PLAN DE ESTUDIOS"}
                    </h1>
                    {carreraSeleccionada && (
                        <p className="text-[11px] text-slate-400 md:mt-1 md:text-sm">{carreraSeleccionada.sede}</p>
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                    <div className="flex items-center gap-1.5">
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-400 md:inline">
                            Facultad
                        </label>
                        <select
                            value={facultadSeleccionada}
                            onChange={(e) => {
                                setFacultadSeleccionada(e.target.value);
                                if (onLimpiarCarrera) onLimpiarCarrera();
                            }}
                            className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-200 
                outline-none transition-colors hover:border-slate-500 focus:border-cyan-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
                        >
                            {facultades.map((f) => (
                                <option key={f} value={f}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <label className="hidden text-xs font-medium uppercase tracking-wider text-slate-400 md:inline">
                            Carrera
                        </label>
                        <select
                            value={carreraSeleccionada?.nombre || ""}
                            onChange={(e) => {
                                const c = carreras.find((c) => c.nombre === e.target.value);
                                if (c) onSeleccionarCarrera(c);
                            }}
                            className="rounded-md border border-slate-600 bg-slate-800 px-2 py-1 text-xs text-slate-200 
                outline-none transition-colors hover:border-slate-500 focus:border-cyan-500 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
                        >
                            <option value="" disabled>Seleccionar carrera...</option>
                            {carrerasPorFacultad.map((c) => (
                                <option key={c.nombre} value={c.nombre}>
                                    {c.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center justify-center gap-3 text-[11px] md:mt-3 md:gap-5 md:text-sm">
                    <div className="flex items-center gap-1.5">
                        <div className="h-3.5 w-3.5 rounded border-2 border-slate-600/40 bg-[#0f1520] md:h-4 md:w-4" />
                        <span className="text-slate-400">Pendiente</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-3.5 w-3.5 rounded border-2 border-amber-500 bg-[#1a1508] md:h-4 md:w-4" />
                        <span className="text-slate-400">Regular</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-3.5 w-3.5 rounded border-2 border-emerald-500 bg-[#0a1a14] md:h-4 md:w-4" />
                        <span className="text-slate-400">Aprobada</span>
                    </div>
                    <div className="text-slate-500">
                        Click = correlativas · ⟳ = estado
                    </div>
                </div>
            </div>
        </header>
    );
}
