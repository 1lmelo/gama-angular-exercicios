import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import  { HttpClientModule } from '@angular/common/http';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { FormListaComponent } from './form-lista/form-lista.component';
import { FormsModule } from '@angular/forms';
import { NumberPipe } from './number.pipe';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'contador', component: ContadorComponent},
  {path: 'form-lista', component: FormListaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaItemComponent,
    ListaComponent,
    HomeComponent,
    FormListaComponent,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
