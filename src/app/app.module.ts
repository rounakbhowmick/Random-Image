import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotoZoneComponent } from './photo-zone/photo-zone.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PhotoZoneComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
