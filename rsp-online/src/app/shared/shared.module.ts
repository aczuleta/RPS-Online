import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule, MatCardModule,
        FormsModule
  ],
  exports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule,  MatCardModule,
        FormsModule
  ]
})
export class SharedModule { }