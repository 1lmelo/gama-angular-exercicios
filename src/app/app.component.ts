import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';
import { ListaItemComponent } from './lista-item/lista-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gama-angular-exercicios';
  lista = [];

  constructor(public contadorService: ContadorService){
    contadorService.getLista().subscribe(value => {
        this.lista = value;
    })
  }

  ngOnInit(){

  }

}
