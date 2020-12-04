import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { AppHelpComponent } from './pages/app.help.component';
import { AppInvoiceComponent } from './pages/app.invoice.component';
import { AppWizardComponent } from './pages/app.wizard.component';
import {TarefaComponent} from './entities/tarefa/tarefa.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent,
        children: [
            { path: '', component: TarefaComponent },
            { path: 'help', component: AppHelpComponent },
            { path: 'invoice', component: AppInvoiceComponent },
        ]
    },
    {path: 'error', component: AppErrorComponent},
    {path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: '404', component: AppNotfoundComponent},
    {path: 'login', component: AppLoginComponent},
    {path: 'wizard', component: AppWizardComponent},
    {path: '**', redirectTo: '/404'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
