const portfolio = {
  profileInfo: [
    {
      label: "Actualmente",
      value: "Córdoba Capital, pasantía UTN + Municipalidad de Córdoba",
    },
    {
      label: "Intereses",
      value: "Desarrollo, tecnología y aprendizaje continuo",
    },
    {
      label: "Objetivo",
      value: "Encontrar una oportunidad laboral estable donde pueda crecer profesionalmente y aportar mis conocimientos y habilidades.",
    },
  ],
  experience: [
    {
      title: "Municipalidad de Córdoba",
      period: "Pasantía UTN + Municipalidad de Córdoba",
      description:
      "Pasantía institucional orientada a tecnología y gestión. Realizo pruebas sobre sistemas, identifico y documento errores para su posterior corrección, y participo en el seguimiento de trámites y mejoras del sistema.",
    },
    {
      title: "Ayudante de peluquería",
      period: "Mayo 2024 - Agosto 2025",
      description:
        "Asistencia en atención al cliente, apoyo en tareas de peluquería, mantenimiento del espacio de trabajo y preparación de herramientas.",
    },
    {
      title: "Gestión de redes sociales - peluquería",
      period: "Mayo 2024 - Agosto 2025",
      description:
        "Administración de Instagram, Facebook y TikTok, creación de contenido publicitario y promociones, y grabación y edición de videos cortos.",
    },
  ],
  projects: [
    {
      title: "Juego de escape y laberinto en C",
      description:
        "Proyecto simple de la universidad, de primer año de Sistemas, enfocado en lógica, estructuras de control y resolución de problemas.",
      tags: ["C", "Lógica"],
      url: "https://github.com/Rosario-22/Laberinto-C",
    },
    {
      title: "Sistema de estacionamiento en C",
      description:
        "Proyecto simple de la universidad, de primer año de Sistemas, para administrar entradas, salidas y control de registros de forma ordenada.",
      tags: ["C", "Gestión"],
      url: "https://github.com/Rosario-22/estacionamiento-C",
    },
    {
      title: "Sistema de gestión en Java",
      description:
        "Proyecto hecho en Java 8, pensado para organizar datos y procesar información con una estructura más robusta.",
      tags: ["Java", "POO", "SQL"],
      url: "https://github.com/Rosario-22/DonacionesSeminario-Java-",
    },
    {
      title: "Hackaton 2026 - Ajedrez 3D",
      description:
        "Participé en el backend de una aplicación de ajedrez 3D con Java, Spring Boot, API REST y WebSocket. Me encargué de la lógica del juego, validación de movimientos y actualización del estado en tiempo real. El equipo salió tercero en la hackatón.",
      tags: ["Spring Boot", "Backend", "WebSocket"],
      url: "https://github.com/Rosario-22/Hackaton-2026-Ajedrez3D",
    },
    {
      title: "Glamsoft",
      description:
        "Sistema de gestión para peluquerías en desarrollo, pensado para organizar turnos, clientes y tareas del negocio.",
      tags: ["En desarrollo", "Gestión"],
      note: "Sigue en proceso de desarrollo.",
    },
    {
      title: "Backend de dashboard municipal",
      description:
        "Backend desarrollado en Go para un dashboard interno vinculado al trabajo de la Municipalidad de Córdoba, orientado a organizar datos y facilitar la consulta de información. Actualmente está migrado a TypeScript.",
      tags: ["Go", "Backend", "Dashboard", "TypeScript"],
      note: "Proyecto realizado en contexto laboral/institucional.",
    },
    {
      title: "Extensión de Chrome para flujo interno",
      description:
        "Extensión creada para facilitar tareas del trabajo en la Municipalidad de Córdoba. Fue desarrollada inicialmente con JavaScript Vanilla y actualmente está migrada a TypeScript.",
      tags: ["Chrome Extension", "JavaScript", "TypeScript"],
      url: "#contact",
      note: "Herramienta pensada para automatizar y visualizar mejor los entornos de trabajo.",
    },
  ],
  skills: [
    {
      title: "Lenguajes",
      description: "Go, Java, SQL, C, JavaScript, TypeScript, HTML y CSS",
    },
    {
      title: "Backend",
      description: "Spring y Spring Boot en aprendizaje, APIs REST, lógica de negocio",
    },
    {
      title: "Testing",
      description: "Pruebas funcionales, identificación y reporte de errores, seguimiento de incidencias",
    },
    {
      title: "Bases web",
      description: "HTML y CSS, JavaScript Vanilla, extensiones de Chrome",
    },
    {
      title: "Control de versiones y foco",
      description: "Git y profundización en Java",
    },
    {
      title: "Herramientas y entorno",
      description: "Git, GitHub, Chrome Extensions y trabajo con proyectos institucionales",
    },
  ],
  education: [
    {
      title: "Ingeniería en Sistemas de Información",
      period: "Universidad Tecnológica Nacional - Facultad Regional Córdoba | En curso",
      description: "Estudiante de la carrera de Ingeniería en Sistemas en UTN FRC.",
    },
  ],
  courses: [
    {
      title: "Tecnología",
      items: [
        "HTML y CSS - Curso con certificación",
        "Introducción a Git y GitHub - TodoCode Academy (2026)",
        "Introducción a las Bases de Datos Relacionales con MySQL - TodoCode Academy (2026)",
        "Escalabilidad y Seguridad de Aplicaciones Web - Edutin Academy (2026)",
      ],
    },
  ],
  contact: [
    {
      label: "Email",
      value: "lopeztorresrosario362@gmail.com",
      href: "mailto:lopeztorresrosario362@gmail.com",
      icon: "@",
    },
    {
      label: "Email secundario",
      value: "lopeztorresrosario362@hotmail.com",
      href: "mailto:lopeztorresrosario362@hotmail.com",
      icon: "@",
    },
    {
      label: "LinkedIn",
      value: "Mi perfil",
      href: "https://www.linkedin.com/feed/",
      icon: "in",
    },
  ],
};

const selectors = {
  profileInfo: '[data-render="profile-info"]',
  experience: '[data-render="experience"]',
  projects: '[data-render="projects"]',
  skills: '[data-render="skills"]',
  education: '[data-render="education"]',
  courses: '[data-render="courses"]',
  contact: '[data-render="contact"]',
};

const renderList = (selector, items, template) => {
  const container = document.querySelector(selector);

  if (!container) {
    return;
  }

  container.innerHTML = items.map(template).join("");
};

const renderTags = (tags) =>
  tags.map((tag) => `<span class="chip">${tag}</span>`).join("");

renderList(
  selectors.profileInfo,
  portfolio.profileInfo,
  (item) => `
    <div class="info-item">
      <span>${item.label}</span>
      ${item.value}
    </div>
  `,
);

renderList(
  selectors.experience,
  portfolio.experience,
  (item) => `
    <article class="timeline-item">
      <strong>${item.title}</strong>
      <small>${item.period}</small>
      <p>${item.description}</p>
    </article>
  `,
);

renderList(
  selectors.projects,
  portfolio.projects,
  (project) => `
    <article class="box project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-meta">
        ${renderTags(project.tags)}
        <a class="btn btn-secondary project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver repo</a>
      </div>
      ${project.note ? `<p class="project-note">${project.note}</p>` : ""}
    </article>
  `,
);

renderList(
  selectors.skills,
  portfolio.skills,
  (skill) => `
    <article class="box skill-card">
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>
    </article>
  `,
);

renderList(
  selectors.education,
  portfolio.education,
  (item) => `
    <article class="timeline-item">
      <strong>${item.title}</strong>
      <small>${item.period}</small>
      <p>${item.description}</p>
    </article>
  `,
);

renderList(
  selectors.courses,
  portfolio.courses,
  (course) => `
    <article class="box">
      <h3>${course.title}</h3>
      <p>${course.items.join("<br />")}</p>
    </article>
  `,
);

renderList(
  selectors.contact,
  portfolio.contact,
  (item) => `
    <a class="contact-row" href="${item.href}" target="${item.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener noreferrer">
      <span class="contact-label"><span class="contact-icon">${item.icon}</span>${item.label}</span>
      <strong>${item.value}</strong>
    </a>
  `,
);