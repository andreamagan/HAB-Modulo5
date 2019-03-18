import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "sn-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    fullName: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
  });

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
