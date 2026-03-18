import { Carrera } from "../../types";

const licenciaturaInformatica: Carrera = {
    nombre: "Licenciatura en Informática",
    facultad: "Facultad de Ingeniería",
    sede: "Sede Comodoro Rivadavia",
    plan: "Plan 2010",
    materias: [
        { codigo: "IF001", nombre: "Elementos de Informática", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 105 },
        { codigo: "MA045", nombre: "Álgebra", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 135 },
        { codigo: "IF002", nombre: "Expresión de Problemas y Algoritmos", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "IF003", nombre: "Algorítmica y Programación I", año: 1, cuatrimestre: 2, correlativas: ["IF002"], cargaHoraria: 120 },
        { codigo: "MA046", nombre: "Análisis Matemático", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 135 },
        { codigo: "MA008", nombre: "Elementos de Lógica y Matemática Discreta", año: 1, cuatrimestre: 2, correlativas: [], cargaHoraria: 120 },

        { codigo: "IF004", nombre: "Sistemas y Organizaciones", año: 2, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "IF005", nombre: "Arquitectura de Computadoras", año: 2, cuatrimestre: 1, correlativas: ["IF001"], cargaHoraria: 120 },
        { codigo: "IF006", nombre: "Algorítmica y Programación II", año: 2, cuatrimestre: 1, correlativas: ["IF003", "MA008"], cargaHoraria: 120 },
        { codigo: "IF007", nombre: "Bases de Datos I", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 135 },
        { codigo: "MA006", nombre: "Estadística", año: 2, cuatrimestre: 2, correlativas: ["MA045", "MA046"], cargaHoraria: 90 },
        { codigo: "IF008", nombre: "Programación Orientada a Objetos", año: 2, cuatrimestre: 2, correlativas: ["IF006"], cargaHoraria: 120 },

        { codigo: "IF009", nombre: "Laboratorio de Programación y Lenguajes", año: 3, cuatrimestre: 1, correlativas: ["IF008"], cargaHoraria: 90 },
        { codigo: "IF010", nombre: "Análisis y Diseño de Sistemas", año: 3, cuatrimestre: 1, correlativas: ["IF004", "IF007"], cargaHoraria: 135 },
        { codigo: "IF011", nombre: "Sistemas Operativos", año: 3, cuatrimestre: 1, correlativas: ["IF005", "IF006"], cargaHoraria: 150 },
        { codigo: "IF012", nombre: "Desarrollo de Software", año: 3, cuatrimestre: 2, correlativas: ["IF008", "IF010"], cargaHoraria: 120 },
        { codigo: "IF013", nombre: "Fundamentos Teóricos de Informática", año: 3, cuatrimestre: 2, correlativas: ["IF006", "MA008"], cargaHoraria: 120 },
        { codigo: "MA047", nombre: "Complementos Matemáticos", año: 3, cuatrimestre: 2, correlativas: ["MA045", "MA046"], cargaHoraria: 90 },

        { codigo: "IF015", nombre: "Ingeniería de Software", año: 4, cuatrimestre: 1, correlativas: ["IF012", "MA006"], cargaHoraria: 150 },
        { codigo: "IF018", nombre: "Inteligencia Artificial", año: 4, cuatrimestre: 1, correlativas: ["IF013", "MA047"], cargaHoraria: 120 },
        { codigo: "IF019", nombre: "Redes y Transmisión de Datos", año: 4, cuatrimestre: 1, correlativas: ["IF011"], cargaHoraria: 135 },
        { codigo: "IF016", nombre: "Aspectos Legales y Profesionales", condicion: "15 asignaturas aprobadas", año: 4, cuatrimestre: 2, correlativas: [], cargaHoraria: 60 },
        { codigo: "IF020", nombre: "Paradigmas y Lenguajes de Programación", año: 4, cuatrimestre: 2, correlativas: ["IF009", "IF013"], cargaHoraria: 120 },
        { codigo: "IF022", nombre: "Sistemas Distribuidos", año: 4, cuatrimestre: 2, correlativas: ["IF019"], cargaHoraria: 120 },

        { codigo: "OP1", nombre: "Optativa I", año: 5, cuatrimestre: 1, correlativas: [], cargaHoraria: 120, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "IF021", nombre: "Arquitectura de Redes y Servicios", año: 5, cuatrimestre: 1, correlativas: ["IF019"], cargaHoraria: 120 },
        { codigo: "IF017", nombre: "Taller de Nuevas Tecnologías", año: 5, cuatrimestre: 2, correlativas: ["IF015", "IF019"], cargaHoraria: 90 },
        { codigo: "OP2", nombre: "Optativa II", año: 5, cuatrimestre: 2, correlativas: [], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "IF025", nombre: "Sistemas Embebidos de Tiempo Real", año: 5, cuatrimestre: 2, correlativas: ["IF015", "IF022"], cargaHoraria: 120 },

        { codigo: "IF014", nombre: "Base de Datos II", año: 5, cuatrimestre: 1, correlativas: ["IF010"], cargaHoraria: 120, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "IF024", nombre: "Informática Industrial", año: 5, cuatrimestre: 1, correlativas: ["IF015", "IF019"], cargaHoraria: 120, esOptativa: true, grupoOptativa: "optativa1" },
        { codigo: "IF027", nombre: "Modelos y Simulación", año: 5, cuatrimestre: 1, correlativas: ["IF020"], cargaHoraria: 90, esOptativa: true, grupoOptativa: "optativa1" },

        { codigo: "IF023", nombre: "Diseño de Aplicaciones Web", año: 5, cuatrimestre: 2, correlativas: ["IF009", "IF015", "IF019"], cargaHoraria: 135, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "IF034", nombre: "Sistemas Paralelos", año: 5, cuatrimestre: 2, correlativas: ["IF018"], cargaHoraria: 120, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "IF053", nombre: "Planificación y Gestión de Sistemas de Información", año: 5, cuatrimestre: 2, correlativas: ["IF015"], cargaHoraria: 90, esOptativa: true, grupoOptativa: "optativa2" },
        { codigo: "IF028", nombre: "Monitorización y Visualización", año: 5, cuatrimestre: 2, correlativas: ["IF024"], cargaHoraria: 120, esOptativa: true, grupoOptativa: "optativa2" },
    ],
    requisitos: [
        { codigo: "FA007", nombre: "Acreditación de Idioma" },
        { codigo: "IF026", nombre: "Tesina" },
        { codigo: "FA102", nombre: "(Curso) Estrategias Comunicacionales", condicion: "10 asignaturas aprobadas" },
        { codigo: "FA103", nombre: "(Curso) Relaciones Humanas", condicion: "10 asignaturas aprobadas" },
    ],
} satisfies Carrera;

export default licenciaturaInformatica;
