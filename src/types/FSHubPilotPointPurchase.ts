export type FSHubPilotPointPurchaseTransactionData = {
  amount: number;
  summary: string;
}

export type FSHubPilotPointPurchaseTransactionResponse = {
  successful: boolean;
  message: string;
  transferred: number;
}
