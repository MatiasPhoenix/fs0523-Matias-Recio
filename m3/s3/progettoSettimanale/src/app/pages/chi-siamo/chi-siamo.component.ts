
import { Component } from '@angular/core';
import { MeteoAppService } from '../../meteo-app.service';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { IGiorno } from '../../Models/igiorno';




@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss',


})


export class ChiSiamoComponent {
  constructor(private meteoAppSvc: MeteoAppService) {}

  meteoDay:IGiorno[] = []
  myMeteo:IGiorno[] = []


  city = '';
  weatherData: any;


  oggiGiorno = "Oggi";
  domaniGiorno = "Domani";

  today:IGiorno = {
    city:"",
    giorno:"",
    tempo:"",
    temperatura: ""
  };

  day1:IGiorno = {
    city:"",
    giorno:"",
    tempo:"",
    temperatura: ""
  };

  day2:IGiorno = {
    city:"",
    giorno:"",
    tempo:"",
    temperatura: ""
  };

  day3:IGiorno = {
    city:"",
    giorno:"",
    tempo:"",
    temperatura: ""
  };

  ngOnInit(){
    this.getWeather();
  }

  getWeather(): void {
    this.meteoAppSvc.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;

      const getWeatherAtIndex = (index: number): IGiorno | null => {
        if (this.weatherData.list && this.weatherData.list.length > index) {
          const dataGiorno = this.weatherData.list[index].dt_txt;
          const infoGiorno = new Date(dataGiorno);
          const giornoSettimana = format(infoGiorno, 'EEEE', { locale: it });
          const condition = this.weatherData.list[index].weather[0].main;
          let weatherImage = this.weatherData.list[index].weather[0].icon;

          return {
            city: this.weatherData.city.name,
            giorno: giornoSettimana,
            tempo: weatherImage,
            temperatura: ""
          };
        }
        return null;
      };

      this.today = getWeatherAtIndex(0) || this.today;
      this.day1 = getWeatherAtIndex(7) || this.day1;
      this.day2 = getWeatherAtIndex(15) || this.day2;
      this.day3 = getWeatherAtIndex(23) || this.day3;

      console.log('Dati del meteo:', this.weatherData);
    });
  }

  saveMyMeteo(): void {
    const cityName = this.weatherData.city.name;

    if (!this.myMeteo.includes(cityName)) {
      this.myMeteo.push(cityName);
      console.log('Città aggiunta ai preferiti:', this.myMeteo);
    } else {
      console.log('La città è già presente nei preferiti.');
    }
  }



}


// appunti
// Clouds, Rain, Clear, Snow
