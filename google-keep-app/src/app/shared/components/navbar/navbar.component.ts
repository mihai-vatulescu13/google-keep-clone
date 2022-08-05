import { Component } from '@angular/core';
import { faBars, faFilePen, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public writeIcon = faFilePen;
  public barIcon = faBars;
  public searchIcon = faSearch;
}
