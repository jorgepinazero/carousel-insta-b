import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {CarouselComponent} from './carousel-jorge/carousel.component';
import {CarreteComponent} from './carrete/carrete.component';
import {AppRoutingModule} from './app-routing.module';
import {InstagramService} from './instagram.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarreteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
