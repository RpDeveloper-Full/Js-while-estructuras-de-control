// Ejemplo de uso de while en JavaScript

const generarNumeros = () => {
  const numero = parseInt(document.getElementById("numero").value);
  let salida = "";

  if (isNaN(numero) || numero <= 0) {
    salida = "Por favor ingresa un número válido mayor que 0 🙏";
  } else {
    let i = 1; // contador
    while (i <= numero) {
      salida += i + (i < numero ? ", " : ""); // concatenar números separados por coma
      i++;
    }
  }

  document.getElementById("resultado").textContent = salida;
};

// Evento del botón
document.getElementById("btnGenerar").addEventListener("click", generarNumeros);