export class User {
    id: number;
    username: string;
    email: string;
    roles: Role[];

    constructor(){
        this.id = "";
        this.username = "";
        this.lastName = "";
        this.role = new Role();
    }
  }