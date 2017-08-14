import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//import In Memory  Web API //
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemProductService } from './api/products/InMemProductData';
////
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './Home/about.component';

/* Feature Modules */
import { ProductModule } from './Product/product.module';

//import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ProductModule,
    InMemoryWebApiModule.forRoot(InMemProductService),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent    
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
