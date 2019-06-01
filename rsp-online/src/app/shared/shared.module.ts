import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule} from '@angular/material'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
        BrowserAnimationsModule,
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule
  ],
  exports: [
        BrowserAnimationsModule,
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule
  ]
})
export class SharedModule { }