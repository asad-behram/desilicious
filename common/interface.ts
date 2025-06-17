export interface IResponse {
  success: boolean;
  content?: any;
}

export interface CreateUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}