
import { CargaVista } from "../cargaVista.js";
//import "../../js/jquery.flexslider.js";

export class Inicio extends CargaVista
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
        this.cargarHtml({ 
            rutaArchivo: "inicio/index.html", 
            onload: () => { 
                $(".flexslider").flexslider();  // Carga el banner con las fotos
            } 
        }); 

        //this.cargarHtml({textoHtml: "aaaaaaaaaaaa"});
    }
    
};

