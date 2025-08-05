import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { MedicalHeaderComponent } from './components/medical-header/medical-header.component';
import { MedicalFooterComponent } from './components/medical-footer/medical-footer.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { MedicalSidebarComponent } from './components/medical-sidebar/medical-sidebar.component';
import { MedicalSearchComponent } from './components/medical-search/medical-search.component';
import { MedicalNotificationsComponent } from './components/medical-notifications/medical-notifications.component';
import { EmergencyButtonComponent } from './components/emergency-button/emergency-button.component';
import { MedicalBreadcrumbComponent } from './components/medical-breadcrumb/medical-breadcrumb.component';
import { MedicalPaginationComponent } from './components/medical-pagination/medical-pagination.component';
import { MedicalCalendarComponent } from './components/medical-calendar/medical-calendar.component';
import { MedicalChartComponent } from './components/medical-chart/medical-chart.component';
import { MedicalFileUploadComponent } from './components/medical-file-upload/medical-file-upload.component';
import { MedicalConfirmDialogComponent } from './components/medical-confirm-dialog/medical-confirm-dialog.component';
import { MedicalErrorComponent } from './components/medical-error/medical-error.component';
import { MedicalLoadingComponent } from './components/medical-loading/medical-loading.component';
import { MedicalSearchFilterComponent } from './components/medical-search-filter/medical-search-filter.component';
import { MedicalStatsCardComponent } from './components/medical-stats-card/medical-stats-card.component';
import { MedicalNavMenuComponent } from './components/medical-nav-menu/medical-nav-menu.component';
import { MedicalModalComponent } from './components/medical-modal/medical-modal.component';
import { MedicalTooltipComponent } from './components/medical-tooltip/medical-tooltip.component';
import { MedicalRichTextEditorComponent } from './components/medical-rich-text-editor/medical-rich-text-editor.component';
import { DoctorMenuComponent } from './components/doctor-menu/doctor-menu.component';
import { AppointmentBookingComponent } from './components/appointment-booking/appointment-booking.component';

// Directives
import { MedicalPermissionDirective } from './directives/medical-permission.directive';
import { MedicalClickOutsideDirective } from './directives/medical-click-outside.directive';
import { MedicalResizeDirective } from './directives/medical-resize.directive';
import { MedicalScrollDirective } from './directives/medical-scroll.directive';
import { MedicalDebounceDirective } from './directives/medical-debounce.directive';
import { MedicalAutofocusDirective } from './directives/medical-autofocus.directive';
import { MedicalHighlightDirective } from './directives/medical-highlight.directive';

// Pipes
import { MedicalDatePipe } from './pipes/medical-date.pipe';
import { MedicalTimePipe } from './pipes/medical-time.pipe';
import { MedicalCurrencyPipe } from './pipes/medical-currency.pipe';
import { MedicalPhonePipe } from './pipes/medical-phone.pipe';
import { MedicalSsnPipe } from './pipes/medical-ssn.pipe';
import { MedicalAgePipe } from './pipes/medical-age.pipe';
import { MedicalStatusPipe } from './pipes/medical-status.pipe';
import { MedicalSeverityPipe } from './pipes/medical-severity.pipe';
import { MedicalFilterPipe } from './pipes/medical-filter.pipe';
import { MedicalSortPipe } from './pipes/medical-sort.pipe';

// Validators (Directives)
import { MedicalEmailDirective } from './validators/medical-email.directive';
import { MedicalPhoneDirective } from './validators/medical-phone.directive';
import { MedicalSsnDirective } from './validators/medical-ssn.directive';
import { MedicalDateDirective } from './validators/medical-date.directive';
import { MedicalAgeDirective } from './validators/medical-age.directive';
import { MedicalWeightDirective } from './validators/medical-weight.directive';
import { MedicalHeightDirective } from './validators/medical-height.directive';
import { MedicalBpDirective } from './validators/medical-bp.directive';
import { MedicalPulseDirective } from './validators/medical-pulse.directive';
import { MedicalTemperatureDirective } from './validators/medical-temperature.directive';

@NgModule({
  declarations: [
    // Components
    MedicalHeaderComponent,
    MedicalFooterComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    MedicalSidebarComponent,
    MedicalSearchComponent,
    MedicalNotificationsComponent,
    EmergencyButtonComponent,
    MedicalBreadcrumbComponent,
    MedicalPaginationComponent,
    MedicalCalendarComponent,
    MedicalChartComponent,
    MedicalFileUploadComponent,
    MedicalConfirmDialogComponent,
    MedicalErrorComponent,
    MedicalLoadingComponent,
    MedicalSearchFilterComponent,
    MedicalStatsCardComponent,
    MedicalNavMenuComponent,
    MedicalModalComponent,
    MedicalTooltipComponent,
    MedicalRichTextEditorComponent,
    DoctorMenuComponent,
    AppointmentBookingComponent,
    
    // Directives
    MedicalPermissionDirective,
    MedicalClickOutsideDirective,
    MedicalResizeDirective,
    MedicalScrollDirective,
    MedicalDebounceDirective,
    MedicalAutofocusDirective,
    MedicalHighlightDirective,
    
    // Pipes
    MedicalDatePipe,
    MedicalTimePipe,
    MedicalCurrencyPipe,
    MedicalPhonePipe,
    MedicalSsnPipe,
    MedicalAgePipe,
    MedicalStatusPipe,
    MedicalSeverityPipe,
    MedicalFilterPipe,
    MedicalSortPipe,
    
    // Validators (Directives)
    MedicalEmailDirective,
    MedicalPhoneDirective,
    MedicalSsnDirective,
    MedicalDateDirective,
    MedicalAgeDirective,
    MedicalWeightDirective,
    MedicalHeightDirective,
    MedicalBpDirective,
    MedicalPulseDirective,
    MedicalTemperatureDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    // Export RouterModule and Forms to make them available
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    
    // Export all components, directives, and pipes so they can be used in other modules
    MedicalHeaderComponent,
    MedicalFooterComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    MedicalSidebarComponent,
    MedicalSearchComponent,
    MedicalNotificationsComponent,
    EmergencyButtonComponent,
    MedicalBreadcrumbComponent,
    MedicalPaginationComponent,
    MedicalCalendarComponent,
    MedicalChartComponent,
    MedicalFileUploadComponent,
    MedicalConfirmDialogComponent,
    MedicalErrorComponent,
    MedicalLoadingComponent,
    MedicalSearchFilterComponent,
    MedicalStatsCardComponent,
    MedicalNavMenuComponent,
    MedicalModalComponent,
    MedicalTooltipComponent,
    MedicalRichTextEditorComponent,
    DoctorMenuComponent,
    AppointmentBookingComponent,
    
    MedicalPermissionDirective,
    MedicalClickOutsideDirective,
    MedicalResizeDirective,
    MedicalScrollDirective,
    MedicalDebounceDirective,
    MedicalAutofocusDirective,
    MedicalHighlightDirective,
    
    MedicalDatePipe,
    MedicalTimePipe,
    MedicalCurrencyPipe,
    MedicalPhonePipe,
    MedicalSsnPipe,
    MedicalAgePipe,
    MedicalStatusPipe,
    MedicalSeverityPipe,
    MedicalFilterPipe,
    MedicalSortPipe,
    
    MedicalEmailDirective,
    MedicalPhoneDirective,
    MedicalSsnDirective,
    MedicalDateDirective,
    MedicalAgeDirective,
    MedicalWeightDirective,
    MedicalHeightDirective,
    MedicalBpDirective,
    MedicalPulseDirective,
    MedicalTemperatureDirective
  ]
})
export class SharedModule { }
