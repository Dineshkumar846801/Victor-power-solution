import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './core/components/auth/login/login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './core/components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './core/components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './core/components/shared/navbar/navbar.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '', // child route path
        component: DashboardComponent, // child route component that the router renders
      },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
