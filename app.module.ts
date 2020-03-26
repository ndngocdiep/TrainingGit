import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, APP_BASE_HREF, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridMultirowModule } from 'wijmo/wijmo.angular2.grid.multirow';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjViewerModule } from 'wijmo/wijmo.angular2.viewer';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WjNavModule } from 'wijmo/wijmo.angular2.nav';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRouterProviders, AppRoutingModule } from './app-routing.module';
import { AppParamConfig } from './app.paramconfig';
import { AppComponent } from './app.component';

// Directive
import { TelInputDirective } from './_Directive/tel-input.directive';
import { CharInputDirective } from './_Directive/char-input.directive';
// Common - Component
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './common/confirmation-dialog/confirmation-dialog.service';
import { ComHeaderComponent } from './common/com-header/com-header.component';
import { ComFooterComponent } from './common/com-footer/com-footer.component';
import { ComFooter002Component } from './common/com-footer-002/com-footer-002.component';
import { ComWaittingComponent } from './common/com-waitting/com-waitting.component';
import { WebApi } from './common/web-api-action';

// 00-RZZ-Component
import { RZZFRM010Component } from './components/RZZ/rzzfrm010/rzzfrm010.component';
import { RZZFRM040Component } from './components/RZZ/rzzfrm040/rzzfrm040.component';
import { RZZFRM060Component } from './components/RZZ/rzzfrm060/rzzfrm060.component';
import { RZZFRM070Component } from './components/RZZ/rzzfrm070/rzzfrm070.component';
import { RZZFRM080Component } from './components/RZZ/rzzfrm080/rzzfrm080.component';
import { RZZFRM550Component } from './components/RZZ/rzzfrm550/rzzfrm550.component';
import { RZZMNU020Component } from './components/RZZ/rzzmnu020/rzzmnu020.component';
import { RZZMEN001Component } from './components/RZZ/rzzmen001/rzzmen001.component';
import { RZZHLP020Component } from './components/RZZ/rzzhlp020/rzzhlp020.component';
import { RZZHLP020Service } from './components/RZZ/rzzhlp020/rzzhlp020.service';
import { RZZHLP030Component } from './components/RZZ/rzzhlp030/rzzhlp030.component';
import { RZZHLP030Service } from './components/RZZ/rzzhlp030/rzzhlp030.service';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        DragDropModule,
        CdkTreeModule,
        MatButtonModule,
        MatIconModule,
        NgbModule.forRoot(),
        AppRouterProviders,
        AppRoutingModule,
        HttpClientModule,
        WjGridModule,
        WjGridMultirowModule,
        WjInputModule,
        WjViewerModule,
        WjGridSheetModule,
        BrowserAnimationsModule,
        WjNavModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    declarations: [
        AppComponent,
        // Directive
        TelInputDirective,
        CharInputDirective,
        // Common - Component
        ConfirmationDialogComponent,
        ComHeaderComponent,
        ComFooterComponent,
        ComFooter002Component,
        ComWaittingComponent,
        // 00-RZZ-Component
        RZZFRM010Component,
        RZZFRM040Component,
        RZZFRM060Component,
        RZZFRM070Component,
        RZZFRM080Component,
        RZZFRM550Component,
        RZZMNU020Component,
        RZZMEN001Component,
        RZZHLP010Component,
        RZZHLP020Component,
        RZZHLP030Component,
        RZZHLP040Component,
        RZZHLP050Component,
        RZZHLP060Component,
        RZZHLP070Component,
        RZZHLP080Component,
        RZZHLP090Component,
        RZZHLP1060Component,
        RZZHLP110Component,
        RZZHLP1070Component,
        RZZHLP1130Component,
        RZZCalendarComponent,
        RZZPCtrlComponent,
        RZZPreviewComponent,
        RZZPageNotFoundComponent,
        RZZSYSTEMVARComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        Title,
        WebApi,
        AppParamConfig,
        ConfirmationDialogService,
        DatePipe,
        RZZPCtrlService,
        RZZHLP010Service,
        RZZHLP020Service,
        RZZHLP030Service,
        RZZHLP040Service,
        RZZHLP050Service,
        RZZHLP060Service,
        RZZHLP080Service,
        RZZHLP090Service,
        RZZHLP1060Service,
        RZZHLP110Service,
        RZZHLP1070Service,
        RZZHLP1130Service,
        RFCFRS1781Service,
        RLMFRS271Service,
        RGSFRS022Service,
        RLMFRS1771Service,
        RZZCalendarService,
        { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }
    ],
    entryComponents: [
        ConfirmationDialogComponent,
        RZZCalendarComponent,
        RZZPageNotFoundComponent,
        RZZSYSTEMVARComponent,
        RZZHLP010Component,
        RZZHLP020Component,
        RZZHLP030Component,
        RZZHLP040Component,
        RZZHLP050Component,
        RZZHLP060Component,
        RZZHLP070Component,
        RZZHLP080Component,
        RZZHLP090Component,
        RZZHLP1060Component,
        RZZHLP110Component,
        RZZHLP1070Component,
        RZZHLP1130Component,
        RFCFRS1781Component,
        RLMFRS271Component,
        RLMFRS1771Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
