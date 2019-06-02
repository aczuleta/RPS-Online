import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule, MatCardModule,
        MatTableModule, FormsModule, MatSelectModule
  ],
  exports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule,  MatCardModule,
        FormsModule, MatTableModule, MatSelectModule
  ]
})
export class SharedModule { }