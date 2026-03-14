"use client";

import { useEffect } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export interface OptativaPosible {
    codigo: string;
    nombre: string;
    correlativas: string[];
}

interface ModalSeleccionOptativaProps {
    grupo: string;
    optativas: OptativaPosible[];
    estaDesbloqueada: (codigo: string) => boolean;
    onClose: () => void;
    onSelect: (codigo: string) => void;
}

export default function ModalSeleccionOptativa({
    grupo,
    optativas,
    estaDesbloqueada,
    onClose,
    onSelect,
}: ModalSeleccionOptativaProps) {
    const titulo = grupo === "optativa1" ? "Optativa I" : "Optativa II";

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <div className="relative flex w-full max-w-lg flex-col rounded-2xl border border-slate-700/60 bg-slate-900/95 p-5 shadow-2xl md:p-6">
                <div className="mb-4 flex items-start justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-slate-100">
                            Elegir {titulo}
                        </h2>
                        <p className="mt-1 text-sm text-slate-400">
                            Selecciona una materia para asignarla como {titulo} en tu plan de estudios.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {optativas.map((opt) => {
                        const isBloqueada = !estaDesbloqueada(opt.codigo);
                        return (
                            <button
                                key={opt.codigo}
                                onClick={() => !isBloqueada && onSelect(opt.codigo)}
                                disabled={isBloqueada}
                                className={`flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all ${isBloqueada
                                    ? "border-slate-800/50 bg-slate-800/20 opacity-60 cursor-not-allowed grayscale"
                                    : "border-slate-700/50 bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-700/50 active:scale-[0.98]"
                                    }`}
                            >
                                <div className="flex w-full items-center justify-between">
                                    <span className={`text-sm font-semibold ${isBloqueada ? "text-slate-500" : "text-slate-200"}`}>
                                        {opt.nombre} {isBloqueada && (<LockOutlinedIcon fontSize="inherit" className="ml-1 text-slate-400 align-middle" />)}
                                    </span>
                                    <span className={`rounded px-2 py-0.5 font-mono text-xs ${isBloqueada ? "bg-slate-900/50 text-slate-600" : "bg-slate-900 text-slate-400"}`}>
                                        {opt.codigo}
                                    </span>
                                </div>
                                {opt.correlativas.length > 0 ? (
                                    <span className="text-xs text-slate-500">
                                        Requiere: {opt.correlativas.join(", ")}
                                    </span>
                                ) : (
                                    <span className="text-xs text-slate-500">
                                        Sin correlativas directas requeridas
                                    </span>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
