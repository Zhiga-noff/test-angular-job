import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormFieldUserComponent } from './form-field-user/form-field-user.component';
import { NameUsersComponent } from './name-users/name-users.component';
import { FetchUsersService } from './fetch-users.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonControllerComponent } from './button-controller/button-controller.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldUserComponent,
    NameUsersComponent,
    ButtonControllerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [FetchUsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
