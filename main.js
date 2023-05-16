// Alert de bienvenida
alert('Hola, bienvenido a Amoblamientos Pepita');

let menu0 = parseInt(prompt(`
ingresar opcion deseada:

1. Ingresar como administrador
2. ingresar como usuario
3. Salir
`))

let menu1 = 0;
let menu2 = 0;
let validacionU = false;
let validacionA = false;

if (menu0 === 2) {
  menu1 = parseInt(prompt(`
ingresar opcion deseada:

1. Ingresar con DNI y contraseña
2. Registrarse
3. Salir
`))
} else if (menu0 === 1) {
  menu2 = parseInt(prompt(`
ingresar opcion deseada:

1. Ingresar con DNI y contraseña
2. Salir
`))
};


//creo objetos con constructora
class mueble {
  constructor(id, nombre, madera, peso, tamaño, precio) {
    this.id = id;
    this.nombre = nombre;
    this.madera = madera;
    this.peso = peso;
    this.tamaño = tamaño;
    this.precio = precio;
  }
  info(pruebaParentesis) {
    console.log(`este mueble tiene madera de ${this.madera}, pesa ${this.peso} kg, mide ${this.tamaño}m y cuesta un total de ${this.precio} pesos. ${pruebaParentesis} `)
  }

}


class admin {
  constructor(dni, contraseña) {
    this.dni = dni;
    this.contraseña = contraseña;
  }
}

class usuario {
  constructor(dni, contraseña) {
    this.dni = dni;
    this.contraseña = contraseña;
  }
}

const productos = [];
const validacionAdmin = [];
const validacionUsuario = [];

const MesaEscandinava = new mueble(1, "Mesa Escandinava", "melamina", 2, 1.2, 15000);
const MesaIndustrial = new mueble(2, "Mesa Industrial", "hierro", 5, 1.8, 25000);
const MesaComedor = new mueble(3, "Mesa Comedor", "vintage", 4, 1.4, 8200);
const MesaModerna = new mueble(4, "Mesa Moderna", "asia paraiso", 6, 1.4, 24000);
const MesaAve = new mueble(5, "Mesa Ave", "melamina", 2, 0.6, 9000);
const SillaGarden = new mueble(6, "Silla Garden", "hierro", 2, 1.2, 8000);
const SillaEscritorio = new mueble(7, "Silla Escritorio", "8214-hmv", 2, 1.2, 25000);
const SillaGamer = new mueble(8, "Silla Gamer", "god game pro", 2, 1.2, 40000);
const SillaComedor = new mueble(9, "Silla Comedor", "abs madera", 2, 1.2, 20000);
const SillaEjecutivo = new mueble(10, "Silla Ejecutivo", "ergonomico gerencial", 2, 1.2, 40000);

const admin1 = new admin(39757778, 1234);
const admin2 = new admin(12345678, 1234);
const admin3 = new admin(87654321, 1234);
const usuario1 = new usuario(22222222, 1234);
const usuario2 = new usuario(33333333, 1234);
const usuario3 = new usuario(44444444, 1234);

validacionAdmin.push(admin1, admin2, admin3);
validacionUsuario.push(usuario1, usuario2, usuario3);

const muebles = [
  MesaEscandinava,
  MesaIndustrial,
  MesaComedor,
  MesaModerna,
  MesaAve,
  SillaGarden,
  SillaEscritorio,
  SillaGamer,
  SillaComedor,
  SillaEjecutivo
];

for (const mueble of muebles) {
  productos.push({
    id: mueble.id,
    nombre: mueble.nombre,
    precio: mueble.precio
  });
}


function saludoSalida() {
  alert("gracias vuelva prontos");
}

function validoUsuario() {
  {
    let ingresarDni = parseInt(prompt("ingresar dni"));
    let ingresarContraseña = parseInt(prompt("ingrese contraseña"));

    const validarU = validacionUsuario.find((item) => item.dni === ingresarDni && item.contraseña === ingresarContraseña);

    console.log(validarU);
    if (validarU !== undefined) {
      alert("usuario validado")
      validacionU = true;
    }
  }
}

function creoUsuario() {
  {
    let ingresarDniNuevo = parseInt(prompt("ingresar dni"));
    let ingresarContraseñaNueva = parseInt(prompt("ingrese contraseña"));
    const nuevoUsuario = new usuario(ingresarDniNuevo, ingresarContraseñaNueva);
    validacionUsuario.push(nuevoUsuario);

    alert("usuario creado satisfactoriamente ");


  }
}

function validoAdmin() {
  let ingresarDni = parseInt(prompt("ingresar dni"));
  let ingresarContraseña = parseInt(prompt("ingrese contraseña"));
  const validarA = validacionAdmin.find((item) => item.dni === ingresarDni && item.contraseña === ingresarContraseña);

  console.log(validarA);

  if (validarA !== undefined) {
    alert("usuario validado")
    validacionA = true;
  }
}

function muestroTienda() {
  alert("a continuacion vera los productos disponibles en la tienda.")
  if (validacionU = true) {
    for (const producto of productos) {
      const mensaje = `
      id: ${producto.id} 
      Nombre: ${producto.nombre}
      Precio: ${producto.precio} pesos`;
      alert(mensaje);
    }
  }
}

function nuevoObjeto() {
  let ingresarIdNuevo = parseInt(prompt("ingresar id"));
  let ingresarNombreNuevo = prompt("ingrese nombre de producto");
  let ingresarMaderaNuevo = prompt("ingrese tipo de madera de producto");
  let ingresarPrecioNuevo = parseInt(prompt("ingrese precio de producto"));
  let ingresarPesoNuevo = parseInt(prompt("ingrese peso de producto"));
  let ingresarTamañoNuevo = parseInt(prompt("ingrese tamaño de producto"));
  const nuevoProducto = new mueble(ingresarIdNuevo, ingresarNombreNuevo, ingresarMaderaNuevo, ingresarPesoNuevo, ingresarTamañoNuevo, ingresarPrecioNuevo);
  productos.push(nuevoProducto);
  alert("producto añadido ");

}

function menu3() {
  let eleccionMenu3 = parseInt(prompt(`
  ingrese la opcion deseada:
  1. ver tienda
  2. agregar nuevo objeto a tienda
  3. salir
  `))
  switch (eleccionMenu3) {
    case 1:
      muestroTienda();
      break;
    case 2:
      nuevoObjeto();
      muestroTienda();
      saludoSalida();
      break;
    case 3:
      saludoSalida();
      break;

  }
}

if (menu1 === 1) {
  validoUsuario();
  muestroTienda();
} else if (menu1 === 2) {
  creoUsuario()
  alert("sera redirigido a inicio de sesion")
  validoUsuario();
  muestroTienda();
  saludoSalida();
} else if (menu1 === 3) {
  saludoSalida();
}




if (menu2 === 1) {
  validoAdmin();{
    if(validacionA == true){
    menu3();}else{
      alert("quien sos? anda palla")
    }
  }
  
} else if (menu2 === 2) {
  saludoSalida();
}