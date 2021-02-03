import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
      },
      {
        path: "customers",
        loadChildren: "./customers/customers.module#CustomersModule",
      },
      {
        path: "devices",
        loadChildren: "./devices/devices.module#DevicesModule",
      },
      {
        path: "livetv",
        loadChildren: "./livetv/livetv.module#LivetvModule",
      },
      {
        path: "system",
        loadChildren: "./system/system.module#SystemModule",
      },
      {
        path: "usersroles",
        loadChildren: "./usersroles/usersroles.module#UsersrolesModule",
      },
      {
        path: "testing",
        loadChildren: "./testing/testing.module#TestingModule",
      },
      {
        path: "",
        loadChildren: "./userpage/user.module#UserModule",
      },
      {
        path: "",
        loadChildren: "./timeline/timeline.module#TimelineModule",
      },
    ],
  },
];
