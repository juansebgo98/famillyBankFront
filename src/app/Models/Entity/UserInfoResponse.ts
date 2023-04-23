export class UserInfoResponse {
    id: number;
    username: string;
    email: string;
    roles: string[];
    token: string;
  
    constructor(id: number, username: string, email: string, roles: string[], token: string) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.roles = roles;
      this.token = token;
    }
  }
  