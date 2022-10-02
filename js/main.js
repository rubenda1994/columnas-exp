//guardar el estado columna activa

let columnaActiva = 1

//selecionar las columnas
const columnas = document.querySelectorAll(".columna")

//escuchar los clicks en cada columna
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        cambiarColumna(indice)
    })
})

//cambiar el estado de las columnas
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}