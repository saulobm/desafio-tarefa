package br.com.saulomendonca.tarefa.api.service;
import java.util.List;

import br.com.saulomendonca.tarefa.api.domain.Tarefa;
import br.com.saulomendonca.tarefa.api.service.util.GenericService;

public interface TarefaService extends GenericService<Tarefa, Long>{
	void alterarIndicadorDeConcluido(Long id);
	List<Tarefa> consultarTodosAtivo();
}