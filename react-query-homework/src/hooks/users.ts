import { useQuery } from "@tanstack/react-query";
import { $api } from "../http"; // Importing Axios instance
import { IUser } from "../interfaces/user.interface";

const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await $api.get("/users");
  return data;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

const fetchUserById = async (id: number): Promise<IUser> => {
  const { data } = await $api.get(`/users/${id}`);
  return data;
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, 
  });
};
