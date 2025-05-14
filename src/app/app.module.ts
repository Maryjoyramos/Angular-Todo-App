import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Import Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';  // Import MatFormFieldModule

import { TodoComponent } from './todo/todo.component';  // Ensure this is the correct path

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,   // Import FormsModule here for ngModel
    HttpClientModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,  // Include Material form field module
    TodoComponent  // Ensure TodoComponent is added to imports if it's standalone
  ],
  providers: [],
})
export class AppModule { }
