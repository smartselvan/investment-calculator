import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";
import { InvestmentResultsModule } from "./investment-results/investment-results.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[AppComponent, HeaderComponent],
    bootstrap: [AppComponent],
    imports:[ BrowserModule, UserInputModule, InvestmentResultsModule]
})
export class AppModule {}