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
import { FormComponent } from './core/components/form/form.component';
import { Error404Component } from './core/components/error/error404/error404.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewproductsComponent } from './core/components/master/viewproducts/viewproducts.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },

      { path: 'viewproducts', component: ViewproductsComponent },
    ],
  },
  { path: '**', component: Error404Component },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SidebarComponent,
    NavbarComponent,
    FormComponent,
    Error404Component,
    ViewproductsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
