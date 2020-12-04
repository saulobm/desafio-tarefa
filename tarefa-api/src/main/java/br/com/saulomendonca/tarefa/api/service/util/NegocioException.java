package br.com.saulomendonca.tarefa.api.service.util;

import java.util.ArrayList;
import java.util.List;

public class NegocioException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	private static final String MENSAGEM_PADRAO = "Erro não especificado";
	private List<String> erroList = new ArrayList();
	public static final String SEPARADOR = "; ";
	public String codigoErro;

	public NegocioException() {
	}

	public NegocioException(String mensagem, Exception exception) {
		super(mensagem, exception);
		this.adicionarMensagemErro(mensagem);
	}

	public NegocioException(String mensagemErro) {
		super(mensagemErro);
		this.adicionarMensagemErro(mensagemErro);
	}

	public NegocioException(String codigoErro, String mensagemErro) {
		super(mensagemErro);
		this.adicionarMensagemErro(mensagemErro);
		this.setCodigoErro(codigoErro);
	}

	public NegocioException(String mensagemErro, Throwable cause) {
		super(mensagemErro, cause);
		this.adicionarMensagemErro(mensagemErro);
	}

	public NegocioException(Throwable throwable) {
		super(throwable);
	}

	public String getMensagemErro(int indice) {
		try {
			return this.erroList.isEmpty() ? "Erro não especificado" : ((String) this.erroList.get(indice)).toString();
		} catch (IndexOutOfBoundsException var3) {
			return "";
		}
	}

	public void adicionarMensagemErro(String mensagem) {
		this.erroList.add(mensagem);
	}

	public boolean hasMensagemErro() {
		return !this.erroList.isEmpty();
	}

	public String getMessage() {
		return this.getMensagem();
	}

	public int getQuantidadeMensagemErro() {
		return this.erroList.size();
	}

	private String getMensagem() {
		StringBuffer mensagens = new StringBuffer("");
		if (this.erroList.isEmpty()) {
			return "Erro não especificado";
		} else {
			for (int i = 0; i <= this.erroList.size() - 1; ++i) {
				mensagens.append(this.getMensagemErro(i));
				mensagens.append("; ");
			}
			return mensagens.substring(0, mensagens.length() - "; ".length()) + "";
		}
	}

	public String getCodigoErro() {
		return this.codigoErro;
	}

	public void setCodigoErro(String codigoErro) {
		this.codigoErro = codigoErro;
	}
}