import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetQuoteFormComponent } from './get-quote-form/get-quote-form.component';
import { NgxsRootModule } from '@ngxs/store/src/modules/ngxs-root.module';
import { AppState } from './state/app-state';

@NgModule({
  declarations: [
    AppComponent,
    GetQuoteFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
