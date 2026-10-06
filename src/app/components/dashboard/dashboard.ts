import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ApiService } from '../../services/api';
import { ContactMessage } from '../../models/contact';
import { Skill } from '../../models/skill';
import { Project } from '../../models/portfolio';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private api = inject(ApiService);

  messages: ContactMessage[] = [];
  skills: Skill[] = [];
  projects: Project[] = [];

  // =========================
  // Skill Form
  // =========================

  skillForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    })
  });

  // =========================
  // Project Form
  // =========================

  projectForm = new FormGroup({

    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),

    description: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),

    image: new FormControl('', {
      nonNullable: true
    }),

    link: new FormControl('', {
      nonNullable: true
    })

  });

  // =========================
  // Load data
  // =========================

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {

    this.api.getMessages().subscribe((data: ContactMessage[]) => {
      this.messages = data;
    });

    this.api.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    });

    this.api.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });

  }

  // =========================
  // Add Skill
  // =========================

  addSkill(): void {

    if (this.skillForm.invalid) {
      return;
    }

    this.api.addSkill(this.skillForm.getRawValue()).subscribe(() => {

      this.skillForm.reset({
        name: ''
      });

      this.loadAll();

    });

  }

  // =========================
  // Add Project
  // =========================

  addProject(): void {

    if (this.projectForm.invalid) {
      return;
    }

    this.api.addProject(this.projectForm.getRawValue()).subscribe(() => {

      this.projectForm.reset({
        title: '',
        description: '',
        image: '',
        link: ''
      });

      this.loadAll();

    });

  }

  // =========================
  // Delete Message
  // =========================

  removeMessage(id: string | undefined): void {

    if (!id) {
      return;
    }

    this.api.deleteMessage(id).subscribe(() => {
      this.loadAll();
    });

  }

  // =========================
  // Delete Skill
  // =========================

  removeSkill(id: string | undefined): void {

    if (!id) {
      return;
    }

    this.api.deleteSkill(id).subscribe(() => {
      this.loadAll();
    });

  }

  // =========================
  // Delete Project
  // =========================

  removeProject(id: string | undefined): void {

    if (!id) {
      return;
    }

    this.api.deleteProject(id).subscribe(() => {
      this.loadAll();
    });

  }

}