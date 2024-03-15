window.addEventListener('load',()=>{
    //variables de latitud y longitud
    let lon 
    let lat

    let temperaturaValor = document.getElementById('tempValor')
    let tDescripcion = document.getElementById('tempDescripcion')
    let Ubicacion = document.getElementById('ubicacion')
    let IconAnimado = document.getElementById('iconoAnimado')
    let vientoveloc = document.getElementById('vientoVelocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicacion por lat y longitud
            //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a8f35d70ad657704b79fab085b2b61f`
            //por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Quito&lang=es&units=metric&appid=3a8f35d70ad657704b79fab085b2b61f`
            //console.log(url);
            fetch(url)
            .then( response => {return response.json()})
            .then( data => {
                //obtener datos de la temperatura exacta 
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp}°C`
                //Descripcion de la T.Ciudad 
                let descrip = data.weather[0].description
                tDescripcion.textContent = descrip.toUpperCase();
                //ubicacion
                Ubicacion.textContent = data.name
                //velocidad del viento
                vientoveloc.textContent = `${data.wind.speed} m/s`

                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('Tormenta');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('Llovizna');
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('Lluvia');
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('Nieve');
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('Despejado');
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('Atmosfera');
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('Nuboso');
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                }
            })
            .catch(error =>{
                console.log(error)
            })
        })

    }
})
