"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Angular2 Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        styleUrls: ['app/app.component.css'],
        template: "\n    <div>\n        <div class='panel-heading'> {{pageTitle}} \n        </div>\n        \n        <div id='cssmenu'>\n            <ul>\n                <li class='active'><a [routerLink]=\"['/home']\" >Home</a></li>\n                <li><a [routerLink]=\"['/about']\">About</a></li>\n                <li><a [routerLink]=\"['/products']\">Product List</a></li>\n            </ul>  \n        </div>        \n        <div class='container'>\n                <router-outlet></router-outlet>\n        </div>\n    </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map