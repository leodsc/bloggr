import { Label } from 'src/app/classes/Label';

export const labels: Label[] = [
  new Label(
    'john@exemplo.com',
    'assets/icons/mail.svg',
    'Insira seu email aqui',
    'email',
    'email',
    { email: '' }
  ),
  new Label(
    '',
    'assets/icons/birthday.svg',
    'Insira a data que você nasceu',
    'date',
    'birthday',
    { birthday: '' }
  ),
  new Label(
    'exemplo123!',
    'assets/icons/key.svg',
    'Insira uma senha segura',
    'password',
    'password',
    { password: '' }
  ),
  new Label(
    'repita a senha',
    'assets/icons/key.svg',
    'Senhas tem que ser iguais',
    'password',
    'confirm-password'
  ),
];
