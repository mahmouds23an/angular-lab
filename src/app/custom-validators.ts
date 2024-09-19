import { FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function MatchPassword(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    formGroup.get('confirmPassword')?.setErrors(null);
  }
}

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return null;
    }

    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecialChar = /[@%$#]/.test(value);
    const isValidLength = value.length >= 8;

    if (
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar &&
      isValidLength
    ) {
      return null;
    } else {
      return { passwordStrength: true };
    }
  };
}
