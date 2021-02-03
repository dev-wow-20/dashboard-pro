import { Routes } from '@angular/router';

import { UsersrolesComponent } from './usersroles.component';

export const UsersrolesRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: UsersrolesComponent
    }]
}
];