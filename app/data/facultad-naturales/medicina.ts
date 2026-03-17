import { Carrera } from "../../types";

const medicina: Carrera = {
    nombre: "Medicina",
    facultad: "Facultad de Ciencias Naturales y Ciencias de la Salud",
    sede: "Sede Comodoro Rivadavia",
    plan: "Resolución C.S. N° 001/23",
    materias: [
        // Primer Año
        { codigo: "01", nombre: "Biología", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 105 },
        { codigo: "02", nombre: "Comprensión de Textos", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "03", nombre: "Anatomía I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "04", nombre: "Histología y Embriología I", año: 1, cuatrimestre: 1, correlativas: [], cargaHoraria: 90 },
        { codigo: "05", nombre: "Biofísica", año: 1, cuatrimestre: 2, correlativas: ["01", "02", "03"], cargaHoraria: 105 },
        { codigo: "06", nombre: "Anatomía II", año: 1, cuatrimestre: 2, correlativas: ["01", "03", "04"], cargaHoraria: 90 },
        { codigo: "07", nombre: "Histología y Embriología II", año: 1, cuatrimestre: 2, correlativas: ["01", "03", "04"], cargaHoraria: 90 },
        { codigo: "08", nombre: "Ciencias Sociales y Medicina", año: 1, cuatrimestre: 2, correlativas: ["02"], cargaHoraria: 75 },

        // Segundo Año
        { codigo: "09", nombre: "Bioquímica", año: 2, cuatrimestre: 0, correlativas: ["05", "06", "07"], cargaHoraria: 180 },
        { codigo: "10", nombre: "Fisiología", año: 2, cuatrimestre: 0, correlativas: ["05", "06", "07"], cargaHoraria: 240 },
        { codigo: "11", nombre: "Genética", año: 2, cuatrimestre: 1, correlativas: ["06", "07"], cargaHoraria: 90 },
        { codigo: "12", nombre: "Inmunología", año: 2, cuatrimestre: 1, correlativas: ["06", "07"], cargaHoraria: 75 },
        { codigo: "13", nombre: "Salud de la Comunidad", año: 2, cuatrimestre: 1, correlativas: ["08"], cargaHoraria: 75 },
        { codigo: "14", nombre: "Inglés Médico", año: 2, cuatrimestre: 2, correlativas: ["02", "11"], cargaHoraria: 60 },
        { codigo: "15", nombre: "Microbiología", año: 2, cuatrimestre: 2, correlativas: ["11", "12"], cargaHoraria: 90 },
        { codigo: "16", nombre: "Bioestadística", año: 2, cuatrimestre: 2, correlativas: ["05"], cargaHoraria: 90 },

        // Tercer Año
        { codigo: "17", nombre: "Patología", año: 3, cuatrimestre: 0, correlativas: ["09", "10", "11", "12"], cargaHoraria: 150 },
        { codigo: "18", nombre: "Semiología", año: 3, cuatrimestre: 0, correlativas: ["09", "10", "11", "15"], cargaHoraria: 240 },
        { codigo: "19", nombre: "Farmacología", año: 3, cuatrimestre: 0, correlativas: ["09", "10", "12", "15"], cargaHoraria: 210 },
        { codigo: "20", nombre: "Investigación en Salud y Bioética", año: 3, cuatrimestre: 1, correlativas: ["13", "14", "16"], cargaHoraria: 75 },
        { codigo: "21", nombre: "Epidemiología", año: 3, cuatrimestre: 1, correlativas: ["13", "15", "16"], cargaHoraria: 75 },
        { codigo: "22", nombre: "Planificación de la Salud", año: 3, cuatrimestre: 2, correlativas: ["21"], cargaHoraria: 75 },
        { codigo: "23", nombre: "Diagnóstico por Imágenes", año: 3, cuatrimestre: 2, correlativas: ["10"], cargaHoraria: 75 },

        // Cuarto Año
        { codigo: "24", nombre: "Clínica Médica I", año: 4, cuatrimestre: 0, correlativas: ["17", "18", "19", "23"], cargaHoraria: 240 },
        { codigo: "25", nombre: "Promoción de la Salud", año: 4, cuatrimestre: 1, correlativas: ["20", "21", "22"], cargaHoraria: 105 },
        { codigo: "26", nombre: "Traumatología y Ortopedia", año: 4, cuatrimestre: 1, correlativas: ["17", "18", "19", "23"], cargaHoraria: 60 },
        { codigo: "27", nombre: "Medicina Legal y Deontología", año: 4, cuatrimestre: 1, correlativas: ["17", "20", "21"], cargaHoraria: 60 },
        { codigo: "28", nombre: "Infectología", año: 4, cuatrimestre: 2, correlativas: ["17", "18", "19", "21"], cargaHoraria: 75 },
        { codigo: "29", nombre: "Neurología", año: 4, cuatrimestre: 2, correlativas: ["18", "19"], cargaHoraria: 105 },
        { codigo: "30", nombre: "Salud Mental", año: 4, cuatrimestre: 2, correlativas: ["18", "19"], cargaHoraria: 105 },

        // Quinto Año
        { codigo: "31", nombre: "Clínica Médica II", año: 5, cuatrimestre: 0, correlativas: ["24", "28", "29", "30"], cargaHoraria: 240 },
        { codigo: "32", nombre: "Cirugía", año: 5, cuatrimestre: 0, correlativas: ["24", "26", "27", "28"], cargaHoraria: 150 },
        { codigo: "33", nombre: "Pediatría", año: 5, cuatrimestre: 0, correlativas: ["24", "26", "28"], cargaHoraria: 150 },
        { codigo: "34", nombre: "Emergentología", año: 5, cuatrimestre: 1, correlativas: ["24", "26", "27", "29"], cargaHoraria: 105 },
        { codigo: "35", nombre: "Ginecología", año: 5, cuatrimestre: 1, correlativas: ["24", "27"], cargaHoraria: 105 },
        { codigo: "36", nombre: "Obstetricia", año: 5, cuatrimestre: 2, correlativas: ["30", "35"], cargaHoraria: 75 },
        { codigo: "37", nombre: "Medicina General", año: 5, cuatrimestre: 2, correlativas: ["25", "28", "34"], cargaHoraria: 75 },

        // Sexto Año (Práctica Final Obligatoria - PFO)
        { codigo: "38", nombre: "PFO Clínica Médica", año: 6, cuatrimestre: 0, correlativas: ["31", "32", "33", "34", "35", "36", "37", "HFM", "HF"], cargaHoraria: 640 },
        { codigo: "39", nombre: "PFO Clínica Quirúrgica", año: 6, cuatrimestre: 0, correlativas: ["31", "32", "33", "34", "35", "36", "37", "HFM", "HF"], cargaHoraria: 320 },
        { codigo: "40", nombre: "PFO Clínica Pediátrica", año: 6, cuatrimestre: 0, correlativas: ["31", "32", "33", "34", "35", "36", "37", "HFM", "HF"], cargaHoraria: 320 },
        { codigo: "41", nombre: "PFO Clínica Gineco-Obstétrica", año: 6, cuatrimestre: 0, correlativas: ["31", "32", "33", "34", "35", "36", "37", "HFM", "HF"], cargaHoraria: 320 },
        { codigo: "42", nombre: "PFO Medicina General y Rural", año: 6, cuatrimestre: 0, correlativas: ["31", "32", "33", "34", "35", "36", "37", "HFM", "HF"], cargaHoraria: 320 }
    ],
    requisitos: [
        { codigo: "HFM", nombre: "Horas Flexibles de Formación Básica y Clínica (1° a 5° año)", condicion: "Deberán acreditarse materias optativas/flexibles un total de 220hs ANTES de iniciar la Práctica Final Obligatoria (PFO)." },
        { codigo: "HF", nombre: "Aprobación total de F. Básica y Clínica", condicion: "Para cursar la PFO se deberá tener aprobadas las asignaturas de la Formación Básica y Clínica y las horas flexibles." }
    ]
};

export default medicina;
