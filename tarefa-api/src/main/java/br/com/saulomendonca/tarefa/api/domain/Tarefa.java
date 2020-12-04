package br.com.saulomendonca.tarefa.api.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tarefa")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Tarefa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="seq_tarefa")
	private Long id;

    @Column(name = "dsc_titulo", length = 100, nullable = false)
	private String titulo;

    @Column(name = "dsc_tarefa", length = 150)
	private String descricao;

    @Column(name = "ind_concluido")
	private Boolean indicadorDeConcluido;

    @Temporal(TemporalType.DATE)
    @Column(name = "dat_criacao", nullable = false)
	private Date dataCriacao;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "dat_edicao")
	private Date dataEdicao;
    
    @Temporal(TemporalType.DATE)
    @Column(name = "dat_conclusao")
	private Date dataConclusao;

    @Temporal(TemporalType.DATE)
    @Column(name = "dat_remocao")
	private Date dataRemocao;
    
    @Column(name = "ind_status", nullable = false)
	private Boolean status;

	public Tarefa() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

    @Column(name = "ind_concluido")
	public Boolean getIndicadorDeConcluido() {
		return indicadorDeConcluido;
	}

	public void setIndicadorDeConcluido(Boolean indicadorDeConcluido) {
		this.indicadorDeConcluido = indicadorDeConcluido;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Date getDataEdicao() {
		return dataEdicao;
	}

	public void setDataEdicao(Date dataEdicao) {
		this.dataEdicao = dataEdicao;
	}

	public Date getDataConclusao() {
		return dataConclusao;
	}

	public void setDataConclusao(Date dataConclusao) {
		this.dataConclusao = dataConclusao;
	}

	public Date getDataRemocao() {
		return dataRemocao;
	}

	public void setDataRemocao(Date dataRemocao) {
		this.dataRemocao = dataRemocao;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tarefa other = (Tarefa) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
