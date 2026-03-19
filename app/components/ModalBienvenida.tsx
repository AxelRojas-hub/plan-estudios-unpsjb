"use client";

import { useState } from "react";
import Image from "next/image";
import type { Carrera } from "../types";
import { FACULTAD_NOMBRES } from "../data";

export interface ModalBienvenidaProps {
    carreras: Carrera[];
    onSeleccionar: (carrera: Carrera) => void;
}

export default function ModalBienvenida({
    carreras,
    onSeleccionar,
}: ModalBienvenidaProps) {
    const facultades = [...new Set(carreras.map((c) => c.facultad))].sort((a, b) =>
        (FACULTAD_NOMBRES[a] || a).localeCompare(FACULTAD_NOMBRES[b] || b)
    );
    const [facultadSeleccionada, setFacultadSeleccionada] = useState("");
    const [nombreCarreraSeleccionada, setNombreCarreraSeleccionada] = useState("");

    const carrerasPorFacultad = carreras
        .filter((c) => c.facultad === facultadSeleccionada)
        .sort((a, b) => a.nombre.localeCompare(b.nombre));

    const handleContinuar = () => {
        const carrera = carreras.find((c) => c.nombre === nombreCarreraSeleccionada);
        if (carrera) onSeleccionar(carrera);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm dark:bg-black/70">
            <div className="w-full max-w-md rounded-2xl border border-slate-300 bg-white p-8 shadow-2xl dark:border-slate-600/50 dark:bg-[#0d1424]">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center drop-shadow-sm dark:drop-shadow-lg">
                        <Image
                            src="/logo512.webp"
                            alt="Logo UNPSJB"
                            width={96}
                            height={96}
                            className="h-full w-full object-contain drop-shadow-md dark:drop-shadow-2xl"
                        />
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Seleccioná tu facultad y carrera para comenzar
                    </p>
                </div>

                <div className="mb-4">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Facultad
                    </label>
                    <select
                        value={facultadSeleccionada}
                        onChange={(e) => {
                            setFacultadSeleccionada(e.target.value);
                            setNombreCarreraSeleccionada("");
                        }}
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 
              outline-none transition-colors hover:border-slate-400 focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500"
                    >
                        <option value="">Seleccionar facultad...</option>
                        {facultades.map((f) => (
                            <option key={f} value={f}>
                                {FACULTAD_NOMBRES[f] || f}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Carrera
                    </label>
                    <select
                        value={nombreCarreraSeleccionada}
                        onChange={(e) => setNombreCarreraSeleccionada(e.target.value)}
                        disabled={!facultadSeleccionada}
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 
              outline-none transition-colors hover:border-slate-400 focus:border-cyan-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500
              disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="" disabled>Seleccionar carrera...</option>
                        {carrerasPorFacultad.map((c) => (
                            <option key={c.nombre} value={c.nombre}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleContinuar}
                    disabled={!nombreCarreraSeleccionada}
                    className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold 
            text-white transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25
            disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Comenzar
                </button>
            </div>
        </div>
    );
}
