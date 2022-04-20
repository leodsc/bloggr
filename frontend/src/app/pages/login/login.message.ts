interface Message {
  severity: string;
  summary: string;
  detail: string;
  life: number;
}

export const httpMessage: Record<number, Message> = {
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
