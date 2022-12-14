import { Component } from '@angular/core';
import {
  faBars,
  faPenToSquare,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public writeIcon = faPenToSquare;
  public barIcon = faBars;
  public searchIcon = faSearch;
}
