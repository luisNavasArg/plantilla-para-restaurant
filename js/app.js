let platos ={
"entradas":[{
	"nombre":"Brusqueta Capresa",
	"precio":"120",
	"url":"imagenes/brusquetaCapresa.png"
	},{
	"nombre":"Ensalada de cangrejo",
	"precio":"100",
	"url":"imagenes/ensaladaCangrjoPalta.png"
	},{
	"nombre":"Sopa de Tomate",
	"precio":"100",
	"url":"imagenes/sopaTomate.png"
	},{
	"nombre":"Empanadas varias",
	"precio":"100",
	"url":"imagenes/empanadas.png"
	}],
"principales":[{
	"nombre":"Berenjena Provenzal",
	"precio":"200",
	"url":"imagenes/berenjenaProvenzal.png"
	},
	{
	"nombre":"Berenjena Rellena",
	"precio":"230",
	"url":"imagenes/berenjenaRellena.png"
	},
	{
	"nombre":"Milanesa Napolitana",
	"precio":"200",
	"url":"imagenes/milanesaNapolitana.png"
	},
	{
	"nombre":"Berenjena Parmesana",
	"precio":"200",
	"url":"imagenes/berenjenaParmesana.png"
	}],
"bebidas":[{
	"nombre":"Vaso de Gaseosa",
	"precio":"50",
	"url":"imagenes/gaseosa.png"
	},
	{
	"nombre":"Vaso de Limonada",
	"precio":"50",
	"url":"imagenes/limonada.png"
	},
	{
	"nombre":"Agua con gas",
	"precio":"50",
	"url":"imagenes/aguasGas.png"
	},
	{
	"nombre":"Vaso de Licuado",
	"precio":"50",
	"url":"imagenes/licuado.png"
	}],
"postres":[{
	"nombre":"Pastel de limón",
	"precio":"80",
	"url":"imagenes/pastelLimon.png"
	},{
	"nombre":"Wafles de Mandioca",
	"precio":"80",
	"url":"imagenes/waflesYuca.png"
	},{
	"nombre":"Flan de Chocolate",
	"precio":"80",
	"url":"imagenes/flanChocolate.png"
	},{
	"nombre":"Cheescake con Frutilla",
	"precio":"80",
	"url":"imagenes/cheescake.png"
	}]
};
const inicio = ()=>{
	let uno = document.querySelector("#uno");
	let dos = document.querySelector("#dos");
	let tres = document.querySelector("#tres");
	let cuatro = document.querySelector("#cuatro");

	platos.entradas.forEach((plato)=>{
		uno.innerHTML+=`
		<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select" onchange="agregar(event, '${plato.nombre}',${plato.precio},'bebidas')">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
		</div>				
	`;
	});	

	platos.principales.forEach((plato)=>{
		dos.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select" onchange="agregar(event, '${plato.nombre}',${plato.precio},'bebidas')">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
    
		</div>
		`;	
	});
	platos.postres.forEach((plato)=>{
		cuatro.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select" onchange="agregar(event, '${plato.nombre}',${plato.precio},'bebidas')">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
		</div>
		`;	
	});
	platos.bebidas.forEach((plato)=>{
		tres.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select" onchange="agregar(event, '${plato.nombre}',${plato.precio},'bebidas')" name="seleccion">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
		</div>
		`;	
	});
};
inicio();


const IVA = 0.21;

const calcularPrecio = (precio)=>{
	return precio + (precio * IVA);
};
let pedido = [];
const agregar=(event, nombre, precio,item)=>{
console.log(event.target.value);

// let cantidad = document.querySelector(".custom-select");
// let elemento = document.querySelector("#agrega");
// console.log(elemento+" la cantidad: "+ cantidad.options[cantidad.selectedIndex].value);
console.log(nombre, precio);
pedido=[...pedido,{"categoria":item, "plato":nombre,"precio":precio,"cantidad":event.target.value}];

};

const mostrarPedido=()=>{
	console.log(pedido);	
};


