package br.com.saulomendonca.tarefa.api.service.util;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.Serializable;
import java.util.List;

public interface GenericService <ENTIDADE, ID extends Serializable> {

    void cadastrar(ENTIDADE entidade);
    void alterar(ENTIDADE entidade);
    void excluir(ENTIDADE entidade);
    void excluir(ID id);

    ENTIDADE consultarPorId(ID identificador);
    List<ENTIDADE> consultarTodos();
    Page<ENTIDADE> consultarPassandoEntidade(ENTIDADE entidade, Pageable pageable);
    Integer obterQuantidadeDeRegistros(ENTIDADE entidade);
}
