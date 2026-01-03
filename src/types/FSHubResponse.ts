export type FSHubResponse<T> = {
  data: T
  meta?: {
    cursor: {
      current: number
      prev: number
      next: number
      count: number
    }
  }
}
