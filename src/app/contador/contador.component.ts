import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
    contador = 0;
  
  constructor() { }

  menor(){
    this.contador--;
  }

  maior(){
    this.contador++;
  }
   
     

  ngOnInit() {
  }

}
