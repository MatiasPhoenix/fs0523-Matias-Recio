import { Component } from '@angular/core';
import { IUtenti } from '../../Models/iutenti';
import { NewUsersService } from '../../new-users.service';
import { NgForm } from '@angular/forms';

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

  genere:string[] = [
    'Uomo',
    'Donna',
    'Alieno',
    'Reptiliano',
    'Non definito'
  ];

  constructor(public utentiSvc:NewUsersService) {}

  submit(form:NgForm){
    this.users.push(this.newUser);
    form.reset()
    console.log(this.users);
  }
}
