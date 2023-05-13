const optionesMenuPrincipal = document.querySelector('.optionesMenuPrincipal');
const optionMenu = document.querySelector('.optionMenu');
const marca = document.querySelector('.marca')
const mobileContainer = document.querySelector('.mobile-container')
const containerCards = document.querySelector('.container-cards')



marca.addEventListener('click', ()=>{
    mobileContainer.classList.toggle('inactive')
})


optionesMenuPrincipal.addEventListener('click', ()=>{
    optionMenu.classList.toggle('inactive')
})


const productoList = [];
productoList.push({
    nombre:'Moto Harley',
    precio: 950,
    imagen: './assets/producto1.jpeg',
});

productoList.push({
    nombre:'Carro yellow',
    precio: 750,
    imagen: './assets/producto3.jpeg',
});

productoList.push({
    nombre:'Moto green',
    precio: 250,
    imagen: './assets/producto2.jpeg',
});

productoList.push({
    nombre:'Moto Harley',
    precio: 950,
    imagen: './assets/producto1.jpeg',
});

productoList.push({
    nombre:'Carro yellow',
    precio: 750,
    imagen: './assets/producto3.jpeg',
});

productoList.push({
    nombre:'Moto green',
    precio: 250,
    imagen: './assets/producto2.jpeg',
});

productoList.push({
    nombre:'Moto Harley',
    precio: 950,
    imagen: './assets/producto1.jpeg',
});

productoList.push({
    nombre:'Carro yellow',
    precio: 750,
    imagen: './assets/producto3.jpeg',
});


const creacionProductos = (arr)=>{
    for(producto of arr){

        const cart = document.createElement('article');
        cart.classList.add('cards');
    
        const contenedor = document.createElement('figure');
        const img = document.createElement('img');
        img.classList.add("producto");
        img.setAttribute('src', producto.imagen);
        contenedor.appendChild(img);
    
    
    
        const nameProducto = document.createElement('p');
        nameProducto.innerText = producto.nombre;
    
    
        const precio = document.createElement('span');
        precio.classList.add("precio");
        precio.innerText = '$' + producto.precio;
    
    
        const boton = document.createElement('button');
        boton.classList.add('comprar');
        boton.innerText = 'Añadir';
    
    
        
        cart.append(contenedor,nameProducto,precio,boton);
        containerCards.classList.add("container-cards")
        containerCards.appendChild(cart);
    }
}

creacionProductos(productoList);