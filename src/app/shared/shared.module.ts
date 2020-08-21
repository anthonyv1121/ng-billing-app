import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { WidgetComponent } from './widget/widget.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { InvoiceDataService } from './services/invoice-data.service';
import { MatTableDataPipe } from './pipes/mat-table-data.pipe';
import { ErrorComponent } from './error/error.component';
import { InvoiceRoutingService } from './services/invoice-routing.service';
import { SingleRowTableComponent } from './single-row-table/single-row-table.component';
import { RouteParamsService } from './services/route-params.service';
import { InvoiceUrlPipe } from './pipes/invoice-url-pipe';
import { ClientUrlPipe } from './pipes/client-url.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialModule
      ],
      declarations: [
          WidgetComponent,
          InvoiceItemComponent, 
          MatTableDataPipe, 
          ErrorComponent,
          SingleRowTableComponent,
          InvoiceUrlPipe,
          ClientUrlPipe
        ],
      exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialModule,
        WidgetComponent,
        InvoiceItemComponent,
        MatTableDataPipe,
        ErrorComponent,
        SingleRowTableComponent,
        InvoiceUrlPipe
    ],
    providers:[InvoiceDataService, InvoiceRoutingService, RouteParamsService]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
    }
}