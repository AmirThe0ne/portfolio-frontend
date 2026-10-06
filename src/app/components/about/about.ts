import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api';
import { About as AboutData } from '../../models/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  private api = inject(ApiService);
  about = signal<AboutData | null>(null);

  ngOnInit() {
    this.api.getAbout().subscribe(data => {
     this.about.set(data);
    });
  }
}