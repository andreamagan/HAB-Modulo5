import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MailValidator } from "../../validators/email.validators";
import { MatchPasswordValidator } from "../../validators/match-password.validators";
import { Register } from "../../store/auth.actions";
import { Store } from "@ngxs/store";

@Component({
  selector: "sn-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: ["", [Validators.required]],
      email: ["", [Validators.required, MailValidator]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    },
    {
      updateOn: "blur",
      validators: [MatchPasswordValidator]
    }
  );

  constructor(private fb: FormBuilder, private store: Store) {}

  register() {
    if (this.registerForm.valid) {
      this.store.dispatch(new Register(this.registerForm.value));
    }
  }
}
