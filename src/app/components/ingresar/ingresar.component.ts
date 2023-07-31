import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

}
document.addEventListener('DOMContentLoaded', () => {
  const registroForm = document.getElementById('registroForm') as HTMLFormElement;
  registroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const code = (document.getElementById('code') as HTMLInputElement).value;
    const fecha = (document.getElementById('fecha') as HTMLInputElement).value;
    const cliente = (document.getElementById('cliente') as HTMLInputElement).value;
    const tipointer = (document.getElementById('tipointer') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;

    // Aquí puedes agregar la lógica para enviar los datos del usuario al servidor o almacenarlos localmente.

    console.log('Datos del usuario registrados:');
    console.log('code:', code);
    console.log('fecha:', fecha);
    console.log('cliente:', cliente);
    console.log('tipointer:', tipointer);
    console.log('descripcion-:', descripcion);

    // Puedes realizar más acciones después del registro, como redireccionar a otra página o mostrar un mensaje de éxito.
  });
});
