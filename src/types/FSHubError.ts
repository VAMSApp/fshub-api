export type FSHubError = {
  message: string
  code: number
  error?: boolean
  details?: {
    pilot: number
  }
}
