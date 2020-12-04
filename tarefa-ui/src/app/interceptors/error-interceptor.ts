import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HTTP_INTERCEPTORS,
    HttpErrorResponse
} from '@angular/common/http';
import {NotificationService} from './../service/notification.service';
import {FieldMessage} from './fieldmessage';
import {catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable, of } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public notificationService: NotificationService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError((error, caught) => {
                if (error instanceof HttpErrorResponse) {
                    const errorObj = error;
                    switch (errorObj.status) {
                        case 0:
                            this.handle0();
                            break;

                        case 401:
                            this.handle401();
                            break;

                        case 403:
                            this.handle403();
                            break;

                        case 404:
                            this.handle404();
                            break;

                        case 405:
                            this.handle405();
                            break;

                        case 422:
                            this.handle422(errorObj);
                            break;

                        case 500:
                            this.handle500(errorObj);
                            break;

                        default:
                            this.handleDefaultEror(errorObj);
                    }

                    return observableThrowError(errorObj);
                }
            })) as any;
    }

    private handle0() {
        setTimeout(() =>
            this.notificationService.warning('Não foi possível responder à sua busca!', 'Resultado insatisfatório:'), 1);
    }

    private handle200() {
        setTimeout(() =>
            this.notificationService.success('Upload com sucesso!!!'), 1);
    }

    handle401() {
        setTimeout(() =>
            this.notificationService.error('Erro 401: Falha de autenticação. Login ou senha incorretos'), 1);
    }

    handle403() {
        setTimeout(() =>
            this.notificationService.error('Erro 403: Acesso negado. '), 1);
    }

    private handle404() {
/*        setTimeout(() =>
            this.notificationService.error('Erro 404: Não foi possível encontrar algum resultado com base nessas informações. '), 1);*/
    }

    private handle405() {
        setTimeout(() =>
            this.notificationService.error('Erro 405: Método não permitido. '), 1);
    }

    handle422(errorObj) {
        setTimeout(() =>
            this.notificationService.error('Erro 422: Validação. ' ), 1);
    }

    private handle500(errorObj) {
        setTimeout(() =>
            this.notificationService.error( errorObj.error.message ), 1);
    }

    handleDefaultEror(errorObj) {
        setTimeout(() =>
            this.notificationService.error('Erro desconhecido. ' + errorObj.message), 1);
    }

    private listErrors(messages: FieldMessage[]): string {
        let s = '';
        for (let i = 0; i < messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + '</strong>: ' + messages[i].message + '</p>';
        }
        return s;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
