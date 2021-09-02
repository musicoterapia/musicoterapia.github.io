import { CargaVista } from '../cargaVista.js';


export class Contacto extends CargaVista
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

    cargarVista()
    {
        var texto = `
        <section class="camada_principal">

            <br/><br/><br/>

            <div id="camada_contenido">
                <div id="content">
                    
                    <fieldset style=" background: lightblue; padding: 1em; text-align: left;">
                       
                        <b> Nombre: </b> <span> Daniela Aravena Carroza </span> <br/><br/>
                        <b> Ciudad: </b> <span> Viña del Mar </span> <br/><br/>	
                        <b> Profesión: </b> <span> Musicoterapeuta - Escuela Europea Des Arts </span> <br/><br/>		
                        <b> Email: </b> <span> frahnnyaravena@gmail.com </span> <br/><br/>	

                        <br/><br/>
                        <h2> Clases particulares de Musicoterapia infantil (online) </h2>

                    </fieldset>
                </div>
            </div>  <br/><br/>

        </section>  
        `;

        this.cargarHtml({ textoHtml: texto });    
    }
};

