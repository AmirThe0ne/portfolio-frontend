import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private api = inject(ApiService);
  sent = false;

contactForm = new FormGroup({
  name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
  email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
});

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.api.sendMessage(this.contactForm.getRawValue()).subscribe(() => {
      this.sent = true;
      this.contactForm.reset();
    });
  }
}