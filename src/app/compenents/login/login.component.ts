import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { loginForm } from 'src/app/models/forms/loginForm';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup

  constructor(
    private readonly _authService: AuthServiceService,
    private readonly _sessionService: SessionService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      ...loginForm
    });
  }

  onSubmit(): void {
    if (this.fg.invalid) {
      return;
    }
    this._authService.login(this.fg.value).subscribe({
      next: (data) => {
        this._sessionService.start(data);
        this._router.navigate(['home']);
      }
    });

  }

}
