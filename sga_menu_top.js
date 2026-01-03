document.addEventListener("DOMContentLoaded", () => {

  const welcomePanel = document.getElementById("panel-welcome");
  const dynamicPanel = document.getElementById("panel-dynamic");

  const title = document.getElementById("panel-title");
  const desc = document.getElementById("panel-description");

  const sections = {

    "inicio": [
      "Bienvenido",
      "Acceso a información académica general del estudiante."
    ],

    "datos": [
      "Datos personales",
      "Gestión de información personal y de contacto del estudiante."
    ],

    "historial": [
      "Historial académico",
      "Registro consolidado de materias aprobadas, reprobadas y en curso."
    ],

    "certificados": [
      "Certificados académicos",
      "Solicitud y descarga de certificados disponibles."
    ],

    "horario": [
      "Horario del estudiante",
      "Visualización de horarios organizados por día y aula."
    ],

    "matricula": [
      "Proceso de matrícula",
      "Flujo guiado para inscripción académica."
    ],

    "solicitudes": [
      "Solicitudes en línea",
      "Envío y seguimiento de solicitudes académicas."
    ],

    "pagos": [
      "Pagos y estado de cuenta",
      "Detalle de rubros y valores pendientes."
    ],

    "perfil": [
      "Perfil del usuario",
      "Configuración de nombre visible y preferencias."
    ],

    "seguridad": [
      "Seguridad y acceso",
      "Cambio de contraseña y gestión de accesos."
    ]
  };


  document.querySelectorAll("[data-panel]").forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const key = link.getAttribute("data-panel");

      if (!sections[key]) return;

      const [t, d] = sections[key];

      title.textContent = t;
      desc.textContent = d;

      welcomePanel.hidden = true;
      dynamicPanel.hidden = false;
    });
  });

});

