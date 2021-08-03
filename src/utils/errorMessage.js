import {
  invalidateAccount,
  invalidateEmail,
  invalidatePassword
} from './validate'

export const emailErrorMsg = email => {
  if (email.trim().length === 0) return 0
  if (invalidateEmail(email)) return 1
  return ''
}

export const accountErrorMsg = account => {
  if (account.trim().length === 0) return 0
  if (invalidateAccount(account)) return 1
  return ''
}

export const passwordErrorMsg = password => {
  if (password.trim().length === 0) return 0
  if (invalidatePassword(password)) return 1
  return ''
}

export const confirmPasswordErrorMsg = (password, confirmPassword) => {
  if (confirmPassword !== password) return 999
  return ''
}