const carritoContainer = document.getElementById("carrito")
const suPedido = []

//agregar producto al carrito
function agregarAlCarrito(producto) {
    suPedido.push(producto)
    actualizarCarrito()
}
//quitar producto
function quitarDelCarrito(index) {
    suPedido.splice(index, 1)
    actualizarCarrito()
}

function calcularPrecioTotal() {
    let precioTotal = 0

    suPedido.forEach((producto) => {
        precioTotal += producto.precio
    })

    return precioTotal;
}

function actualizarCarrito() {
    carritoContainer.innerHTML = ''

    const carritoHeader = document.createElement("div")
    carritoHeader.innerHTML = '<h2>Mi Carrito</h2>'
    carritoContainer.appendChild(carritoHeader)

    suPedido.forEach((producto, index) => {
        const productoElement = document.createElement("div")
        productoElement.classList.add("producto")

        productoElement.innerHTML = `
            <span>${producto.nombre}</span>
            <button class="btn btn-danger" onclick="quitarDelCarrito(${index})">X</button>
        `
        carritoContainer.appendChild(productoElement)
    })

    const precioTotalElement = document.createElement("div")
    precioTotalElement.innerHTML = `
        <h4>Precio Total: $${calcularPrecioTotal()}</h4>
    `

    carritoContainer.appendChild(precioTotalElement)
}

const realizarPedidoButton = document.querySelector('.realizar__pedido button')

const exito = document.querySelector('.exito')

realizarPedidoButton.addEventListener('click', function () {
    if (suPedido.length === 0) {} else {
        localStorage.setItem('pedido', JSON.stringify(suPedido))
        let pedidoExitoso = document.createElement("div")
        pedidoExitoso.innerHTML = `
        <div class="bg-success bg-opacity-90 m-5 p-4 text-center">
            <h3>Pedido creado con exito</h3>
        </div>
        `
        exito.appendChild(pedidoExitoso)
        suPedido.length = 0
        actualizarCarrito()
    }
})



// Hamburguesas
const hamburguesas = [
    {id: 101, nombre: "Hamburguesa simple", precio: 1000, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna sola."},
    {id: 102, nombre: "Hamburguesa a caballo", precio: 2000, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna con huevo frito."},
    {id: 103, nombre: "Cheeseburger", precio: 2300, descripcion: "Hamburguesa con 100 gramos de carne 100% vacuna con queso cheddar."}
]

const hamburguesaContainer = document.querySelector('.hamburguesa')

hamburguesas.forEach(c => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let burger = document.createElement("div")
    burger.innerHTML = `
    <div class="bg-black bg-opacity-10 m-3 p-3">
        <h3>${c.nombre}</h3>
        <h4><b>$${c.precio}</b></h4>
        <p>${c.descripcion}</p>
        <button class="btn btn-warning" data-hamburguesa-id="${c.id}">Seleccionar Hamburguesa</but
    `

    const botonSeleccionar = burger.querySelector("button")
    botonSeleccionar.addEventListener("click", function () {
        const hamburguesaId = parseInt(this.getAttribute("data-hamburguesa-id"))
        const hamburguesaSeleccionada = hamburguesas.find(h => h.id === hamburguesaId)
        if (hamburguesaSeleccionada) {
            agregarAlCarrito(hamburguesaSeleccionada)
        }
    })

    column.appendChild(burger)
    hamburguesaContainer.appendChild(column)
});

// Acompañamientos
const acompaniamientos = [
    {id: 201, nombre: "Papas fritas", precio: 1000, descripcion: "Acompañamiento de papas fritas solas."},
    {id: 202, nombre: "Papas fritas con cheddar y bacon", precio: 1200, descripcion: "Acompañamiento de papas fritas con queso cheddar y bacon."},
    {id: 203, nombre: "Ensalada Mixta", precio: 1500, descripcion: "Acompañamiento de ensalada mixta de Lechuga, Tomate y Cebolla"}
]

const acompaniamientoContainer = document.querySelector('.acompaniamiento')

acompaniamientos.forEach(b => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let acomp = document.createElement("div")
    acomp.innerHTML = `
    <div class="bg-light bg-opacity-10 m-3 p-3">
        <h3>${b.nombre}</h3>
        <h4><b>$${b.precio}</b></h4>
        <p>${b.descripcion}</p>
        <button class="btn btn-warning" data-acompaniamiento-id="${b.id}">Seleccionar Acompañamiento</button>
    </div>
    `

    const botonSeleccionar = acomp.querySelector("button")
    botonSeleccionar.addEventListener("click", function () {
        const acompaniamientoId = parseInt(this.getAttribute("data-acompaniamiento-id"))
        const acompaniamientoSeleccionado = acompaniamientos.find(a => a.id === acompaniamientoId)
        if (acompaniamientoSeleccionado) {
            agregarAlCarrito(acompaniamientoSeleccionado)
        }
    });

    column.appendChild(acomp)
    acompaniamientoContainer.appendChild(column)
});

// Bebidas
const bebidas = [
    {id: 301, nombre: "Agua", precio: 500},
    {id: 302, nombre: "Jugo de Naranja", precio: 600},
    {id: 303, nombre: "Coca Cola", precio: 700}
]

const bebidaList = document.querySelector('.bebida-list')
bebidas.forEach(a => {
    let column = document.createElement('div')
    column.classList.add('col-md-4')

    let beb = document.createElement("div")
    beb.innerHTML = `
    <div class="bg-black bg-opacity-10 m-3 p-3">
        <h3>${a.nombre}</h3>
        <h4><b>$${a.precio}</b></h4>
        <button class="btn btn-warning" data-bebida-id="${a.id}">Seleccionar Bebida</button>
    </div>
    `

    const botonSeleccionar = beb.querySelector("button")
    botonSeleccionar.addEventListener("click", function () {
        const bebidaId = parseInt(this.getAttribute("data-bebida-id"))
        const bebidaSeleccionada = bebidas.find(b => b.id === bebidaId)
        if (bebidaSeleccionada) {
            agregarAlCarrito(bebidaSeleccionada)
        }
    })

    column.appendChild(beb)
    bebidaList.appendChild(column)
})
