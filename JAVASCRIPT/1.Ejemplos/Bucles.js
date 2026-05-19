//Bucle

console.log("Tabla del 1");
let i;
for (i=0;i<=10;i++){
     console.log(i);
}



console.log("Tabla del 2");
i=0;
while (i<=10)
{
    console.log(i);
    i=i+2;
}



console.log("Tabla del 3")
i=0;
while (i<=30)
{
    console.log(i);
    i=i+3;
}

console.log("Tabla del 4")
i=0;
while (i<=40)
{
    console.log(i);
    i=i+4;
}

function multiplicar(numero)
{
    let j=0;
    while (j<=10){
        console.log(j + "x" + numero +"=" + j*numero);
        j++;
    }
}
let h;
for(h=0;h<=10;h++){
    console.log("Tabla de multiplicar del numero:" + h)
    multiplicar(h);
}