window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicacíon actual
            //const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=13f0d5cb33ac4186324de8e228017d47'

            //ubicacion por ciudad
            const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=13f0d5cb33ac4186324de8e228017d47'

            //console.log(url)
            fetch(url)
            .then(Response => {return Response.json() })
            .then(data =>{
                let temp = math round(data.main.temp)
                temperaturaValor.textContent = '${temp} °c'
                console.log(data.weather[0].description)
                let desc = data.weather[0].descripcion
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent = data.name

                vientoVelocidad.textContent = '${data.wind.speed} m/s'
                //console.log(data.wind.speed)

                //console.log(data.weather[0].icon)
                //let iconCode = data.weather[0].icon
                //imagenes estaticas
                //const urlIcon = https://openweathermap.org/img/wn/${iconCode}.png
                //console.log(urlIcon)
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'clear':
                            iconoAnimado.src = 'animatet/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'clouds':
                            iconoAnimado.src = 'animatet/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        case 'Thunderstore':
                            iconoAnimado.src = 'animatet/thunder.svg'
                            console.log('TORMENTA');
                             break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animatet/rainy-2.svg'
                            console.log('LLOVIZNA');
                             break;
                        case 'Rain':
                            iconoAnimado.src = 'animatet/rainy-7.svg'
                            console.log('LLUVIA');
                             break;
                        case 'Snow':
                            iconoAnimado.src = 'animatet/snowy-6.svg'
                            console.log('NIEVE');
                             break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animatet/weather.svg'
                            console.log('ATMOSFERA');
                             break;
                        default:
                            iconoAnimado.src='animated/cloudy-day-1.svg'
                            console.log('por defecto')

                }


            })
            .catch(error =>{
                console.log(error)
            })
       })
          
    }
})
