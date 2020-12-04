package br.com.saulomendonca.tarefa.api.service.impl;

import static br.com.saulomendonca.tarefa.api.config.Constants.MENSAGEM_CAMPOS_OBRIGATORIOS;
import static br.com.saulomendonca.tarefa.api.config.Constants.MENSAGEM_TAREFA_NAO_ENCONTRADA;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.saulomendonca.tarefa.api.domain.Tarefa;
import br.com.saulomendonca.tarefa.api.repository.TarefaRepository;
import br.com.saulomendonca.tarefa.api.service.TarefaService;
import br.com.saulomendonca.tarefa.api.service.util.AbstractService;
import br.com.saulomendonca.tarefa.api.service.util.NegocioException;
import br.com.saulomendonca.util.VerificadorUtil;

@Service
public class TarefaServiceImpl extends AbstractService<Tarefa, Long> implements TarefaService{

	@Autowired
	TarefaRepository repository;

	@Override
	protected JpaRepository<Tarefa, Long> getRepository(){
		return repository;
	}

    @Override
    protected void regrasNegocioCadastrar(Tarefa objeto) {
	    objeto.setDataCriacao(new Date());
    	lancarExecaoSeOsCamposObrigatoriosNaoSejamPreenchidos(objeto);
	}

    @Override
    protected void regrasNegocioAlterar(Tarefa objeto) {
	    objeto.setDataEdicao(new Date());
    	lancarExecaoSeOsCamposObrigatoriosNaoSejamPreenchidos(objeto);
	}

	private void lancarExecaoSeOsCamposObrigatoriosNaoSejamPreenchidos(Tarefa objeto) {
		if(	VerificadorUtil.estaNuloOuVazio(objeto.getTitulo())){
			throw new NegocioException(MENSAGEM_CAMPOS_OBRIGATORIOS);
		}
	}

	@Override
	public void excluir(Long id) {
		Tarefa objeto = consultarPorId(id);
		lancarExecaoSeOhObjetoForNulo(objeto);
		regrasNegocioExcluir(objeto);
		repository.save(objeto);
	}

	private void lancarExecaoSeOhObjetoForNulo(Tarefa objeto) {
		if(	VerificadorUtil.estaNuloOuVazio(objeto)){
			throw new NegocioException(MENSAGEM_TAREFA_NAO_ENCONTRADA);
		}
	}

	@Override
	public void regrasNegocioExcluir(Tarefa objeto){
		setaCamposNecessariosParaExclusao(objeto);
	}

	private void setaCamposNecessariosParaExclusao(Tarefa objeto){
		objeto.setDataRemocao(new Date());
		objeto.setStatus(false);
	}

	@Override
	public void alterarIndicadorDeConcluido(Long id) {
		Tarefa objeto = consultarPorId(id);
		setaCamposNecessariosParaMudancaDoIndicadorDeConcluido(objeto);
		repository.save(objeto);
	}

	private void setaCamposNecessariosParaMudancaDoIndicadorDeConcluido(Tarefa objeto){
		inverteOnIndicadorDeConcluido(objeto);
        setaDataDaConcluido(objeto);
	}

	private void setaDataDaConcluido(Tarefa objeto) {
		if(objeto.getIndicadorDeConcluido()) {
			objeto.setDataConclusao(new Date());
		}else {
			objeto.setDataConclusao(null);
		}
	}

	private void inverteOnIndicadorDeConcluido(Tarefa objeto) {
		objeto.setIndicadorDeConcluido(!(objeto.getIndicadorDeConcluido()));		
	}

    public List<Tarefa> consultarTodosAtivo() {
        return this.repository.consultarAsTarefasComStatusAtivo();
    }
}
