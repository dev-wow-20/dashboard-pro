import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SystemComponent } from './system.component';
import { SystemRoutes } from './system.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SystemRoutes),
        FormsModule
    ],
    declarations: [SystemComponent]
})

export class SystemModule {}