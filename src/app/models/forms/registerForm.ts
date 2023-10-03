import { Validators } from "@angular/forms";

export const registerForm = {
    email: [null, Validators.required],
    password: [null, Validators.required]
}