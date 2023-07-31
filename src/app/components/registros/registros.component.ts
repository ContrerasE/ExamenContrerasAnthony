import { Component } from '@angular/core';
import { UserService, Registro} from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
VerRregistro(_t7: number) {
throw new Error('Method not implemented.');
}
  registros: Registro[]=[];
registro: any;
   ngOnInit(): void {
    this.registros = this._userService.getRegistros();
    console.log(this.registros);
   }
    constructor(private _userService:UserService, private router:Router){

    }
    VerReg(idx: number){
      console.log(idx);
      this.router.navigate(['/registros',idx]);
    }
}
