import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface AppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType?: string;
  chiefComplaint: string;
  medicalHistory?: string;
  currentMedications?: string;
  allergies?: string;
  emergencyContact?: string;
  additionalNotes?: string;
  terms: boolean;
  reminderNotifications?: boolean;
}

@Component({
  selector: 'app-appointment-booking',
  standalone: false,
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentBookingComponent implements OnInit {
  appointmentForm!: FormGroup;
  isSubmitting: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  minDate: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
    this.setMinDate();
  }

  ngOnInit(): void {
    // Component initialization
  }

  private initializeForm(): void {
    this.appointmentForm = this.formBuilder.group({
      // Personal Information
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)]],
      dateOfBirth: [''],
      gender: [''],
      
      // Appointment Details
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      appointmentType: [''],
      
      // Medical Information
      chiefComplaint: ['', [Validators.required, Validators.minLength(10)]],
      medicalHistory: [''],
      currentMedications: [''],
      allergies: [''],
      emergencyContact: [''],
      
      // Additional Information
      additionalNotes: [''],
      terms: [false, Validators.requiredTrue],
      reminderNotifications: [true]
    });
  }

  private setMinDate(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.appointmentForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.appointmentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      const appointmentData: AppointmentData = this.appointmentForm.value;
      
      // Simulate API call
      setTimeout(() => {
        // Mock success/failure
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          this.showSuccessMessage = true;
          this.appointmentForm.reset();
          this.initializeForm();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        } else {
          this.showErrorMessage = true;
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        }
        
        this.isSubmitting = false;
      }, 2000);

      // In a real application, you would call your appointment service here:
      // this.appointmentService.bookAppointment(appointmentData).subscribe({
      //   next: (response) => {
      //     this.showSuccessMessage = true;
      //     this.appointmentForm.reset();
      //     this.isSubmitting = false;
      //   },
      //   error: (error) => {
      //     this.showErrorMessage = true;
      //     this.isSubmitting = false;
      //   }
      // });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.appointmentForm.controls).forEach(key => {
        const control = this.appointmentForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  resetForm(): void {
    this.appointmentForm.reset();
    this.initializeForm();
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
  }

  // Utility method to get form control for easier access
  getFormControl(fieldName: string) {
    return this.appointmentForm.get(fieldName);
  }
}
