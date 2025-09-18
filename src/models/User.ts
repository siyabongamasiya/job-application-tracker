import type Job from "./Job";

export default class User {
  id: number;
  username: string;
  password: string;
  jobs:Job[] = [];

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
