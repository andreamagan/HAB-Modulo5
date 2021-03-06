import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginRequest, LoginResponse } from "../auth.models";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ email, password }: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.apiBaseUrl}/account/login`,
      {
        email,
        password
      }
    );
  }

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      email,
      password
    });
  }
}
