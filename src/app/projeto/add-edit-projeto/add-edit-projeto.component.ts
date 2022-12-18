import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoApiService } from 'src/app/projeto-api.service';

@Component({
  selector: 'app-add-edit-projeto',
  templateUrl: './add-edit-projeto.component.html',
  styleUrls: ['./add-edit-projeto.component.css']
})
export class AddEditProjetoComponent implements OnInit {

  tarefaList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  tarefaTipoList$!: Observable<any[]>;

  constructor(private service:ProjetoApiService) { }

  @Input() tarefa:any;
  id: number = 0;
  status: string = " ";
  comentario: string = " ";
  tarefaTipoId!: number;


  ngOnInit(): void {
    this.id = this.tarefa.id;
    this.status = this.tarefa.status;
    this.comentario = this.tarefa.comentario;
    this.tarefaTipoId = this.tarefa.tarefaTipoId;
    this.statusList$ = this.service.getStatus();
    this.tarefaTipoList$ = this.service.getTarefaTiposList();
    this.tarefaList$ = this.service.getTarefaList();
  }

  addTarefa(){
    var tarefa = {
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    this.service.addTarefa(tarefa).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSucess = document.getElementById('add-edit-modal-alert');
      if(showAddSucess){
        showAddSucess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSucess){
          showAddSucess.style.display = 'none';
        }
      },4000)
    })
  }

  updateTarefa(){
    var tarefa = {
      id: this.id,
      status:this.status,
      comentario:this.comentario,
      tarefaTipoId:this.tarefaTipoId
    }
    var id:number = this.id;
    this.service.updateTarefa(id, tarefa).subscribe(res =>{
      var closeModalBtn = document.getElementById('update-alert');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showUpdateSucess = document.getElementById('update-alert');
      if(showUpdateSucess){
        showUpdateSucess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSucess){
          showUpdateSucess.style.display = 'none';
        }
      },4000)
    })
  }

}
