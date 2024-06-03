import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCompComponent } from './post/post-comp/post-comp.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms'
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderCompComponent } from './head/header-comp/header-comp.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PostCompComponent,
    HeaderCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
