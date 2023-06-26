export default class ValidationError extends Error {
  public statusCode: number;

  constructor(message: string, code?: number) {
    super(message);
    this.message = message;
    this.statusCode = code || 400;
  }
}
