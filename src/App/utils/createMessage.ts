interface IErrorMessage {
  message: string;
}

class Message {
  error(message: string): IErrorMessage {
    return { message };
  }
}

export default new Message();
