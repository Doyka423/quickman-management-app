import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent]
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { GithubComponent } from './github/github.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CalendarComponent,
    TicketsComponent,
    GithubComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ImpressumComponent,
  ],
>>>>>>> 550760ae34bf12b30d2061dfa3eeb940e6741499
})
export class AppComponent {
  title = 'quickman-management-app';
}
