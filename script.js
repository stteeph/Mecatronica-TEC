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
  // Puedes seguir agregando todos los demás bloques aquí...
};

const aprobadas = new Set();

function puedeActivarse(materia) {
  const reqs = materia.reqs || [];
  const correqs = materia.correqs || [];
  return reqs.every(r => aprobadas.has(r)) && correqs.every(c => aprobadas.has(c));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
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
      if (aprobadas.has(m.id)) span.classList.add("aprobado");
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
      };
      div.appendChild(span);
    });
    contenedor.appendChild(div);
  }
}

renderMalla();
