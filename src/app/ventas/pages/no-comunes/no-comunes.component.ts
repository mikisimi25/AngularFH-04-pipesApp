import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i28nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando','Eduardo','Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  cambiarCliente() {
    if( this.nombre === 'Fernando' ) {
      this.nombre = 'Melissa'
      this.genero = 'femenino';
    } else {
      this.nombre = 'Fernando'
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop()
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000) // 0,1,2,3,4,5

  valorPromesa = new Promise( (resolve,reject) => {

    //Después de 3500ms la promesa devuelve el contenido de resolve
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 )

  })

}
