import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { MailValidator } from "../../validators/email.validators";
import { MatchPasswordValidator } from "../../validators/match-password.validators.1";

@Component({
  selector: "sn-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      fullName: ["", [Validators.required]],
      email: ["", [Validators.required, MailValidator]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
    },
    {
      updateOn: "blur",
      validators: [MatchPasswordValidator]
    }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    // this.loginForm.valueChanges.subscribe(data => console.log(data));
  }

  register() {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
