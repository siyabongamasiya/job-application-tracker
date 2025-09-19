import axios from "axios";
import { toast } from "sonner";
import User from "../models/User";
import Job from "../models/Job";

export default class DataAccesObject {
  async createUser(
    id: string,
    username: string,
    password: string,
    confirmpassword: string
  ): Promise<User[]> {
    try {
      const usersResponse = await axios.get<User[]>(
        "https://apex-track-json-server.onrender.com/users"
      );
      const users = usersResponse.data;

      const existingUser = users.find((u) => u.username === username);

      if (existingUser) {
        toast.error("Username already exists!!");
        return [];
      }

      if (password != confirmpassword) {
        toast.error("passwords dont match!!");
        return [];
      }

      const response = await axios.post("https://apex-track-json-server.onrender.com/users", {
        id,
        username,
        password,
        jobs: [],
      });

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          id,
          username,
          password,
          jobs: [],
        })
      );
      return response.data;
    } catch (error) {
      toast.error("oops something went wrong!!");
      throw error;
    }
  }
  async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>("https://apex-track-json-server.onrender.com/users");
      return response.data;
    } catch (error) {
      toast.error("oops something went wrong!!");
      console.error(error);
      throw error;
    }
  }
  async getUserById(id: string): Promise<User> {
    try {
      const response = await axios.get<User>(
        `https://apex-track-json-server.onrender.com/users/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getJobById(id: string): Promise<Job> {
    try {
      const currentUserFromLocal = this.getCurrentUserFromLocalStorage();
      const response = await axios.get<User>(
        `https://apex-track-json-server.onrender.com/users/${currentUserFromLocal!.id}`
      );
      const resultJob = response.data.jobs.filter(
        (job) => job.id.toString() === id
      );

      return resultJob[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addJob(userId: number, job: Job): Promise<Job[] | null> {
    try {
      const userResponse = await axios.get(
        `https://apex-track-json-server.onrender.com/users/${userId}`
      );
      const user = userResponse.data;

      if (!user) {
        toast.error("User not found!");
        return null;
      }

      const updatedJobs = [...user.jobs, job];

      const response = await axios.patch(
        `https://apex-track-json-server.onrender.com/users/${userId}`,
        {
          jobs: updatedJobs,
        }
      );

      if (response.status === 200) {
        toast.success("Job added successfully!");
        return response.data.jobs;
      } else {
        toast.error("Failed to add job!");
        return null;
      }
    } catch (error) {
      toast.error("Oops, something went wrong!");
      console.error(error);
      return null;
    }
  }

  saveCurrentUserToLocalStorage(user: User) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getCurrentUserFromLocalStorage(): User | null {
    const results = localStorage.getItem("currentUser");
    if (results) {
      return JSON.parse(results) as User;
    } else {
      return null;
    }
  }
}
