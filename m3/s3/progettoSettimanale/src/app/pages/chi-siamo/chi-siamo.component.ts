import { Component } from '@angular/core';
import { MeteoAppService } from '../../meteo-app.service';
import { format } from 'date-fns';



@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss'
})
export class ChiSiamoComponent {

  city = '';
  weatherData: any;

  constructor(private meteoAppSvc: MeteoAppService) {}

  getWeather(): void {
    this.meteoAppSvc.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;

      const dataGiorno = this.weatherData.list[0].dt_txt
      const datas = new Date(dataGiorno);
      const giornoSettimana = format (datas, 'EEE', {locale: it});
      console.log('Dati del meteo del giorno ' + giornoSettimana);
      console.log('Dati del meteo:', this.weatherData);
      console.log("Oggi, il tempo a " + this.weatherData.city.name +" è "+ this.weatherData.list[2].weather[0].main);


    });
  }


}
