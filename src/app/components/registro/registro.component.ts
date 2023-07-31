import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registro:any=[];
  constructor(private activatedRoute:ActivatedRoute, private _userService: UserService){
  this.activatedRoute.params.subscribe(params =>{
    this.registro=_userService.getRegistro(params['cliente']);
  console.log(this.registro);
  })
  }
}
