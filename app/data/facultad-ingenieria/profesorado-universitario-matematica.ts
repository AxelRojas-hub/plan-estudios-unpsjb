import { Carrera } from "../../types";

const profesoradoUniversitarioMatematica: Carrera = {
    nombre: "Profesorado Universitario en Matemática",
    facultad: "Facultad de Ingeniería",
    sede: "Comodoro Rivadavia y Trelew",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "MA001", nombre: "Álgebra y Geometría", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        { codigo: "MA002", nombre: "Análisis Matemático I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "MA003", nombre: "Análisis Matemático II", año: 1, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 150 },
        { codigo: "MA050", nombre: "Aritmética", año: 1, cuatrimestre: 2, correlativas: ["MA001"], cargaHoraria: 105 },
        // 1° Año - Anual
        { codigo: "MA800", nombre: "Pedagogía", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 105 },
        { codigo: "MA051", nombre: "Laboratorio I", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 105 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "MA052", nombre: "Geometría Métrica", año: 2, cuatrimestre: 1, correlativas: ["MA050"], cargaHoraria: 105 },
        { codigo: "MA053", nombre: "Principios de Análisis Matemático", año: 2, cuatrimestre: 1, correlativas: ["MA003"], cargaHoraria: 105 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA054", nombre: "Álgebra Lineal", año: 2, cuatrimestre: 2, correlativas: ["MA050"], cargaHoraria: 105 },
        { codigo: "MA055", nombre: "Matemática Discreta", año: 2, cuatrimestre: 2, correlativas: ["MA050"], cargaHoraria: 105 },
        // 2° Año - Anual
        { codigo: "MA056", nombre: "Laboratorio II", año: 2, cuatrimestre: 0, correlativas: ["MA003", "MA051"], cargaHoraria: 105 },
        { codigo: "MA801", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 0, correlativas: [], cargaHoraria: 105 },
        { codigo: "MA802", nombre: "Didáctica General", año: 2, cuatrimestre: 0, correlativas: ["MA800"], cargaHoraria: 105 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "MA057", nombre: "Análisis de Variable Compleja", año: 3, cuatrimestre: 1, correlativas: ["MA053"], cargaHoraria: 105 },
        { codigo: "MA058", nombre: "Cálculo Numérico", año: 3, cuatrimestre: 1, correlativas: ["MA054", "MA053"], cargaHoraria: 105 },
        { codigo: "MA803", nombre: "Tecnología Educativa", año: 3, cuatrimestre: 1, correlativas: ["MA802"], cargaHoraria: 90 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "MA059", nombre: "Ecuaciones Diferenciales Ordinarias", año: 3, cuatrimestre: 2, correlativas: ["MA057", "MA058"], cargaHoraria: 105 },
        { codigo: "FI006", nombre: "Física General", año: 3, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 120 },
        { codigo: "MA804", nombre: "Sistema Educativo e Instituciones", año: 3, cuatrimestre: 2, correlativas: ["MA800"], cargaHoraria: 90 },
        // 3° Año - Anual
        { codigo: "MA060", nombre: "Didáctica de la Matemática", año: 3, cuatrimestre: 0, correlativas: ["MA055", "MA056", "MA800", "MA802"], cargaHoraria: 120 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "MA062", nombre: "Estructuras Algebraicas", año: 4, cuatrimestre: 1, correlativas: ["MA052", "MA054"], cargaHoraria: 105 },
        { codigo: "MA805", nombre: "Problemática de la educación secundaria y superior", año: 4, cuatrimestre: 1, correlativas: ["MA804"], cargaHoraria: 90 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "MA063", nombre: "Historia de la Matemática", año: 4, cuatrimestre: 2, correlativas: ["MA057", "MA058"], cargaHoraria: 75 },
        { codigo: "MA006", nombre: "Estadística", año: 4, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA806", nombre: "Investigación Educativa", año: 4, cuatrimestre: 2, correlativas: ["MA060"], cargaHoraria: 90 },
        // 4° Año - Anual
        { codigo: "MA065", nombre: "Práctica Docente", año: 4, cuatrimestre: 0, correlativas: [], cargaHoraria: 200 },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma Inglés", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "FA104", nombre: "Adquisición de habilidades discursivo-comunicativas y de análisis del discurso", condicion: "Acreditar en los espacios disciplinares" },
    ],
} satisfies Carrera;

export default profesoradoUniversitarioMatematica;
