import { toast } from "sonner";
import DataAccesObject from "../data/dao";
import type User from "../models/User";

const dao = new DataAccesObject();

export default class Authenticator {
  async authenticate(username: string, password: string): Promise<boolean> {
    let authenticated: boolean = false;

    const users = await dao.getUsers();
    const user = users.find((u) => u.username === username);

    if (!user) {
      toast.error("Username does not exist!!");
    } else if (user.password !== password) {
      toast.error("Wrong password!!");
    } else {
      authenticated = true;
      const id = user.id;
      const username = user.username;
      const password = user.password;

      dao.saveCurrentUserToLocalStorage({
        id,
        username,
        password,
      } as User);
      console.log(user.id);
    }

    return authenticated;
  }
}
