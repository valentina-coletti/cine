const cantidadInput = document.getElementById("cantidad");
const precioTotalDiv = document.getElementById("precio-total");

cantidadInput.addEventListener("input", () => {
    const cantidad = parseInt(cantidadInput.value);
    const precioUnitario = 1000; // Precio por entrada
    const precioTotal = cantidad * precioUnitario;
    precioTotalDiv.textContent = `Precio Total: $${precioTotal}`;
});



