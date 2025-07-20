const materias = {
  // ... (igual que antes, no cambia)
};

const aprobadas = new Set(JSON.parse(localStorage.getItem("aprobadas")) || []);

function puedeActivarse(materia) {
  const reqs = materia.reqs || [];
  const correqs = materia.correqs || [];
  return reqs.every(r => aprobadas.has(r)) && correqs.every(c => aprobadas.has(c));
}

function guardarProgreso() {
  localStorage.setItem("aprobadas", JSON.stringify([...aprobadas]));
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
        span.innerHTML += ` <span class="icono-aprobado" title="Aprobada">✔️</span>`;
      } else if (puedeActivarse(m)) {
        span.innerHTML += ` <span class="icono-desbloqueado" title="Desbloqueada">🔓</span>`;
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
        guardarProgreso();
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
  guardarProgreso();
  renderMalla();
  actualizarContador();
});

// Inicializa
renderMalla();
