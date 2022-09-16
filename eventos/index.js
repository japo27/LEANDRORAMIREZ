let nombre = prompt("Bienvenido para ingresar tu pedido, ingrese su nombre");
alert = ("Bienvenido/a ${nombre}");
let producto;
let Precio= 0
producto = prompt (`Carga tu pedido
1-Ensala de fruta
2-Helado de chocolate
3-Lemon Pie
4-Tarta de frutilla`)
if (producto == 1) {
  alert("ELEGISTE Ensalada de fruta")
}else if (producto == 2) {
  alert("ELEGISTE Helado de chocolate")
}else if (producto == 3) {
  alert("ELEGISTE Lemon Pie")
}else if (producto == 4) {
  alert("ELEGISTE Tarta de frutilla")
}
else {
  alert("ERROR");
}
let boton1 = document.getElementById("Ensala de fruta");
boton1.addEventListener("click", () => {
pedirDatos();
let div = document.createElement("div");
div.innerHTML = nombre;
document.body.append(div);
}
class Producto1 {
  constructor(Ensalada, Helado, Tarta, Lemon,){
    this.Ensalada = Ensalada;
    this.Helado = Helado;
    this.Tarta = Tarta;
    this.Lemon = Lemon;
    console.log(producto1);
  }
}
const producto2 = [];
producto2.push(new producto1("Ensalada de fruta", Precio, 450));
producto2.push(new producto1("Helado de chocolate", Precio, 450));
producto2.push(new producto1("Tarta de frutilla", Precio, 450));
producto2.push(new producto1("Lemon Pie", Precio, 450));
producto2.log(producto1);
localStorage.setItem('producto2', JSON.stringify(producto2));
for (const producto2 of producto2) {
  let div = document.createElement("div");
  div.innerHTML = `<h2>${producto2.nombre}</h2>
                   <p>${producto2.Precio} / ${producto2.Precio}</p>
                   <hr>`;
  document.body.appendChild(div);}

