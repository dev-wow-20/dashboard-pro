import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { LivetvComponent } from './livetv.component';
import { LivetvRoutes } from './livetv.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LivetvRoutes),
        FormsModule,
        MaterialModule
    ],
    declarations: [LivetvComponent]
})

export class LivetvModule {}