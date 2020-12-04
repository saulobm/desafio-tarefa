import { Component, OnInit } from '@angular/core';
import {Tarefa} from './tarefa.model';
import {TarefaService} from './tarefa.service';
import {ActivatedRoute} from '@angular/router';
import {AlertaService} from '../../shared/alert/alerta.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
    styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

    codigo: string;
    tarefas: any[];
    error: any;
    success: any;
    tarefa: Tarefa;
    displayDialogTarefa: boolean;
    displayDialogExclusao: boolean;
    mensagem: string;

    constructor(private tarefaService: TarefaService,
                private activatedRoute: ActivatedRoute,
                private alertaService: AlertaService,
    ) {
    }

    ngOnInit() {
        this.consultarTodos();
    }

    private inicializar() {
        this.tarefa = new Tarefa();
    }

    private consultarTodos() {
        this.tarefaService.listarTodos().subscribe (
            res => this.tarefas = res
        );
    }

    private salvar() {
        this.setaMensagem();
        this.subscribeCriarTarefaResponse( this.tarefaService.cadastrar( this.tarefa ) );
    }

    private alterar() {
        this.setaMensagem();
        this.subscribeCriarTarefaResponse( this.tarefaService.alterar( this.tarefa ) );
    }

    setaMensagem() {
        if (this.novaTarefa()) {
            this.mensagem = 'Cadastrado com sucesso!';
        } else {
            this.mensagem = 'Alterado com sucesso!';
        }
    }

    preparaNovoObjetoParaSerSalvo() {
        this.tarefa.id = 0;
        this.tarefa.indicadorDeConcluido = false;
        this.tarefa.dataCriacao = new Date();
        this.tarefa.status = true;
    }

    prepararParaAdicionarTarefa() {
        this.displayDialogTarefa = true;
        this.inicializar();
    }

    adicionaTarefa() {
        if (this.novaTarefa()) {
            this.criarListaDeTarefasCasoEstajaVazia();
            this.preparaNovoObjetoParaSerSalvo();
            this.salvar();
        } else {
            this.alterar();
        }
        this.fecharDialog();
    }

    marcaOuDesmarcaIndicadorConcluido(tarefa) {
        this.tarefa = tarefa;
        this.subscribeTarefaSemMensagemResponse( this.tarefaService.alterarIndicadorDeConcluido(this.tarefa.id));
    }

    prepararParaEditarTarefa(tarefa) {
        this.tarefa = tarefa;
        this.displayDialogTarefa = true;
    }

    prepararParaExclusao(tarefa) {
        this.tarefa = tarefa;
        this.displayDialogExclusao = true;
    }

    private novaTarefa() {
        return (!this.tarefa.id);
    }

    excluirTarefa() {
        this.mensagem = 'Excluido com sucesso!';
        this.displayDialogExclusao = false;
        this.subscribeCriarTarefaResponse( this.tarefaService.excluir(this.tarefa.id));
    }

    fecharDialog() {
        this.limparObjetos();
        this.displayDialogTarefa = false;
    }

    fecharDialogExclusao() {
        this.limparObjetos();
        this.displayDialogExclusao = false;
    }

    private limparObjetos() {
        this.tarefa = null;
    }

    private criarListaDeTarefasCasoEstajaVazia() {
        if (this.tarefas == null) {
            this.tarefas = [];
        }
    }

    private subscribeCriarTarefaResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.alertaService.exibirInformacao(this.mensagem);
            this.limparObjetos();
            this.consultarTodos();
        } );
    }

    private subscribeTarefaSemMensagemResponse(observable: Observable<any>) {
        observable.subscribe( (res: any) => {
            this.limparObjetos();
            this.consultarTodos();
        } );
    }
}
