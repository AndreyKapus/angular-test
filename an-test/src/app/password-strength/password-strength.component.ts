import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';

  checkPasswordStrength(): void {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(this.password);

    if (passwordLength === 0) {
      this.section1Color = this.section2Color = this.section3Color = 'gray';

    } else if (passwordLength < 8) {
      this.section1Color = this.section2Color = this.section3Color = 'red';

    } else if (hasLetters && hasDigits && hasSymbols) {
      this.section1Color = 'green';
      this.section2Color = 'green';
      this.section3Color = 'green';

    } else if (hasLetters && !hasDigits && !hasSymbols) {
      this.section1Color = 'red';
      this.section2Color = 'gray';
      this.section3Color = 'gray';

    } else if (hasLetters && (hasDigits || hasSymbols)) {
      this.section1Color = 'yellow';
      this.section2Color = 'yellow';
      this.section3Color = 'gray';
    }
  }
}
