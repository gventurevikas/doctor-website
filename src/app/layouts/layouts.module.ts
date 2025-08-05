import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DoctorLayoutComponent } from './doctor-layout/doctor-layout.component';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { MedicalLayoutComponent } from './medical-layout/medical-layout.component';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    DoctorLayoutComponent,
    PatientLayoutComponent,
    MedicalLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PublicLayoutComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    DoctorLayoutComponent,
    PatientLayoutComponent,
    MedicalLayoutComponent
  ]
})
export class LayoutsModule { }
