import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SiteLayoutComponent } from "./components/site-layout/site-layout.component";
import { SiteLayoutHeaderComponent } from "./components/site-layout-header/site-layout-header.component";
import { SiteLayoutFooterComponent } from "./components/site-layout-footer/site-layout-footer.component";
import { RouterModule } from "@angular/router";
import { HighlightPartyDirective } from "./directives/highlight-party.directive";
import { FormComponent } from "./forms/form.component";
import { FormControlComponent } from "./forms/form-control.component";

@NgModule({
  declarations: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    HighlightPartyDirective,
    FormComponent,
    FormControlComponent
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [
    SiteLayoutComponent,
    SiteLayoutHeaderComponent,
    SiteLayoutFooterComponent,
    HighlightPartyDirective,
    FormComponent,
    FormControlComponent
  ]
})
export class SharedModule {}
