export type CustomResponse<Payload> =
  | {
      success: true
      payload: Payload
    }
  | { success: false; payload: string }
