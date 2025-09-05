const accessName = 'boxing-training-tracker-access-token'
const refreshName = 'boxing-training-tracker-refresh-token'

export function getAccessToken() {
  return localStorage.getItem(accessName)
}

export function getRefreshToken() {
  return localStorage.getItem(refreshName)
}

export function setTokens(tokens) {
  if (!tokens) return
  

  if (tokens.access) {
    localStorage.setItem(accessName, tokens.access)
  }

  if (tokens.refresh) {
    localStorage.setItem(refreshName, tokens.refresh)
  }
}

export function clearTokens() {
  localStorage.removeItem(accessName)
  localStorage.removeItem(refreshName)
}

export const getUser = () => {
  const token = getAccessToken()
  if (!token) return null

  try {
    const payloadString = token.split('.')[1]
    const payload = JSON.parse(atob(payloadString))
    const { exp } = payload
    if (Date.now() >= exp * 1000) {
      clearTokens()
      return null
    }
    const user = payload.user || { id: payload.user_id, username: 'User' }
    return user
  } catch (error) {
    throw new Error('Invalid token' + error.message)
  }
}