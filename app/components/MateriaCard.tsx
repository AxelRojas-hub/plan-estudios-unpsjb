"use client";

import { EstadoMateria } from "../types";

export interface DatosMateria {
    codigo: string;
    nombre: string;
    condicion?: string;
    esOptativa?: boolean;
    grupoOptativa?: string;
}

export interface MateriaCardProps {
    materia: DatosMateria;
    estado: EstadoMateria;
    isDestacada: boolean;
    isSeleccionada: boolean;
    isAtenuada: boolean;
    isBloqueada: boolean;
    onSeleccionar: (codigo: string) => void;
    onCiclarEstado: (codigo: string) => void;
    onMostrarOptativas?: (grupo: string) => void;
    refTarjeta: (el: HTMLDivElement | null) => void;
}

const ETIQUETAS_ESTADO: Record<EstadoMateria, string> = {
    pendiente: "Pendiente",
    regular: "Regular",
    aprobada: "Aprobada",
};

const COLORES_ESTADO: Record<EstadoMateria, string> = {
    pendiente: "text-slate-500",
    regular: "text-amber-400",
    aprobada: "text-emerald-400",
};

const SIGUIENTE_ESTADO: Record<EstadoMateria, EstadoMateria> = {
    pendiente: "regular",
    regular: "aprobada",
    aprobada: "pendiente",
};

export default function MateriaCard({
    materia,
    estado,
    isDestacada,
    isSeleccionada,
    isAtenuada,
    isBloqueada,
    onSeleccionar,
    onCiclarEstado,
    onMostrarOptativas,
    refTarjeta,
}: MateriaCardProps) {
    const getEstilosEstado = () => {
        if (isSeleccionada || isDestacada) {
            switch (estado) {
                case "aprobada":
                    return "border-emerald-500 bg-[#0a1a14] shadow-[0_0_12px_rgba(52,211,153,0.3)]";
                case "regular":
                    return "border-amber-500 bg-[#1a1508] shadow-[0_0_12px_rgba(251,191,36,0.3)]";
                default:
                    return "border-cyan-500/70 bg-[#0d1a2a] shadow-[0_0_14px_rgba(34,211,238,0.3)]";
            }
        }

        switch (estado) {
            case "aprobada":
                return "border-emerald-500 bg-[#0a1a14]";
            case "regular":
                return "border-amber-500 bg-[#1a1508]";
            default:
                return "border-slate-600/40 bg-[#0f1520]";
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (materia.esOptativa && materia.grupoOptativa && onMostrarOptativas) {
            if (materia.codigo === "OP1" || materia.codigo === "OP2") {
                onMostrarOptativas(materia.grupoOptativa);
                return;
            }
        }
        onSeleccionar(materia.codigo);
    };

    return (
        <div
            ref={refTarjeta}
            data-codigo={materia.codigo}
            onClick={handleClick}
            className={`
        relative cursor-pointer select-none rounded-md border px-1.5 py-1
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-lg
        w-full md:rounded-lg md:border-2 md:min-w-[140px] md:max-w-[400px] md:mx-auto md:px-3 md:py-2
        ${getEstilosEstado()}
        ${isAtenuada ? "opacity-20 blur-[2px]" : "opacity-100"}
        ${isBloqueada ? "opacity-60 grayscale" : ""}
      `}
        >
            <div className="flex flex-col gap-0">
                <span className="text-[8px] font-mono text-slate-400 md:text-[10px]">
                    {materia.codigo}
                </span>
                <span className="text-[10px] font-medium leading-tight text-slate-100 md:text-xs">
                    {materia.nombre} {isBloqueada && "🔒"}
                </span>
                {materia.condicion && (
                    <span className="mt-0.5 text-[9px] text-slate-400 md:text-[10px]">
                        Req: {materia.condicion}
                    </span>
                )}
                <div className="mt-0.5 flex items-center justify-between md:mt-1">
                    <span
                        className={`text-[8px] font-semibold uppercase tracking-wider md:text-[10px] ${COLORES_ESTADO[estado]}`}
                    >
                        {ETIQUETAS_ESTADO[estado]}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (!isBloqueada) {
                                onCiclarEstado(materia.codigo);
                            }
                        }}
                        disabled={isBloqueada}
                        className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide 
              transition-colors border min-w-[24px] text-center md:rounded-md md:px-2.5 md:py-1 md:text-xs md:min-w-[36px]
              ${isBloqueada
                                ? "border-slate-800 text-slate-600 cursor-not-allowed opacity-50"
                                : estado === "pendiente"
                                    ? "border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                                    : estado === "regular"
                                        ? "border-amber-600/50 text-amber-400 hover:bg-amber-900/30"
                                        : "border-emerald-600/50 text-emerald-400 hover:bg-emerald-900/30"
                            }
            `}
                        title={isBloqueada ? "Materia bloqueada por correlativas" : `Cambiar a ${ETIQUETAS_ESTADO[SIGUIENTE_ESTADO[estado]]}`}
                    >
                        ⟳
                    </button>
                </div>
            </div>
        </div>
    );
}
