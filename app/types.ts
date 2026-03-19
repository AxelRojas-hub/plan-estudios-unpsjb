export type EstadoMateria = "pendiente" | "regular" | "aprobada";
export type EstadoRequisito = "pendiente" | "aprobada";

export interface Materia {
    codigo: string;
    nombre: string;
    año: number;
    cuatrimestre: 0 | 1 | 2;
    correlativas: string[];
    condicion?: string;
    cargaHoraria?: number;
    esOptativa?: boolean;
    grupoOptativa?: string;
}

export interface RequisitoComplementario {
    codigo: string;
    nombre: string;
    condicion?: string;
}

export interface Carrera {
    nombre: string;
    facultad: string;
    sede: string;
    plan: string;
    materias: Materia[];
    requisitos?: RequisitoComplementario[];
}
