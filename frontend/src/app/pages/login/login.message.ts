interface Message {
  severity: string;
  summary: string;
  detail?: string;
  life?: number;
  closable?: boolean;
}

export const httpMessage: Record<number, Message> = {
  205: {
    severity: 'success',
    summary: 'Você saiu da sua conta!',
    closable: false,
    life: 6000,
  },
  401: {
    severity: 'error',
    summary: 'Faça o login!',
    detail: 'Você deve entrar na sua conta antes de acessar essa página.',
    closable: true,
    life: 100000,
  },
  404: {
    severity: 'error',
    summary: 'Email ou senha incorretos!',
    detail: 'Verifique se os dados estão corretos.',
    life: 4000,
  },
  500: {
    severity: 'error',
    summary: 'Erro interno no servidor',
    detail: 'O administrador foi avisado sobre esse erro.',
    life: 5000,
  },
};
