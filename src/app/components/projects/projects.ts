import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api';
import { Project } from '../../models/portfolio';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  private api = inject(ApiService);
  projects = signal<Project[]>([]);

  ngOnInit() {
    this.api.getProjects().subscribe(data => {
      this.projects.set(data);
    });
  }
}