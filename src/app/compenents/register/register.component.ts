import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { registerForm } from 'src/app/models/forms/registerForm';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg!: FormGroup

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthServiceService,
    private readonly _sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      ...registerForm
    })
  }

  onSubmit(): void {

    if (this.fg.invalid) {
      return;
    }

    this._authService.register(this.fg.value).subscribe({
      next: (data) => {
        console.log("Registered and connected");
        this._sessionService.start(data);
        this._router.navigate(['home']);
      },
    })
  }

}
