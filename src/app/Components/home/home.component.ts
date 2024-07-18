import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarModule } from "../nav-bar/nav-bar.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'TREGUEUX LANGUEUX BASKET ARMOR'

}
