import { CargaVista } from '../cargaVista.js';


export class Beneficios extends CargaVista
{
    constructor()
    {
        super();

        for (var prop in this) { window[prop] = this[prop]; }                                          // Coloca los atributos de la clase para que esten disponibles desde el html
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { window[c] = this[c]; });  // Coloca los metodos de la clase para que esten disponibles desde el html
        
        this.cargarVista();
    }

    destructor() {
        for (var prop in this) { delete window[prop]; }                                             // Remueve los atributos de la clase para que no queden en la ventana
        Object.getOwnPropertyNames(this.constructor.prototype).forEach(c=> { delete window[c]; });  // Remueve los metodos de la clase para que no queden en la ventana
    }

    probando() {
        alert("hola desde la clase Pinturas");
    }
    
    cargarVista()
    {
        //this.cargarHtml({ rutaArchivo: "componentes/pinturas/index.html" });  
        
        var arreglo = [
            { href: "img/instrumentos/grande-1.png", src: "img/instrumentos/mini-1.png" },
            { href: "img/instrumentos/grande-2.png", src: "img/instrumentos/mini-2.png" },
            { href: "img/instrumentos/grande-3.png", src: "img/instrumentos/mini-3.png" }
        ];
        
        var texto = `
        <section class="camada_principal">

            <br/>

            <div id="camada_contenido">

                <div id="content">

                    ${arreglo.map((c, index) => 
                    { 
                        return `
                        <a rel="trabajos" class="fade" href="${c.href}" title="Trabajo ${index + 1}">
                            <img src="${c.src}" alt="">
                        </a>
                        ` 
                    }).join("")} 
                </div>    

                <br/><br/><br/>
                    
                <fieldset style=" background: lightblue; padding: 1em; text-align: left;">

                    <h2> Beneficios de la Musicoterapia </h2> 
                    
                    <br/><br/> 

                    La música produce efectos beneficiosos en el sistema sensorial, cognitivo y motor. Estimula la creatividad, el lenguaje, el aprendizaje y la memoria.

                    <br/><br/>

                    <h3> A nivel cognitivo: </h3> <br/>
                    Aumento de la capacidad de aprendizaje, mejora la orientación, aumento de la capacidad de atención, concentración y estimulación de la comunicación y el lenguaje.

                    <br/><br/>
                    <h3> A nivel físico: </h3> <br/>
                    Mantenimiento de la movilidad de las articulaciones y fuerza de la musculatura, relajación y disminución de los niveles de ansiedad.
                    Hay un refuerzo importante en los logros que va teniendo el niño, esto ayuda a un aumento de la autoestima y un desarrollo social. 

                    <br/><br/> 

                    <img src="img/beneficios/beneficios.png" alt="beneficios">
            
                    <br/><br/> 
            
                </fieldset>

            </div>  <!-- fin camada_contenido -->	

        </section>  <!-- Fin camada principal -->
        `;

        this.cargarHtml({ textoHtml: texto });    
    }
};

