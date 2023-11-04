let nombreUser = prompt("Ingresa tu nombre para continuar");
let edadUser = prompt(
  `Bienvenido ${nombreUser}, por favor indica tu edad para continuar en el sitio`
);

if (edadUser >= 18) {
  alert(
    `${nombreUser} puedes continuar en el sitio y realizar tus compras o reservas`
  );

  function agregoLibro() {
    let libroIngresado = prompt("Ingrese el nombre del libro");
    alert(`El nombre del libro ingresado es: ${libroIngresado}`);
  }

  function agregoPrecioLibro() {
    let precioIngresado = parseInt(prompt("Ingrese el precio del libro "));
    alert(`El precio del libro ingresado es $${precioIngresado}`);
    const IVA = 0.22;
    let precioFinal = precioIngresado + precioIngresado * IVA;
    alert(`El precio final del libro con IMPUESTOS es $${precioFinal}`);
  }

  const IVA = 0.22;

  function mostrarDatosLibro() {
    let libroA = "El Gran Gatsby";
    let libroB = "Cien años de soledad";
    let libroC = "1984";

    let precioLibroA = 200;
    let precioLibroB = 180;
    let precioLibroC = 250;

    alert(
      `El libro ${libroA} tiene un precio sin IMPUESTOS de $${precioLibroA} y un precio total con IMPUESTOS de $${precioLibroA + precioLibroA * IVA}`
    );
    alert(
      `El libro ${libroB} tiene un precio sin IMPUESTOS de $${precioLibroB} y un precio total con IMPUESTOS de $${precioLibroB + precioLibroB * IVA}`
    );
    alert(
      `El libro ${libroC} tiene un precio sin IMPUESTOS de $${precioLibroC} y un precio total con IMPUESTOS de $${precioLibroC + precioLibroC * IVA}`
    );
  }

  let salirMenu = false;
  do {
    let opcionMenu = prompt(`Ingrese la opción deseada
      A - Agregar Libro
      B - Agregar Precio de Libro
      C - Mostrar Libros y precios
      D - Salir del Menú`);

    switch (opcionMenu) {
      case "A":
        agregoLibro();
        break;
      case "B":
        agregoPrecioLibro();
        break;
      case "C":
        mostrarDatosLibro();
        break;
      case "D":
        salirMenu = true;
        break;
      default:
        alert("Elija una Opción válida");
    }
  } while (!salirMenu);

} else {
  alert(`Lo sentimos ${nombreUser}, no tienes la edad suficiente para realizar compras web`);
}
