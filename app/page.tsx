"use client";

import { useState, useEffect } from "react";
import type { Carrera } from "./types";
import { useProgresoUsuario } from "./hooks/useProgresoUsuario";
import Header from "./components/Header";
import DiagramaPlan from "./components/DiagramaPlan";
import ModalBienvenida from "./components/ModalBienvenida";
import carrerasPorFacultad from "./data";
import WidgetProgreso from "./components/WidgetProgreso";
import SeccionRequisitos from "./components/SeccionRequisitos";

const carreras = Object.values(carrerasPorFacultad).flat();

export default function Home() {
  const {
    progreso,
    getEstado,
    handleCicloEstado,
    setCarrera,
    estaDesbloqueada,
    getOptativaElegida,
    setOptativaElegida,
  } = useProgresoUsuario();

  const [mounted, setMounted] = useState(false);
  const [showBienvenida, setShowBienvenida] = useState(false);
  const [carreraVista, setCarreraVista] = useState<string | undefined | null>(undefined);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("plan-estudios-progress")) {
      setShowBienvenida(true);
    }
  }, []);

  const nombreCarreraAMostrar = carreraVista !== undefined ? carreraVista : progreso.carreraId;

  const carreraSeleccionada: Carrera | null =
    carreras.find((c) => c.nombre === nombreCarreraAMostrar) ?? null;

  const handleSeleccionarCarreraOnboarding = (carrera: Carrera) => {
    setCarrera(carrera.nombre, carrera.facultad);
    setCarreraVista(undefined);
    setShowBienvenida(false);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50 dark:bg-black" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      {showBienvenida && (
        <ModalBienvenida
          carreras={carreras}
          onSeleccionar={handleSeleccionarCarreraOnboarding}
        />
      )}

      <Header
        carreras={carreras}
        carreraSeleccionada={carreraSeleccionada}
        onSeleccionarCarrera={(c) => setCarreraVista(c.nombre)}
        onLimpiarCarrera={() => setCarreraVista(null)}
      />

      {carreraSeleccionada ? (
        <>
          <DiagramaPlan
            materias={carreraSeleccionada.materias}
            getEstado={getEstado}
            handleCicloEstado={handleCicloEstado}
            estaDesbloqueada={(codigo) => estaDesbloqueada(codigo, carreraSeleccionada.materias)}
            getOptativaElegida={getOptativaElegida}
            setOptativaElegida={setOptativaElegida}
          />
          {carreraSeleccionada.requisitos && carreraSeleccionada.requisitos.length > 0 && (
            <SeccionRequisitos
              requisitos={carreraSeleccionada.requisitos}
              getEstado={getEstado}
              handleCicloEstado={(codigo) => handleCicloEstado(codigo, true)}
            />
          )}
          <WidgetProgreso
            materias={carreraSeleccionada.materias}
            requisitos={carreraSeleccionada.requisitos}
            getEstado={getEstado}
          />
        </>
      ) : (
        <div className="flex items-center justify-center py-20">
          <p className="text-slate-500">
            Seleccioná una carrera para ver el plan de estudios
          </p>
        </div>
      )}
    </div>
  );
}
