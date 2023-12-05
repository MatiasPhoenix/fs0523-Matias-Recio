import { Component } from '@angular/core';
import { IUtenti } from '../../Models/iutenti';
import { NewUsersService } from '../../new-users.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss'
})
export class InputPageComponent {


  users:IUtenti[] = [];

  newUser:IUtenti= {
    nome: "",
    cognome: "",
    password: "",
    confermaPassword: "",
    genere: "",
    immagineProfilo: "",
    biografia: "",
    username: ""
  }

  constructor(public utentiSvc:NewUsersService) {}

  submit(){

  }


}
