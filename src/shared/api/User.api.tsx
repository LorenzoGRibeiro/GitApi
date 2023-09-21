import axios from "axios";
import { useQuery } from "react-query";

type Users = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};

export function UsersApi() {
  const { data, isFetching } = useQuery<Users[]>("users", async () => {
    const response = await axios.get(`https://api.github.com/users`);
    return response.data;
  });

  return { data, isFetching };
}
