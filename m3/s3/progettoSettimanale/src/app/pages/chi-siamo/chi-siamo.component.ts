import { Component } from '@angular/core';
import { MeteoAppService } from '../../meteo-app.service';




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
      console.log('Dati del meteo:', this.weatherData);
    });
  }


}
