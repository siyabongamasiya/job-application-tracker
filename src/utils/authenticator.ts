import { toast } from "sonner";
import DataAccesObject from "../data/dao";

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
      console.log(user.id);
    }

    return authenticated;
  }
}
