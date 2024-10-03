const textarea = document.getElementById("text-input");
const sidebar = document.getElementById("sidebar");
const transformedContent = document.getElementById("transformed-content");
const defaultContent = document.getElementById("default-content");
const outputText = document.getElementById("output-text");

// Manejar el evento "Transformar"
document.getElementById("transform-btn").addEventListener("click", function () {
  const text = textarea.value;

  // Validar que el texto no tenga números
  if (/\d/.test(text)) {
    alert("El texto no debe contener números");
    return;
  }

  // Transformar el texto a mayúsculas
  if (text.trim() !== "") {
    outputText.textContent = text.toUpperCase();
    defaultContent.style.display = "none";
    transformedContent.style.display = "flex";
    sidebar.style.justifyContent = "flex-start";
  }
});

// Manejar el evento "Limpiar"
document.getElementById("clear-btn").addEventListener("click", function () {
  textarea.value = "";
  transformedContent.style.display = "none";
  defaultContent.style.display = "block";
  sidebar.style.justifyContent = "center";
});
