package br.com.saulomendonca.tarefa.api.ws;

import static br.com.saulomendonca.tarefa.api.config.Constants.URL_API;
import static br.com.saulomendonca.tarefa.api.config.Constants.URL_TAREFA;
import static br.com.saulomendonca.util.HeaderUtil.criarAlertaCadastradoComSucesso;
import static br.com.saulomendonca.util.HeaderUtil.criarAlertaExclusaoComSucesso;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.saulomendonca.tarefa.api.domain.Tarefa;
import br.com.saulomendonca.tarefa.api.service.TarefaService;

@CrossOrigin("*")
@RestController
@RequestMapping(URL_API)
public class TarefaController{

	@Autowired
	private TarefaService service;

	@PostMapping(URL_TAREFA)
	public ResponseEntity<Tarefa> cadastrar(@RequestBody Tarefa objeto) throws URISyntaxException{
		service.cadastrar(objeto);
		return ResponseEntity.ok().headers(criarAlertaCadastradoComSucesso()).body(objeto);
	}

	@GetMapping(URL_TAREFA+"/{id}")
	public ResponseEntity<Tarefa> consultarPorId(@PathVariable Long id){
		Tarefa objeto = service.consultarPorId(id);
		return ResponseEntity.ok().body(objeto);
	}

    @GetMapping(URL_TAREFA+"/listar")
    public List<Tarefa> listar() {
        return service.consultarTodos();
    }

    @GetMapping(URL_TAREFA+"/listarAtivos")
    public List<Tarefa> listarAtivos() {
        return service.consultarTodosAtivo();
    }

    @PutMapping(URL_TAREFA)
    public ResponseEntity<Tarefa> alterar(@RequestBody Tarefa objeto) throws URISyntaxException {
    	service.alterar(objeto);
        return ResponseEntity.ok().headers(criarAlertaCadastradoComSucesso()).body(objeto);
    }

    @PutMapping(URL_TAREFA +"/{id}")
    public ResponseEntity<Void> alterarIndicadorDeConcluido(@PathVariable Long id) {
    	service.alterarIndicadorDeConcluido(id);
        return ResponseEntity.ok().headers(criarAlertaExclusaoComSucesso()).build();
    }

    @DeleteMapping(URL_TAREFA +"/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
    	service.excluir(id);
        return ResponseEntity.ok().headers(criarAlertaExclusaoComSucesso()).build();
    }
}
