package br.com.saulomendonca.tarefa.api.service.util;

import static org.springframework.data.domain.Example.of;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class AbstractService <ENTIDADE, ID extends Serializable> implements GenericService<ENTIDADE, ID> {

    protected abstract JpaRepository<ENTIDADE, ID> getRepository();

    public void cadastrar(ENTIDADE entidade) {
        this.regrasNegocioCadastrar(entidade);
        this.getRepository().save(entidade);
    }

    public void alterar(ENTIDADE entidade) {
        this.regrasNegocioAlterar(entidade);
        this.getRepository().save(entidade);
    }

    public void excluir(ENTIDADE entidade) {
        this.regrasNegocioExcluir(entidade);
        this.lancarExcecaoCasoPossuaAssociacao(entidade);
        this.getRepository().delete(entidade);
    }

    public void excluir(ID id) {
        this.regrasNegocioExcluir(id);
        this.excluirEntidadeOuLancarExcecaoCasoPossuaAssociacao(id);
    }

    public ENTIDADE consultarPorId(ID var1) {
        return this.getRepository().getOne(var1);
    }

    public List<ENTIDADE> consultarTodos() {
        return this.getRepository().findAll();
    }

    public Integer obterQuantidadeDeRegistros(ENTIDADE entidade) {
        Long quantidade = this.getRepository().count();
        return quantidade.intValue();
    }

    public Page<ENTIDADE> consultarPassandoEntidade(ENTIDADE entidade, Pageable pageable) {
        return getRepository().findAll(of(entidade), pageable);
    }

    protected void lancarExcecaoCasoPossuaAssociacao(ENTIDADE entidade) {
        this.lancarExcecaoCasoEntidadePossuaAssociacao(entidade);
    }

    protected void excluirEntidadeOuLancarExcecaoCasoPossuaAssociacao(ID id) {
        this.lancarExcecaoCasoEntidadePossuaAssociacao(id);
        this.getRepository().deleteById(id);
    }

    protected void lancarExcecaoCasoEntidadePossuaAssociacao(ENTIDADE entidade) {
    }

    protected void lancarExcecaoCasoEntidadePossuaAssociacao(ID id) {
    }

    protected void regrasNegocioCadastrar(ENTIDADE entidade) {
    }

    protected void regrasNegocioAlterar(ENTIDADE entidade) {
    }

    protected void regrasNegocioExcluir(ENTIDADE entidade) {
    }

    protected void regrasNegocioExcluir(ID id) {
    	
    }
}
