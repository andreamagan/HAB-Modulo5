import { FormGroup } from "@angular/forms";

export function MatchPasswordValidator(
  group: FormGroup
): { [key: string]: boolean } {
  if (group.get("password").value !== group.get("email").value) {
    return { passwordDoesNotMatch: true };
  }
  return null;
}
