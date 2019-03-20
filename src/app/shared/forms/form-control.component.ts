import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "sn-form-control",
  template: `
    <div class="form-control">
      <ng-content></ng-content>

      <ng-container
        *ngIf="control.invalid && (control.dirty || control.touched)"
      >
        <p class="error-message" *ngIf="control.hasError('required')">
          <fa-icon [icon]="errorIcon"> </fa-icon> This field is mandatory
        </p>
        <p class="error-message" *ngIf="control.hasError('malformedMail')">
          <fa-icon [icon]="errorIcon"> </fa-icon> This email is invalid
        </p>
      </ng-container>

      <ng-container *ngIf="group?.invalid && (group?.dirty || group?.touched)">
        <p class="error-message" *ngIf="group.hasError('passwordNotMatch')">
          <fa-icon [icon]="errorIcon"> </fa-icon> Password should match
        </p>
      </ng-container>
    </div>
  `
})
export class FormControlComponent {
  @Input() control: FormControl;
  @Input() group?: FormGroup;
  errorIcon: IconProp = faExclamationTriangle;
}
