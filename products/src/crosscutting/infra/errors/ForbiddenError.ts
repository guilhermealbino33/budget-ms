export default class ForbiddenError extends Error {
  public readonly statusCode: number;

  constructor(message = 'Forbidden') {
    super(message);
    this.message = message;
    this.statusCode = 403;
  }
}
