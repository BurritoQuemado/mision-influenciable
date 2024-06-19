import React from "react";
import AgentesBtn from "../assets/images/boton-conoce.webp"
import Robot from "../assets/images/robot-solo.webp"

function Home() {
    
    return (
        <div className="bg-transparent">
          <div className="mx-auto max-w-7xl py-24 lg:py-10 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-principal sm:text-4xl">
                Misión Influencible
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-left leading-8 text-white">
                Misión Influencible es una competencia diseñada por una inteligencia artificial para poner a prueba la creatividad, la capacidad de resolución de problemas y las habilidades de comunicación de los influencers más destacados, y saber qué tan preparados están para influir en sus seguidores.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-lg text-left leading-8 text-white">
                Reconoceremos al influencer más completo, capaz de trabajar en equipo, resolver problemas bajo presión y crear contenido atractivo y original. A lo largo de algunos retos, los selectos participantes demostrarán su capacidad para influir y ser influenciados, llevando sus habilidades al límite.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-lg text-left leading-8 text-white">
                Desde la creación de contenido hasta la resolución de enigmas y la coordinación en equipo, Cada etapa tiene con un enfoque específico para evaluar diferentes habilidades.
              </p>
              <div className="flex items-center justify-center py-8">
                    <img src={Robot} alt="Robot" className="w-auto h-56 lg:h-80" />
                </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/agentes"
                  className="rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-principal/95 shadow-sm hover:bg-gray-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <img src={AgentesBtn} alt="ver agentes" className="h-20 w-auto"  />
                </a>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Home;