import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersrolesComponent } from './usersroles.component';
import { UsersrolesRoutes } from './usersroles.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UsersrolesRoutes),
        FormsModule
    ],
    declarations: [UsersrolesComponent]
})

export class UsersrolesModule {}