import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NavItem, Home, About, Project } from '../models/portfolio';
import { Skill } from '../models/skill';
import { ContactMessage } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/api';
  private http = inject(HttpClient);

  getNavbar(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(`${this.baseUrl}/navbar`);
  }

getHome(): Observable<Home[]> {
  return this.http.get<Home[]>(`${this.baseUrl}/home`);
}

  getAbout(): Observable<About> {
    return this.http.get<About>(`${this.baseUrl}/about`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }

  addProject(project: Partial<Project>): Observable<Project> {
    return this.http.post<Project>(
      `${this.baseUrl}/projects`,
      project
    );
  }

  deleteProject(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/projects/${id}`
    );
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(
      `${this.baseUrl}/skills`
    );
  }

  addSkill(skill: Partial<Skill>): Observable<Skill> {
    return this.http.post<Skill>(
      `${this.baseUrl}/skills`,
      skill
    );
  }

  deleteSkill(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/skills/${id}`
    );
  }

  sendMessage(data: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(
      `${this.baseUrl}/contact`,
      data
    );
  }

  getMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(
      `${this.baseUrl}/contact`
    );
  }

  deleteMessage(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.baseUrl}/contact/${id}`
    );
  }
}