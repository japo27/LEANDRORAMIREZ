let nombre = prompt("Bienvenido para ingresar tu pedido, ingrese su nombre");
alert(`Bienvenido/a ${nombre}`);

let producto1;
let precio1= 0;
producto1 = prompt(`Carga tu pedido
1-Ensala de fruta
2-Helado de chocolate
3-Lemon Pie 
4-Tarta de frutilla`);

switch (producto1) {
    case "1":;
    producto1 = " Ensalada de fruta";
    precio1 = 450;
    alert(`Felicitaciones ${producto1}, ${precio1}, ${cantidad}`);
    
    break;
    case "2":
    producto1 = " Helado de chocolate"; 
    precio1 = "a pagar", 120;
    alert(`Felicitaciones ${producto1}, ${precio1}, ${cantidad}`);
   
    break;
    case "3":
    producto1 = " Lemon pie";
    precio1 = "a pagar", 230;
    alert(`Felicitaciones ${producto1}, ${precio1}, ${cantidad}`);
    
    break;
    case "4":
    producto1 = " Tarta de frutilla";
    precio1 = 1200;
    cantidad = "a pagar", 60;
    alert(`Felicitaciones ${producto1}, ${precio1}, ${cantidad}`);
    break;
}
 class producto { 
   constructor(nombre, precio,){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const productos = [];
producto1.push (new producto1("Ensalada de fruta"));
producto2.push (new producto2("Helado de chocolate")); 
producto3.push (new producto3("Lemon Pie "));
producto4.push (new producto4("Tarta de frutilla"));
  
  
  const producto = new Producto("Ensalada", 5000,);
  
  console.log(producto);
  producto1.vender();
  console.log(producto); 
 