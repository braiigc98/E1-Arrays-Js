const ingredientes = [ //10 Ingredientes de una pizza mixta xl.
    'harina', 
    'levadura', 
    'mussarella', 
    'sal', 
    'oregano', 
    'morron', 
    'huevo',
    'tomate', 
    'jamon', 
    'salame',
] 

const ingredientesParesEImpares = (arrayIngredientes) => { //Separar de la pizza los ingredientes pares e impares.
    const pares = [];
    const impares = [];

    for (let i=0; i<arrayIngredientes.length; i++){
        if(arrayIngredientes[i].length % 2 === 0){
            pares.push(arrayIngredientes[i]);
        } else{impares.push(arrayIngredientes[i]);}
    }
    return [pares,impares]
}

const [pares,impares] = ingredientesParesEImpares(ingredientes);
console.log(`Los ingredientes pares son: ${pares}`, ` -  Los ingredientes impares son: ${impares}`);


