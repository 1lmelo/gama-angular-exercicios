import { Component, OnInit } from '@angular/core';
import { ContadorComponent } from '../contador/contador.component';
import { ContadorService } from '../contador.service';
import { Lista } from 'typings/Lista';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent implements OnInit {
  

  lista: Lista = {
    id: null,
    name: '',
    creator: '',
    year: null,
  };

  constructor(private contadorService: ContadorService, private router: Router) { }

  ngOnInit() {
  }

  enviarLista(){
      this.contadorService.addLista(this.lista).subscribe(value => {
          alert('Item adicionado com sucesso');
          this.router.navigateByUrl('/lista');
      },   error => {
        alert ('Erro ao adicionar item');
      }
      
      ); 
      
  }

}
