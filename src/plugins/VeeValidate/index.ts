import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return 'Este campo é obrigatório'
  }

  return true
})

// Verifica se o e-mail é valido
defineRule('email', (value: string) => {
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)) {
    return 'Digite um e-mail válido'
  }

  return true
})

// Verifica se a senha é válida
defineRule('password', (value: string) => {
  // Verifica se há pelo menos um caractere especial, uma letra maiúscula e um total de pelo menos 6 caracteres
  if (!/^(?=.*[A-Z])(?=.*[!@#$&*]).{6,}$/.test(value)) {
    return 'Senha incorreta'
  }

  return true
})


export { Form, Field, ErrorMessage }
