package br.com.saulomendonca.tarefa.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.saulomendonca.tarefa.api.domain.Tarefa;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
	
	@Query(	"SELECT t FROM Tarefa t "+
			"WHERE t.status = 1 "+
			"ORDER BY t.indicadorDeConcluido")
	List<Tarefa> consultarAsTarefasComStatusAtivo();
}
