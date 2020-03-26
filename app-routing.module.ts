import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 00-RZZ-Component
import { RZZFRM010Component } from './components/RZZ/rzzfrm010/rzzfrm010.component';
import { RZZFRM040Component } from './components/RZZ/rzzfrm040/rzzfrm040.component';
import { RZZFRM060Component } from './components/RZZ/rzzfrm060/rzzfrm060.component';
import { RZZFRM070Component } from './components/RZZ/rzzfrm070/rzzfrm070.component';
import { RZZFRM080Component } from './components/RZZ/rzzfrm080/rzzfrm080.component';
import { RZZFRM550Component } from './components/RZZ/rzzfrm550/rzzfrm550.component';
import { RZZMNU020Component } from './components/RZZ/rzzmnu020/rzzmnu020.component';
import { RZZPCtrlComponent } from './components/RZZ/rzzpctrl/rzzpctrl.component';
import { RZZPreviewComponent } from './components/RZZ/rzzpreview/rzzpreview.component';
import { RZZPageNotFoundComponent } from './components/RZZ/rzzpage-not-found/rzzpage-not-found.component';

// 01-RAP-Component
import { RAPFRM020Component } from './components/RAP/rapfrm020/rapfrm020.component';
import { RAPFRM030Component } from './components/RAP/rapfrm030/rapfrm030.component';
import { RAPFRM040Component } from './components/RAP/rapfrm040/rapfrm040.component';
// 02-RBR-Component
import { RBRFRM010Component } from './components/RBR/rbrfrm010/rbrfrm010.component';
import { RBRFRS011Component } from './components/RBR/rbrfrs011/rbrfrs011.component';
import { RBRFRS012Component } from './components/RBR/rbrfrs012/rbrfrs012.component';

import { from } from 'rxjs';
// 14-RNR-Component
// 15-ROS-Component
// 16-RPG-Component

const routes: Routes = [
    // Default rounting
    { path: '', redirectTo: 'RZZ/RZZFRM010', pathMatch: 'full' },
    // 00-RZZ-Component
    {
        path: 'RZZ',
        children: [
            { path: 'RZZFRM010', component: RZZFRM010Component },
            { path: 'RZZFRM040', component: RZZFRM040Component },
            { path: 'RZZFRM060', component: RZZFRM060Component },
            { path: 'RZZFRM070', component: RZZFRM070Component },
            { path: 'RZZFRM080', component: RZZFRM080Component },
            { path: 'RZZFRM550', component: RZZFRM550Component },
            { path: 'RZZMNU020', component: RZZMNU020Component },
            { path: 'RZZPCtrl', component: RZZPCtrlComponent },
            { path: 'RZZPreview', component: RZZPreviewComponent },
            { path: 'Error', component: RZZPageNotFoundComponent }
        ]
    },
    // 01-RAP-Component
    {
        path: 'RAP',
        children: [
            { path: 'RAPFRM010', component: RAPFRM010Component },
            { path: 'RAPFRS011', component: RAPFRS011Component },
            { path: 'RAPFRM020', component: RAPFRM020Component },
        ]
    },
    // 02-RBR-Component
    {
        path: 'RBR',
        children: [
            { path: 'RBRFRM010', component: RBRFRM010Component },
            { path: 'RBRFRS011', component: RBRFRS011Component },
            { path: 'RBRFRS012', component: RBRFRS012Component },
        ]
    },

    { path: '**', redirectTo: 'RZZ/Error', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const AppRouterProviders = [
    RouterModule.forRoot(routes)
];

