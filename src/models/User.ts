import type Job from "./Job";

export default class User {
  id: string;
  username: string;
  password: string;
  jobs:Job[] = [];

  constructor(id: string, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
