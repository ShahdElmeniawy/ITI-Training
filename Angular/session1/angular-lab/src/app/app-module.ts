import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Products } from './products/products';
import { SideMenu } from './side-menu/side-menu';

@NgModule({
  declarations: [App, Header, Footer, Products, SideMenu],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
