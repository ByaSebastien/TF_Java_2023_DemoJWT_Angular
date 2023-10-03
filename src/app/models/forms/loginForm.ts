import { Validators } from "@angular/forms";

export const loginForm = {
    email: [null, Validators.required],
    password: [null, Validators.required]
}