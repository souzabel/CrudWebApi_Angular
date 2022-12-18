import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ShowProjetoComponent } from './projeto/show-projeto/show-projeto.component';
import { AddEditProjetoComponent } from './projeto/add-edit-projeto/add-edit-projeto.component';
import { ProjetoApiService } from './projeto-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    ShowProjetoComponent,
    AddEditProjetoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjetoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
