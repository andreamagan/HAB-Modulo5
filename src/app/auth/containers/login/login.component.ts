import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MailValidator } from "../../validators/email.validators";
import { Login } from "../../store/auth.actions";
import { Store } from "@ngxs/store";

@Component({
  selector: "sn-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm = this.fb.group(
    {
      email: ["", [Validators.required, MailValidator]],
      password: ["", [Validators.required]]
    },
    { updateOn: "blur" }
  );

  constructor(private fb: FormBuilder, private store: Store) {}

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }
}
