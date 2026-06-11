import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { loginRequest, loginResponse } from "../models/auth";
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly API_URL = 'https://library-dh.onrender.com/api/v1';

  login(credentials: loginRequest) {
   return this.http.post<loginResponse>(`${this.API_URL}/auth/login`, credentials).pipe(tap({
      next: (res) => {
       
      },
      error(err) {
        console.error(err);
      },
    }))
  }
}