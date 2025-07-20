const materias = {
  "Bloque 0": [
    { id: "MA0101", nombre: "Matemáticas General" },
    { id: "CI0205", nombre: "Prueba avanzada de inglés" },
  ],
  "Bloque 1": [
    { id: "CA2125", nombre: "Elementos de computación" },
    { id: "CI1106", nombre: "Comunicación escrita" },
    { id: "CS1502", nombre: "Introducción técnica ciencia y tecnología", correqs: ["CI1106"] },
    { id: "FI1101", nombre: "Física general I", reqs: ["MA0101"] },
    { id: "FI1201", nombre: "Lab. Física general I", reqs: ["MA0101"] },
    { id: "MA1102", nombre: "Cálculo diferencial e integral", reqs: ["MA0101"] },
    { id: "QU1102", nombre: "Lab. Química básica" },
    { id: "QU1106", nombre: "Química Básica I" },
    { id: "SE1100-1", nombre: "Actividad cultural / deportiva 1" },
  ],
  "Bloque 2": [
    { id: "CA3125", nombre: "Análisis y diseño de algoritmos", reqs: ["CA2125"] },
    { id: "CI1107", nombre: "Comunicación Oral", reqs: ["CI1106"] },
    { id: "CS2101", nombre: "Ambiente Humano", reqs: ["CS1502"] },
    { id: "FH1000", nombre: "Centros de formación humanística" },
    { id: "FI1102", nombre: "Física general II", reqs: ["FI1101", "FI1201", "MA1102"] },
    { id: "FI1202", nombre: "Lab. Física general II", reqs: ["FI1201"] },
    { id: "MA1103", nombre: "Cálculo y álgebra lineal", reqs: ["MA1102"] },
    { id: "MT2001", nombre: "Circuitos Eléctricos en CC y CA", reqs: ["MA1102"] },
    { id: "MT2002", nombre: "Lab. de Circuitos CC y CA", reqs: ["MA1102"] },
    { id: "SE1100-2", nombre: "Actividad cultural / deportiva 2" },
  ],
  "Bloque 3": [
    { id: "FI2103", nombre: "Física general III", reqs: ["FI1101", "MA1102"] },
    { id: "MA2104", nombre: "Cálculo superior", reqs: ["MA1103"] },
    { id: "MI2101", nombre: "Dibujo técnico" },
    { id: "MT3001", nombre: "Electrónica analógica", reqs: ["MT2001"] },
    { id: "MT3002", nombre: "Lab. electrónica analógica", reqs: ["MT2001"] },
    { id: "MT3003", nombre: "Máquinas eléctricas para mecatrónica", reqs: ["FI1102", "MT2001"] },
    { id: "MT3004", nombre: "Lab. máquinas eléctricas", reqs: ["FI1102", "MT2001"] },
  ],
  "Bloque 4": [
    { id: "MA2105", nombre: "Ecuaciones diferenciales", reqs: ["MA1103"] },
    { id: "ME3208", nombre: "Tecnología de materiales", reqs: ["MI2101"] },
    { id: "MI2106", nombre: "Estática", reqs: ["FI1101", "MI2101"] },
    { id: "MI3103", nombre: "Procesos de manufactura", reqs: ["MI2101"] },
    { id: "MI3104", nombre: "Lab. procesos de manufactura", reqs: ["MI2101"] },
    { id: "MT4001", nombre: "Electrónica Digital", reqs: ["CA3125", "MT3001"] },
    { id: "MT4002", nombre: "Lab. electrónica digital", reqs: ["CA3125", "MT3001"] },
    { id: "SE1100-3", nombre: "Actividad cultural / deportiva 3" },
  ],
  "Bloque 5": [
    { id: "CI3202", nombre: "Inglés Para mecatrónica", reqs: ["CI0205"] },
    { id: "CS3401", nombre: "Seminario estudios filosóficos", reqs: ["CS2101"] },
    { id: "MI3115", nombre: "Resistencia de materiales", reqs: ["MI2106"] },
    { id: "MI3117", nombre: "Dinámica", reqs: ["MI2106"] },
    { id: "MT5002", nombre: "Modelos de sistemas", reqs: ["MA2105", "MT4001"] },
    { id: "MT5003", nombre: "Electrónica de potencia aplicada", reqs: ["MT3003"] },
    { id: "MT5004", nombre: "Lab. electrónica de potencia", reqs: ["MT3003"] },
  ],
  "Bloque 6": [
    { id: "CM3207", nombre: "Métodos numéricos", reqs: ["MT5002"] },
    { id: "CS4402", nombre: "Seminario costarricense", reqs: ["CS3401", "FH1000"] },
    { id: "MI3124", nombre: "Dibujo industrial", reqs: ["MI3103"] },
    { id: "MT6001", nombre: "Probabilidad y procesos estocásticos", reqs: ["MA2105", "MT5002"] },
    { id: "MT6002", nombre: "Termo fluidos", reqs: ["MI3117"] },
    { id: "MT6003", nombre: "Lab. termo fluidos", reqs: ["MI3117"] },
  ],
  "Bloque 7": [
    { id: "MT7001", nombre: "Análisis y simulación", reqs: ["MT5002"] },
    { id: "MT7002", nombre: "Sensores y actuadores", reqs: ["MT4001", "MT5002"] },
    { id: "MT7003", nombre: "Microprocesadores y microcontroladores", reqs: ["MT5003"] },
    { id: "MT7004", nombre: "Neumática y oleohidráulica", reqs: ["MT6002"] },
    { id: "MT7006", nombre: "Diseño de máquinas y mecanismos", reqs: ["MI3115", "MI3124"] },
    { id: "SO4604", nombre: "Seguridad y salud ocupacional", reqs: ["MT6001"] },
  ],
  "Bloque 8": [
    { id: "AE4208", nombre: "Desarrollo de emprendedores", reqs: ["SO4604"] },
    { id: "MT8001", nombre: "Teoría de comunicación y señales", reqs: ["MT7001"] },
    { id: "MT8002", nombre: "Automatización y redes", reqs: ["MT7002"] },
    { id: "MT8003", nombre: "Sistemas de manufactura", reqs: ["MI3103", "MT7002"] },
    { id: "MT8004", nombre: "Electiva I", reqs: ["MT6001", "MT7003"] },
  ],
  "Bloque 9": [
    { id: "EL5408", nombre: "Control Automático", reqs: ["MT7001"] },
    { id: "EL5409", nombre: "Lab. control automático", reqs: ["MT7001"] },
    { id: "MT7005", nombre: "Formulación de proyectos", reqs: ["MT8004", "MT8003"] },
    { id: "MT9001", nombre: "Diseño de sistemas mecatrónicos", reqs: ["MT8003"] },
    { id: "MT9002", nombre: "Mantenimiento de sistemas", reqs: ["MT8003"] },
  ],
  "Bloque 10": [
    { id: "MT9003", nombre: "Proyecto final de graduación", reqs: ["AE4208", "EL5408", "EL5409", "MT9001", "MT9002"] },
    { id: "MT9004", nombre: "Electiva II", reqs: ["MT8004"] },
  ],
};

const aprobadas = new Set();

function puedeActivarse(materia) {
  const reqs = materia.reqs || [];
  const correqs = materia.correqs || [];
  return reqs.every(r => aprobadas.has(r)) && correqs.every(c => aprobadas.has(c));
}

function renderMalla() {
  const contenedor = document.getElementById("grid-container");
  contenedor.innerHTML = "";
  for (const [bloque, lista] of Object.entries(materias)) {
    const div = document.createElement("div");
    div.className = "bloque";
    const h2 = document.createElement("h2");
    h2.textContent = bloque;
    div.appendChild(h2);
    lista.forEach(m => {
      const span = document.createElement("span");
      span.textContent = m.nombre;
      span.className = "materia";
      if (aprobadas.has(m.id)) {
        span.classList.add("aprobada");
        span.innerHTML += " ✔️";
      } else if (puedeActivarse(m)) {
        span.innerHTML += " ✅";
      }
      span.onclick = () => {
        if (aprobadas.has(m.id)) {
          aprobadas.delete(m.id);
        } else if (puedeActivarse(m)) {
          aprobadas.add(m.id);
        } else {
          alert("Esta materia tiene requisitos previos que no se han aprobado.");
          return;
        }
        renderMalla();
        actualizarContador();
      };
      div.appendChild(span);
    });
    contenedor.appendChild(div);
  }
  actualizarContador();
}

const contador = document.getElementById("contador");
const reiniciarBtn = document.getElementById("reiniciarBtn");

function actualizarContador() {
  const total = Object.values(materias).flat().length;
  const aprob = aprobadas.size;
  contador.textContent = `Materias aprobadas: ${aprob} de ${total}`;
}

reiniciarBtn.addEventListener("click", () => {
  aprobadas.clear();
  renderMalla();
  actualizarContador();
});

renderMalla();
