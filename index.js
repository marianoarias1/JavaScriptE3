const Pizzas = [
    {
        id: 1,
        nombre: "Especial",
        ingredientes: ["morron", "jamon", "queso", "aceitunas", "salsa"],
        precio: 600
    },

    {
        id:2,
        nombre: "Muzzarella",
        ingredientes: ["queso muzzarella", "oregano", "aceitunas",],
        precio: 450
    },

    {
        id:3,
        nombre: "Calabresa",
        ingredientes: ["pimineta", "oregano", "aceitunas", "queso", "calabresa en rodajas","salsa"],
        precio: 500
    },

    {
        id:4,
        nombre: "Albahaca",
        ingredientes: ["jamon", "queso","tomate","albahaca","salsa"],
        precio: 350
    },

    {
        id:5,
        nombre: "Jamon Crudo",
        ingredientes:["queso","jamon crudo","aceitunas","salsa"],
        precio: 600
    },

    {
        id:6,
        nombre: "4 quesos",
        ingredientes: ["queso muzzarella","queso roquefort","queso cremoso","queso parmesano","aceitunas"],
        precio:350
    }
    
]



const pizzaName=  document.getElementById('pizza_name');

const pizzaPrice=  document.getElementById('pizza_price');

const pizzaID=  document.getElementById('pizza_ID');

const buttonSend=  document.getElementById('button_send');


const funcionPizzas=(Pizzas)=>{

    buttonSend.addEventListener('click', (e)=>{
        
        while(pizzaName.firstChild && pizzaPrice.firstChild){
            pizzaName.removeChild(pizzaName.firstChild);
            pizzaPrice.removeChild(pizzaPrice.firstChild);
    
        }



        let valorInput= pizzaID.value

        valorInput= Number(valorInput)

            
        const pizzaSelected= Pizzas.find((Pizzas)=>Pizzas.id === valorInput);

        console.log(pizzaSelected)

        if(pizzaSelected===undefined){
            alert('El id seleccionado no coincide con ninguna de nuestra Pizzas :c')
        }else{
            pizzaNameText= document.createTextNode(pizzaSelected.nombre)
            pizzaName.appendChild(pizzaNameText)
    
            pizzaPriceText= document.createTextNode(`$${pizzaSelected.precio}`)
            pizzaPrice.appendChild(pizzaPriceText)
        }

        pizzaID.value='' 
    })
    
}


funcionPizzas(Pizzas)

