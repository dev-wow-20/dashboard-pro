import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersRoutes } from './customers.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CustomersRoutes),
        FormsModule
    ],
    declarations: [CustomersComponent]
})

export class CustomersModule {}