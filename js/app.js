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
	"nombre":"Berenjena a la Provenzal",
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
	"nombre":"Berenjena a la Parmesana",
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
    			<select class="custom-select">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
    			<a href="#" id="agrega" class="btn btn-primary">Agregar</a>
  			
		</div>				
	`;
	});	

	platos.principales.forEach((plato)=>{
		dos.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
    			<a href="#" id="agrega" class="btn btn-primary">Agregar</a>
  			
		</div>
		`;	
	});
	platos.postres.forEach((plato)=>{
		cuatro.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
    			<a href="#" id="agrega" class="btn btn-primary">Agregar</a>
  			
		</div>
		`;	
	});
	platos.bebidas.forEach((plato)=>{
		tres.innerHTML+=`
			<div class="card" style="width:30%">
  			<img src=${plato.url} class="card-img-top" alt="">
    			<h5 class="card-title">${plato.nombre}</h5>
    			<p class="card-text">$ ${plato.precio}</p>
    			<select class="custom-select">
			  		<option selected>Cantidad</option>
			  		<option value="1">1</option>
			  		<option value="2">2</option>
			  		<option value="3">3</option>
			  		<option value="4">4</option>
				</select>
    			<a href="#" id="agrega" class="btn btn-primary">Agregar</a>
  			
		</div>
		`;	
	});
};
inicio();
