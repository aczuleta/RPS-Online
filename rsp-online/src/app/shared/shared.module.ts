import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
@NgModule({
  imports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule, MatCardModule,
        MatTableModule, FormsModule, MatSelectModule,
        HttpClientModule, ApolloModule, HttpLinkModule, MatCheckboxModule
  ],
  exports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule,  MatCardModule,
        FormsModule, MatTableModule, MatSelectModule,
        HttpClientModule, ApolloModule, HttpLinkModule, MatCheckboxModule
  ]
})
export class SharedModule { }