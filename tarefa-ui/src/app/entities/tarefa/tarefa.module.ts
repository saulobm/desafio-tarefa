import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';

import {ApplicationPipesModule} from '../../shared/pipes.module';
import {
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    MessageModule,
    OrganizationChartModule,
    PaginatorModule,
    PanelModule,
    PickListModule,
    RadioButtonModule,
    SelectButtonModule,
    SpinnerModule,
    StepsModule,
    TabViewModule,
    ToggleButtonModule,
    ToolbarModule,
    TreeModule,
    TreeTableModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, registerLocaleData} from '@angular/common';
import {TarefaComponent} from './tarefa.component';
import {TarefaService} from './tarefa.service';
import {SharedModule} from '../../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {AlertAppModule} from '../../components/alert-app/alert-app.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [TarefaComponent],
  imports: [
      CommonModule,
      BrowserModule,
      ApplicationPipesModule,
      SharedModule,
      AutoCompleteModule,
      TableModule,
      ToolbarModule,
      ButtonModule,
      InputTextModule,
      PaginatorModule,
      PanelModule,
      DropdownModule,
      CalendarModule,
      SelectButtonModule,
      FieldsetModule,
      FieldsetModule,
      DialogModule,
      TreeModule,
      ToggleButtonModule,
      InputTextareaModule,
      CardModule,
      TabViewModule,
      PickListModule,
      MessageModule,
      OrganizationChartModule,
      TreeTableModule,
      StepsModule,
      SpinnerModule,
      AlertAppModule,
      InputSwitchModule,
      InputMaskModule,
      CurrencyMaskModule,
      RadioButtonModule
  ],
    entryComponents: [
        TarefaComponent
    ],
    providers: [
        TarefaService,
        {provide: LOCALE_ID, useValue: 'pt-BR'}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
} )
export class TarefaModule { }
