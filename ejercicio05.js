const[primero,...resto]=[1,2,3,4]

const sumar=(...numeros)=>{
    const resultado=numeros.reduce((a,b)=>a+b,0)
    return resultado;
};
console.log(sumar(1,2,3))


