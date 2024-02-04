import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './core/components/auth/login/login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
