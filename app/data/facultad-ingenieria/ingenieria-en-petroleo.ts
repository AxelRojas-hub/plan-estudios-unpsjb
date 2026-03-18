import { Carrera } from "../../types";

const ingenieriaEnPetroleo: Carrera = {
    nombre: "Ingeniería en Petróleo",
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
        { codigo: "FI002", nombre: "Física II", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 135 },
        { codigo: "FI004", nombre: "Termodinámica Básica", año: 2, cuatrimestre: 1, correlativas: ["FI001"], cargaHoraria: 75 },
        // 2° Año - 2° Cuatrimestre
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA001", "MA002"], cargaHoraria: 90 },
        { codigo: "MA007", nombre: "Programación Básica y Métodos Numéricos", año: 2, cuatrimestre: 2, correlativas: ["MA003"], cargaHoraria: 90 },
        { codigo: "QU003", nombre: "Termodinámica Aplicada", año: 2, cuatrimestre: 2, correlativas: ["QU001", "FI004"], cargaHoraria: 75 },
        { codigo: "FA004", nombre: "Sistemas de Representación", año: 2, cuatrimestre: 2, correlativas: [], condicion: "4 asignaturas aprobadas", cargaHoraria: 75 },
        // 2° Año - Anual
        { codigo: "PE001", nombre: "Geología I", año: 2, cuatrimestre: 0, correlativas: ["FI001", "QU001"], cargaHoraria: 150 },

        // 3° Año - 1° Cuatrimestre
        { codigo: "PE004", nombre: "Laboratorio de Ensayos I", año: 3, cuatrimestre: 1, correlativas: ["FI004", "PE001"], cargaHoraria: 75 },
        // 3° Año - 2° Cuatrimestre
        { codigo: "EE008", nombre: "Fundamentos de Electrotecnia", año: 3, cuatrimestre: 2, correlativas: ["FI002"], cargaHoraria: 75 },
        // 3° Año - Anual
        { codigo: "ES012", nombre: "Mecánica", año: 3, cuatrimestre: 0, correlativas: ["FI001"], cargaHoraria: 75 },
        { codigo: "ES009", nombre: "Tecnología de los Materiales", año: 3, cuatrimestre: 0, correlativas: ["FI002", "QU003"], cargaHoraria: 90 },
        { codigo: "PE002", nombre: "Fluidodinámica Aplicada", año: 3, cuatrimestre: 0, correlativas: ["MA007", "FA004", "QU003"], cargaHoraria: 150 },
        { codigo: "PE003", nombre: "Geología II", año: 3, cuatrimestre: 0, correlativas: ["PE001"], cargaHoraria: 150 },
        { codigo: "QU002", nombre: "Química Orgánica Aplicada", año: 3, cuatrimestre: 0, correlativas: ["QU001"], cargaHoraria: 150 },

        // 4° Año - 1° Cuatrimestre
        { codigo: "PE006", nombre: "Instalaciones de Gas y Petróleo", año: 4, cuatrimestre: 1, correlativas: ["ES009", "ES012", "PE002"], cargaHoraria: 90 },
        // 4° Año - 2° Cuatrimestre
        { codigo: "PE007", nombre: "Laboratorio de Ensayos II", año: 4, cuatrimestre: 2, correlativas: ["PE002", "PE003"], cargaHoraria: 75 },
        // 4° Año - Anual
        { codigo: "PE008", nombre: "Perforación", año: 4, cuatrimestre: 0, correlativas: ["PE002"], cargaHoraria: 210 },
        { codigo: "PE009", nombre: "Reservorios", año: 4, cuatrimestre: 0, correlativas: ["PE002", "PE003"], cargaHoraria: 180 },
        { codigo: "PE005", nombre: "Geofísica Aplicada", año: 4, cuatrimestre: 0, correlativas: ["PE003"], cargaHoraria: 150 },
        { codigo: "FA002", nombre: "Ingeniería Económica", año: 4, cuatrimestre: 0, correlativas: [], condicion: "13 asignaturas aprobadas", cargaHoraria: 75 },

        // 5° Año - 1° Cuatrimestre
        { codigo: "PE010", nombre: "Evaluación y Estimulación de Formaciones", año: 5, cuatrimestre: 1, correlativas: ["MA042", "PE009", "PE005"], cargaHoraria: 90 },
        { codigo: "PE_OP1", nombre: "Optativa I", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - 2° Cuatrimestre
        { codigo: "QU013", nombre: "Optimización", año: 5, cuatrimestre: 2, correlativas: ["PE006"], cargaHoraria: 75 },
        { codigo: "PE_OP2", nombre: "Optativa II", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        // 5° Año - Anual
        { codigo: "PE011", nombre: "Producción", año: 5, cuatrimestre: 0, correlativas: ["PE008"], cargaHoraria: 210 },
        { codigo: "PE012", nombre: "Proyecto de Ingeniería en Petróleo", año: 5, cuatrimestre: 0, correlativas: ["FA002", "PE006"], cargaHoraria: 150 },
        { codigo: "FA001", nombre: "Gestión Ambiental", año: 5, cuatrimestre: 0, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 75 },
        { codigo: "FA003", nombre: "Ingeniería Legal", año: 5, cuatrimestre: 0, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 75 },

        // Optativas - pool compartido para Optativa I y II
        { codigo: "FA024", nombre: "Gestión Empresarial", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "FA025", nombre: "Seguridad Industrial", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "IID12", nombre: "Principios de Calidad Total", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "QU018", nombre: "Fundamentos de Contaminación Ambiental", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "PE013", nombre: "Reservorios Avanzados", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "PE014", nombre: "Seminario de Ingeniería en Petróleo", año: 5, cuatrimestre: 2, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 60, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "IID13", nombre: "Seminario de Gestión de Proyectos", año: 5, cuatrimestre: 1, correlativas: [], condicion: "16 asignaturas aprobadas", cargaHoraria: 45, esOptativa: true, grupoOptativa: "optativa1" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma", condicion: "Aprobada antes de comenzar el cuarto año de la carrera" },
        { codigo: "PE015", nombre: "Práctica Profesional Supervisada IP", condicion: "23 asignaturas aprobadas" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "5 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default ingenieriaEnPetroleo;
