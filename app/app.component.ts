import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <div>
        <div class='panel-heading'> {{pageTitle}} 
        </div>
        
        <div id='cssmenu'>
            <ul>
                <li class='active'><a [routerLink]="['/home']" >Home</a></li>
                <li><a [routerLink]="['/about']">About</a></li>
                <li><a [routerLink]="['/products']">Product List</a></li>
            </ul>  
        </div>        
        <div class='container'>
                <router-outlet></router-outlet>
        </div>
    </div>`
})
export class AppComponent {
    pageTitle: string = 'Angular2 Product Management';
}
