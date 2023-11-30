import { __decorate } from "tslib";
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './shared/mock/data.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            HttpClientModule
        ],
        declarations: [
            AppComponent,
            HomeComponent,
        ],
        providers: [DataService],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map