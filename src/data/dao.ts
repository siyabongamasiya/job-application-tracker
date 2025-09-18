import axios from "axios";
import { toast } from "sonner";
import type User from "../models/User";

export default class DataAccesObject {
  async createUser(id: number, username: string, password: string) {
    try {
      const response = await axios.post("http://localhost:5000/users", {
        id,
        username,
        password,
      });
      return response.data;
    } catch (error) {
      toast.error("oops something went wrong!!");
      throw error;
    }
  }
  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>("http://localhost:5000/users");
      return response.data; 
    } catch (error) {
      toast.error("oops something went wrong!!");
      console.error(error);
      throw error;
    }
  }
}
