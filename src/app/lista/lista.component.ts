import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
    lista = [];
  constructor(public contadorService: ContadorService) { 
    contadorService.getLista().subscribe(value =>{
      this.lista = value;
    });
  }

  ngOnInit() {
  }

}
