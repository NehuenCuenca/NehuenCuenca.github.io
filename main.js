const registrarEventos = () => { registrarEventosNavBar() }


const registrarEventosNavBar = () => { 
    window.addEventListener('scroll', revelarSeccion)

    const { hash } = new URL(window.location.href)
    if( hash ){
        const seccion = document.querySelector(`main section${hash}`);
        if(seccion) { toggleClasesActivoPorSeccion(seccion.id, true) }
    }
}

const revelarSeccion = () => { 
    const seccionesEscondidas = Array.from( document.querySelectorAll('main section.revelar') )

    for (let i = 0; i < seccionesEscondidas.length; i++) {
        const altoVentana = window.innerHeight;
        const altoSeccionEscondida = seccionesEscondidas[i].getBoundingClientRect().top;
        const puntoRevelado = 150;
        const { id: seccionId } = seccionesEscondidas[i]

        if(altoSeccionEscondida < altoVentana - puntoRevelado){
            toggleClasesActivoPorSeccion(seccionId, true)
        } else {
            toggleClasesActivoPorSeccion(seccionId, false)
        }
    }
}

const toggleClasesActivoPorSeccion = (seccionId, booleanToggle) => { 
    const seccion = document.querySelector(`main section[id="${seccionId}"]`)
    const navButton = document.querySelector(`header nav a[data-seccion="${seccionId}"]`)

    if( booleanToggle ){
        seccion.classList.add('activo')
        navButton.classList.add('activo')
    } else {
        seccion.classList.remove('activo')
        navButton.classList.remove('activo')
    }
 }

window.addEventListener('DOMContentLoaded', registrarEventos)



