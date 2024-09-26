const URL = 'https://apis.datos.gob.ar/georef/api/provincias'
// const archivoProvincias = '../data/provincias.json'

fetch(URL)
  .then(response => response.json())
  .then(datos => {
    // obtenemos el atributo provincias
    const { provincias } = datos
    window.localStorage.setItem('provincias', JSON.stringify(provincias))
    if (provincias.length > 0) {
      // Seleccionamos el nodo padre al cual se van a agregar
      const gridProvincias = document.querySelector('#grid-provincias')
      // Recorremos todas las provincias
      provincias.forEach(provincia => {
        // 1 - Crear un elemento para cada provincia
        const gridItem = document.createElement('article')
        // 2 - Agregamos la clase de css grid-item
        gridItem.classList.add('grid-item')
        // 3 - Le agregamos un h4 con el nombre
        gridItem.innerHTML = `<h4>${provincia.nombre}</h4>`
        // 4 - Agregamos evento de click al elemento
        gridItem.addEventListener('click', () => {
          window.location.href = `provincia.html?id=${provincia.id}`
        })
        // 5 - Agregar el elemento creado al nodo de provincias
        gridProvincias.appendChild(gridItem)
      })
    }
  })
