import { Component } from '@angular/core';
import { ISmartphones } from '../../Model/i-smartphone';
import { MySmartphoneService } from '../../my-musica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  myMusic:ISmartphones[] = [];

  constructor(private myMusicSvc:MySmartphoneService){}

   ngOnInit() {
    this.myMusicSvc.getAllProducts().subscribe({
     next: (data: any) => {
       this.myMusic = data.products;
       console.log(this.myMusic);
     },
     error: (error) => {
       console.error('Si è verificato un errore:', error);

     }
   });
 }

}




