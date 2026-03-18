import { Carrera } from "../../types";

const ingenieriaCivil: Carrera = {
    nombre: "Ingeniería Civil (Construcciones)",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Comodoro Rivadavia",
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
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 3, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "EE008", nombre: "Fundamentos de Electrotecnia", año: 3, cuatrimestre: 2, correlativas: ["FI002"], cargaHoraria: 75 },
        // 3° Año - Anual
        { codigo: "CI002", nombre: "Arquitectura", año: 3, cuatrimestre: 0, correlativas: ["FA004"], cargaHoraria: 60 },
        { codigo: "ES001", nombre: "Ciencia y Tecnología de los Materiales", año: 3, cuatrimestre: 0, correlativas: ["ES004", "QU001"], cargaHoraria: 135 },
        { codigo: "ES002", nombre: "Elasticidad", año: 3, cuatrimestre: 0, correlativas: ["ES004", "MA042"], cargaHoraria: 75 },
        { codigo: "ES005", nombre: "Estabilidad III", año: 3, cuatrimestre: 0, correlativas: ["ES004"], cargaHoraria: 105 },
        { codigo: "CI011", nombre: "Hidráulica General", año: 3, cuatrimestre: 0, correlativas: ["FI001", "MA003"], cargaHoraria: 105 },
        { codigo: "CI024", nombre: "Topografía", año: 3, cuatrimestre: 0, correlativas: ["FA004", "MA001", "FI002"], cargaHoraria: 105 },

        // 4° Año - Anual
        { codigo: "CI004", nombre: "Construcción de Edificios", año: 4, cuatrimestre: 0, correlativas: ["ES001", "FA004"], cargaHoraria: 105 },
        { codigo: "CI009", nombre: "Geotecnia", año: 4, cuatrimestre: 0, correlativas: ["ES004", "QU001", "CI011"], cargaHoraria: 135 },
        { codigo: "CI010", nombre: "Hidráulica Aplicada", año: 4, cuatrimestre: 0, correlativas: ["CI011"], cargaHoraria: 90 },
        { codigo: "CI015", nombre: "Hormigón I", año: 4, cuatrimestre: 0, correlativas: ["ES001", "ES005"], cargaHoraria: 135 },
        { codigo: "FA002", nombre: "Ingeniería Económica", año: 4, cuatrimestre: 0, correlativas: [], condicion: "10 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "CI007", nombre: "Construcciones Metálicas y de Madera", año: 4, cuatrimestre: 0, correlativas: ["ES001", "ES005"], cargaHoraria: 120 },
        { codigo: "CI019", nombre: "Instalaciones en Edificios", año: 4, cuatrimestre: 0, correlativas: ["EE008", "FA004"], cargaHoraria: 105 },
        { codigo: "CI022", nombre: "Planeamiento y Urbanismo", año: 4, cuatrimestre: 0, correlativas: ["CI002"], cargaHoraria: 60 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "CI_OP1", nombre: "Optativa I", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI_OP2", nombre: "Optativa II", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - 2° Cuatrimestre
        { codigo: "CI026", nombre: "Proyecto de Ingeniería Civil (Orientación Construcciones)", año: 5, cuatrimestre: 2, correlativas: ["CI004", "CI007", "CI009", "CI015", "CI010", "CI019"], cargaHoraria: 90 },
        // 5° Año - Anual
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 5, cuatrimestre: 0, correlativas: [], condicion: "14 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FA001", nombre: "Gestión Ambiental", año: 5, cuatrimestre: 0, correlativas: [], condicion: "14 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "CI031", nombre: "Hormigón II", año: 5, cuatrimestre: 0, correlativas: ["CI015"], cargaHoraria: 105 },
        { codigo: "CI018", nombre: "Ingeniería Sanitaria", año: 5, cuatrimestre: 0, correlativas: ["CI011", "QU001"], cargaHoraria: 75 },
        { codigo: "CI021", nombre: "Organización de Obras", año: 5, cuatrimestre: 0, correlativas: ["CI004", "FA002"], cargaHoraria: 75 },
        { codigo: "CI023", nombre: "Puertos y Vías Navegables", año: 5, cuatrimestre: 0, correlativas: ["CI009", "CI011"], cargaHoraria: 90 },
        { codigo: "CI025", nombre: "Vías de Comunicación", año: 5, cuatrimestre: 0, correlativas: ["CI009", "CI024", "ES001"], cargaHoraria: 120 },

        // Optativas (pool compartido por Optativa I y II)
        { codigo: "CI006", nombre: "Estructuras Especiales", año: 5, cuatrimestre: 1, correlativas: ["CI015", "ES002", "CI009"], cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI028", nombre: "Saneamiento Ambiental", año: 5, cuatrimestre: 1, correlativas: ["CI011", "QU001"], cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "CI027", nombre: "Seguridad en Obras", año: 5, cuatrimestre: 1, correlativas: ["CI004"], cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "FA024", nombre: "Gestión Empresarial", año: 5, cuatrimestre: 1, correlativas: [], condicion: "14 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "CI045", nombre: "Práctica Profesional Supervisada ICOC", condicion: "27 asignaturas aprobadas" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "5 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaCivil;
