import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, NgxPaginationModule ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
