package br.com.saulomendonca.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;

/**
 * Utility class for HTTP headers creation.
 */
public final class HeaderUtil {

    private static final Logger log = LoggerFactory.getLogger(HeaderUtil.class);

    private HeaderUtil() {
    }

    public static HttpHeaders createAlert(String message, String param) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-alert", message);
        headers.add("X-sacApp-params", param);
        return headers;
    }

    public static HttpHeaders criarAlertaCadastradoComSucesso() {
        return createAlert("Cadastro realizado com sucesso", "");
    }

    public static HttpHeaders criarAlertaAlteradoComSucesso() {
        return createAlert("Alterado com sucesso", "");
    }

    public static HttpHeaders criarAlertaExclusaoComSucesso() {
        return createAlert("Exclusão realizada com sucesso", "");
    }

    public static HttpHeaders criarAviso(String mensagem) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-aviso", mensagem);
        return headers;
    }

    public static HttpHeaders createEntityCreationAlert(String entityName, String param) {
        return createAlert("A " + entityName + " foi criada com sucesso.  ", param);
    }

    public static HttpHeaders createEntityUpdateAlert(String entityName, String param) {
        return createAlert("A " + entityName + " foi alterada com sucesso. ", param);
    }

    public static HttpHeaders createEntityDeletionAlert(String entityName, String param) {
        return createAlert("O " + entityName + " foi excluido com sucesso. ", param);
    }

    public static HttpHeaders createFailureAlert(String entityName, String errorKey, String defaultMessage) {
        log.error("Entity processing failed, {}", defaultMessage);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-sacApp-error", defaultMessage);
        headers.add("X-sacApp-params", entityName);
        return headers;
    }
}
