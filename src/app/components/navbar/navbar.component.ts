import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  registro: number=0;
  ngOnInit(): void {}
   constructor(private _userService:UserService,private router:Router){

   }
   buscaregistro(cliori: string) {
     console.log(cliori);
     this.registro = this._userService.registrOriBuscada(cliori);
     this.VerRegistro(this.registro);
   }
   VerRegistro(idx: number){
     console.log(idx);
     this.router.navigate(['/registro',idx]);
   }
   login(){
    this.router.navigate(["login"]);
   }
}
