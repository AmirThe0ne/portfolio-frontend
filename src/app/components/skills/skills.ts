import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-skills',
  imports: [AsyncPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills$ = inject(ApiService).getSkills();
}