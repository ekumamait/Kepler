import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { SideNavComponent } from './side-nav/side-nav.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    WrapperComponent,
    FooterNavComponent
  ],
  exports: [
    WrapperComponent,
    AngularMaterialModule,
    FooterNavComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        RouterModule
    ]
})
export class SharedModule { }
