import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's8app';
  edad: number = 0;
    personas: any[] = [];
  
    agregaraLista(nombre:string,apellidos:string) {
      if (this.edad >= 18) {
        this.personas.push({ nombre: nombre, apellidos:apellidos, edad:this.edad});
      }
    }
  
 
}
