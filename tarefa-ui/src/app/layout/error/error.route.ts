import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            pageTitle: 'Error page!'
        },
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            pageTitle: 'Página de Erro!',
            error403: true
        },
    }
];
