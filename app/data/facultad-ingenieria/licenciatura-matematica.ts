import { Carrera } from "../../types";

const licenciaturaMatematica: Carrera = {
    nombre: "Licenciatura en Matemática",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Comodoro Rivadavia",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "MA001", nombre: "Álgebra y Geometría", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        { codigo: "MA002", nombre: "Análisis Matemático I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "MA003", nombre: "Análisis Matemático II", año: 1, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 150 },
        { codigo: "MA050", nombre: "Aritmética", año: 1, cuatrimestre: 2, correlativas: ["MA001"], cargaHoraria: 105 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "MA052", nombre: "Geometría Métrica", año: 2, cuatrimestre: 1, correlativas: ["MA050"], cargaHoraria: 105 },
        { codigo: "MA053", nombre: "Principios de Análisis Matemático", año: 2, cuatrimestre: 1, correlativas: ["MA003"], cargaHoraria: 105 },
        { codigo: "FI006", nombre: "Física General", año: 2, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 120 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA054", nombre: "Álgebra Lineal", año: 2, cuatrimestre: 2, correlativas: ["MA050"], cargaHoraria: 105 },
        { codigo: "MA055", nombre: "Matemática Discreta", año: 2, cuatrimestre: 2, correlativas: ["MA050"], cargaHoraria: 105 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "MA057", nombre: "Análisis de Variable Compleja", año: 3, cuatrimestre: 1, correlativas: ["MA053"], cargaHoraria: 105 },
        { codigo: "MA062", nombre: "Estructuras Algebraicas", año: 3, cuatrimestre: 1, correlativas: ["MA052", "MA054"], cargaHoraria: 105 },
        { codigo: "MA066", nombre: "Topología General", año: 3, cuatrimestre: 1, correlativas: ["MA053"], cargaHoraria: 120 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "MA059", nombre: "Ecuaciones Diferenciales Ordinarias", año: 3, cuatrimestre: 2, correlativas: ["MA057"], cargaHoraria: 105 },
        { codigo: "MA067", nombre: "Geometría Diferencial", año: 3, cuatrimestre: 2, correlativas: ["MA003", "MA054"], cargaHoraria: 120 },
        { codigo: "MA068", nombre: "Teoría de la medida", año: 3, cuatrimestre: 2, correlativas: ["MA066"], cargaHoraria: 120 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "MA069", nombre: "Estructuras Algebraicas A", año: 4, cuatrimestre: 1, correlativas: ["MA062"], cargaHoraria: 120 },
        { codigo: "MA058", nombre: "Cálculo Numérico", año: 4, cuatrimestre: 1, correlativas: ["MA054", "MA053"], cargaHoraria: 105 },
        { codigo: "MA070", nombre: "Ecuaciones Diferenciales en Derivadas Parciales", año: 4, cuatrimestre: 1, correlativas: ["MA059"], cargaHoraria: 120 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "MA006", nombre: "Estadística", año: 4, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA063", nombre: "Historia de la Matemática", año: 4, cuatrimestre: 2, correlativas: ["MA057", "MA058"], cargaHoraria: 75 },
        // 4° Año - Anual
        { codigo: "MA090", nombre: "Optativa I", año: 4, cuatrimestre: 0, correlativas: [], cargaHoraria: 150, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "MA091", nombre: "Optativa II", año: 4, cuatrimestre: 2, correlativas: [], cargaHoraria: 150, esOptativa: true, grupoOptativa: "optativa2" },

        //Optativas Descripcion
        { codigo: "Optativa I", nombre: "Complemento de formación con aval de tutor. Acreditable mediante asignaturas/seminarios del departamento, o materias de áreas matemáticas de otras carreras/universidades.", año: 4, cuatrimestre: 0, correlativas: [], cargaHoraria: 150, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "Optativa II", nombre: "Complemento de formación con aval de tutor. Acreditable mediante asignaturas/seminarios del departamento, o materias de áreas matemáticas de otras carreras/universidades.", año: 4, cuatrimestre: 2, correlativas: [], cargaHoraria: 150, esOptativa: true, grupoOptativa: "optativa2" },

    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el tercer año de la carrera" },
        { codigo: "MA092", nombre: "Tesis de grado", condicion: "12 Asignaturas aprobadas y tercer año cursado" },
    ],
} satisfies Carrera;

export default licenciaturaMatematica;
