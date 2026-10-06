import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { NavItem } from '../../models/portfolio';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  private api = inject(ApiService);
  links = signal<NavItem[]>([]);

  ngOnInit() {
    this.api.getNavbar().subscribe(data => {
      this.links.set(data);
    });
  }
}