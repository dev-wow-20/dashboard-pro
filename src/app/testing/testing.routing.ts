import { Routes } from '@angular/router';

import { TestingComponent } from './testing.component';

export const TestingRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TestingComponent
    }]
}
];