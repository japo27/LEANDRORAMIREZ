

class zapatos {
    constructor(mes,monto){
        this.mes = mes;
        this.monto=monto;
    }
}

const zapatoss= [];
const zapatos1=new zapatos ("Rojo", 5000);
const zapatos2=new zapatos ("Azul", 3000);
const zapatos3=new zapatos ("Negro", 15000);

zapatoss.push (zapatos1);
zapatoss.push (zapatos2);
zapatoss.push (zapatos3);

console.log(zapatoss);

let total = zapatoss.reduce((sumozapatos,Zapatos) => sumozapatos+Zapatos.monto,0);
console.log(total);
