export class OutOfProviderContextError extends Error {
  constructor() {
    super("Context used out of provider’s scope")
  }
}
