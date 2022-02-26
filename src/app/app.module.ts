import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StructuralsComponent } from './structurals/structurals.component';

@NgModule({
  declarations: [  // Components
    AppComponent, TestComponent, NavbarComponent, StructuralsComponent
  ],
  imports: [ // Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
