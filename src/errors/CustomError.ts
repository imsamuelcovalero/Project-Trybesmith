// status pode ser number ou string

class CustomError extends Error {
  status: number | string;

  constructor(status: number | string, message: string) {
    super(message);
    this.status = status;
    // this.code = code;
  }
}

export default CustomError;