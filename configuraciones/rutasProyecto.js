

import { Inicio } from "../componentes/inicio/inicio.js";
import { Beneficios } from "../componentes/beneficios/beneficios.js";
import { Contacto } from "../componentes/contacto/contacto.js";
import { BeneficiosSindromeDown } from "../componentes/beneficiosSindromeDown/beneficiosSindromeDown.js";


export const rutasProyecto = [
    {nombre: "inicio", componente: Inicio, default: true},
    {nombre: "beneficios", componente: Beneficios},
    {nombre: "beneficiosSindromeDown", componente: BeneficiosSindromeDown},
    {nombre: "contacto", componente: Contacto}
];






