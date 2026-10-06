import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { Home as HomeData } from '../../models/portfolio';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private api = inject(ApiService);
  home = signal<HomeData | null>(null);

  ngOnInit() {
    this.api.getHome().subscribe(data => {
     this.home.set(data[0] ?? null);
    });
  }
}