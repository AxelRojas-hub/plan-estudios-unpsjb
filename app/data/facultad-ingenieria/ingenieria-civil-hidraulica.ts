import { Carrera } from "../../types";

const ingenieriaCivilHidraulica: Carrera = {
    nombre: "Ingeniería Civil (Hidráulica)",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Trelew",
    plan: "Plan vigente",
    materias: [
        // 1° Año - 1° Cuatrimestre
        { codigo: "MA001", nombre: "Álgebra y Geometría", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        { codigo: "MA002", nombre: "Análisis Matemático I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 165 },
        // 1° Año - 2° Cuatrimestre
        { codigo: "MA003", nombre: "Análisis Matemático II", año: 1, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 150 },
        { codigo: "FI001", nombre: "Física I", año: 1, cuatrimestre: 2, correlativas: ["MA002"], cargaHoraria: 150 },
        // 1° Año - Anual
        { codigo: "QU001", nombre: "Química", año: 1, cuatrimestre: 0, correlativas: [], cargaHoraria: 135 },

        // 2° Año - 1° Cuatrimestre
        { codigo: "MA042", nombre: "Análisis Matemático III", año: 2, cuatrimestre: 1, correlativas: ["MA003"], cargaHoraria: 105 },
        { codigo: "ES003", nombre: "Estabilidad I", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "ES004", nombre: "Estabilidad II", año: 2, cuatrimestre: 2, correlativas: ["ES003"], cargaHoraria: 120 },
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA007", nombre: "Programación Básica y Métodos Numéricos", año: 2, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 90 },
        { codigo: "FA004", nombre: "Sistemas de Representación", año: 2, cuatrimestre: 2, correlativas: [], condicion: "4 asignaturas aprobadas", cargaHoraria: 75 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "ES001", nombre: "Ciencia y Tecnología de los Materiales", año: 3, cuatrimestre: 1, correlativas: ["ES004", "QU001"], cargaHoraria: 135 },
        { codigo: "ES002", nombre: "Elasticidad", año: 3, cuatrimestre: 1, correlativas: ["ES004", "MA042"], cargaHoraria: 75 },
        { codigo: "CI008", nombre: "Geología Aplicada", año: 3, cuatrimestre: 1, correlativas: ["QU001"], cargaHoraria: 45 },
        { codigo: "CI012", nombre: "Hidráulica I", año: 3, cuatrimestre: 1, correlativas: ["MA003", "FI001"], cargaHoraria: 75 },
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 3, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "ES005", nombre: "Estabilidad III", año: 3, cuatrimestre: 2, correlativas: ["ES004"], cargaHoraria: 105 },
        { codigo: "CI009", nombre: "Geotecnia", año: 3, cuatrimestre: 2, correlativas: ["ES004", "CI008", "CI012"], cargaHoraria: 135 },
        { codigo: "CI013", nombre: "Hidráulica II", año: 3, cuatrimestre: 2, correlativas: ["CI012"], cargaHoraria: 60 },
        { codigo: "CI024", nombre: "Topografía", año: 3, cuatrimestre: 2, correlativas: ["FA004", "FI002", "MA001"], cargaHoraria: 105 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "CI020", nombre: "Construcción de Edificios e Instalaciones", año: 4, cuatrimestre: 1, correlativas: ["ES001", "FA004", "FI004"], cargaHoraria: 90 },
        { codigo: "CI044", nombre: "Hidrología", año: 4, cuatrimestre: 1, correlativas: ["CI013", "MA006"], cargaHoraria: 75 },
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 4, cuatrimestre: 1, correlativas: [], condicion: "11 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "CI023", nombre: "Puertos y Vías Navegables", año: 4, cuatrimestre: 1, correlativas: ["CI009", "CI013"], cargaHoraria: 90 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "CI001", nombre: "Aprovechamientos Hidráulicos", año: 4, cuatrimestre: 2, correlativas: ["CI014"], cargaHoraria: 60 },
        { codigo: "CI003", nombre: "Arquitectura y Urbanismo", año: 4, cuatrimestre: 2, correlativas: ["CI020"], cargaHoraria: 105 },
        { codigo: "CI033", nombre: "Vías de Comunicación-H", año: 4, cuatrimestre: 2, correlativas: ["CI009", "CI024", "ES001"], cargaHoraria: 90 },
        { codigo: "CI041", nombre: "Proyecto I", año: 4, cuatrimestre: 2, correlativas: ["CI020"], cargaHoraria: 60 },
        // 4° Año - Anual
        { codigo: "CI015", nombre: "Hormigón I", año: 4, cuatrimestre: 0, correlativas: ["ES001", "ES005"], cargaHoraria: 135 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "CI005", nombre: "Construcciones Hidráulicas", año: 5, cuatrimestre: 1, correlativas: ["CI013"], cargaHoraria: 75 },
        { codigo: "FA026", nombre: "Ingeniería Económica y Organización de Obras", año: 5, cuatrimestre: 1, correlativas: ["CI020"], cargaHoraria: 75 },
        { codigo: "CI042", nombre: "Proyecto II", año: 5, cuatrimestre: 1, correlativas: ["CI033"], cargaHoraria: 60 },
        { codigo: "CI018", nombre: "Ingeniería Sanitaria", año: 5, cuatrimestre: 1, correlativas: ["CI013", "QU001"], cargaHoraria: 75 },
        // 5° Año - 2° Cuatrimestre
        { codigo: "CI034", nombre: "Hormigón II-H", año: 5, cuatrimestre: 2, correlativas: ["CI015"], cargaHoraria: 90 },
        { codigo: "FA001", nombre: "Gestión Ambiental", año: 5, cuatrimestre: 2, correlativas: [], condicion: "17 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "CI_OP1H", nombre: "Optativa I", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI_OP2H", nombre: "Optativa II", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - Anual
        { codigo: "CI007", nombre: "Construcciones Metálicas y de Madera", año: 5, cuatrimestre: 0, correlativas: ["ES001", "ES005"], cargaHoraria: 120 },
        { codigo: "CI043", nombre: "Proyecto de Ingeniería Civil - Orientación Hidráulica (Proyecto III)", año: 5, cuatrimestre: 0, correlativas: ["CI001", "CI041", "CI033", "CI023"], cargaHoraria: 90 },

        // Optativas (*) - pool compartido
        { codigo: "CI035", nombre: "Construcciones Hidráulicas Especiales", año: 5, cuatrimestre: 2, correlativas: ["CI005", "CI014"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI036", nombre: "Fundaciones Especiales", año: 5, cuatrimestre: 2, correlativas: ["CI009"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI037", nombre: "Hidráulica Agrícola y Fluvial", año: 5, cuatrimestre: 2, correlativas: ["CI014"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI038", nombre: "Máquinas y Equipos de Construcción", año: 5, cuatrimestre: 2, correlativas: ["CI009", "CI020"], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
    ],
    requisitos: [
        { codigo: "FA104", nombre: "Introducción a la Metodología de la Investigación Científica y Técnicas Comunicacionales", condicion: "10 asignaturas aprobadas" },
        { codigo: "FA007", nombre: "Acreditación de Idioma Inglés", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "CI046", nombre: "Práctica Profesional Supervisada ICOH", condicion: "28 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaCivilHidraulica;
