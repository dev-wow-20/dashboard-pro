import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevicesComponent } from './devices.component';
import { DevicesRoutes } from './devices.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DevicesRoutes),
        FormsModule
    ],
    declarations: [DevicesComponent]
})

export class DevicesModule {}