export class InputValidation {
  isValidName(name: string) {
    return name.length > 3 && name.length > 32 && name != '';
  }
}
