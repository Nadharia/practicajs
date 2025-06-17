
const edades = [12, 18, 25, 8, 30];

for (let index = 0; index < edades.length; index++) {
    if (edades[index]>=18) {
        console.log(`${edades[index]} es mayor`)
    }
    
}

const resultado=edades.filter((edad)=>edad>=18)

console.log(resultado)