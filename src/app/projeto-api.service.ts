import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

  readonly  projetoAPIUrl = "https://localhost:7279/api";

  constructor(private http:HttpClient) { }

   //Tarefa
  getTarefaList():Observable<any[]>{
    return this.http.get<any>(this.projetoAPIUrl + '/tarefas');
  }

  addTarefa(data:any){
    return this.http.post(this.projetoAPIUrl + '/tarefas', data);
  }

  updateTarefa(id:number|string, data:any){
    return this.http.put(this.projetoAPIUrl + `/tarefas/${id}`, data);
  }

  deleteTarefa(id:number|string){
    return this.http.delete(this.projetoAPIUrl + `tarefas/${id}`)
  }


  //TarefaTipos
  getTarefaTiposList():Observable<any[]>{
    return this.http.get<any>(this.projetoAPIUrl + '/tarefaTipos');
  }

  addTarefaTipos(data:any){
    return this.http.post(this.projetoAPIUrl + '/tarefaTipos', data);
  }

  updateTarefaTipos(id:number|string, data:any){
    return this.http.put(this.projetoAPIUrl + `/tarefaTipos/${id}`, data);
  }

  deleteTarefaTipos(id:number|string){
    return this.http.delete(this.projetoAPIUrl + `tarefaTipos/${id}`)
  }

  //Status
  getStatus():Observable<any[]>{
    return this.http.get<any>(this.projetoAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.projetoAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.projetoAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.projetoAPIUrl + `status/${id}`)
  }

}
