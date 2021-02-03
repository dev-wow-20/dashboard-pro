import { Routes } from '@angular/router';

import { LivetvComponent } from './livetv.component';

export const LivetvRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: LivetvComponent
    }]
}
];