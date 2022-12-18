import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoApiService } from 'src/app/projeto-api.service';

@Component({
  selector: 'app-show-projeto',
  templateUrl: './show-projeto.component.html',
  styleUrls: ['./show-projeto.component.css']
})
export class ShowProjetoComponent implements OnInit {

  projetoList$!:Observable<any[]>;
  projetoTiposList$!:Observable<any[]>;
  projetoTiposList:any=[];

  //Map para mostrar a associação entre as tabelas (FK)
  projetoTiposMap:Map<number, string> = new Map()


  constructor(private service:ProjetoApiService) { }

  ngOnInit(): void {
    this.projetoList$ = this.service.getTarefaList();
    this.projetoTiposList$ = this.service.getTarefaTiposList();
    this.refreshProjetoTiposMap();
  }

  //Variavel (propriedades)
  modalTitle:string = '';
  activateAddEditProjetoComponent:boolean = false;
  projeto:any;

  modalAdd(){
    this.projeto = {
      id:0,
      status:null,
      comentario:null,
      tarefaTipoId:null
    }
    this.modalTitle = "Nova Tarefa";
    this.activateAddEditProjetoComponent = true;
  }

  modalEdit(item:any){
    this.projeto = item;
    this.modalTitle = "Edição de tarefa";
    this.activateAddEditProjetoComponent = true;
  }

  delete(item:any){
    if(confirm(`Você tem certeza que deseja deletar a tarefa ${item.id}`)){
      this.service.deleteTarefa(item.id).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showDeleteSucess = document.getElementById('delete-edit-modal-alert');
      if(showDeleteSucess){
        showDeleteSucess.style.display = 'block';
      }
      setTimeout(function(){
        if(showDeleteSucess){
          showDeleteSucess.style.display = 'none';
        }
      },4000)
    })
    }

  }

  modalClose(){
    this.activateAddEditProjetoComponent = false;
    this.projetoList$ = this.service.getTarefaList();
  }

  refreshProjetoTiposMap(){
    this.service.getTarefaTiposList().subscribe(data =>{
      this.projetoTiposList = data;

      for (let i = 0; i < data.length; i++){
        this.projetoTiposMap.set(this.projetoTiposList[i].id, this.projetoTiposList[i].tarefaNome)

      }
    })
  }

}
