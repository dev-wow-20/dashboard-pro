import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestingComponent } from './testing.component';
import { TestingRoutes } from './testing.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TestingRoutes),
        FormsModule
    ],
    declarations: [TestingComponent]
})

export class TestingModule {}