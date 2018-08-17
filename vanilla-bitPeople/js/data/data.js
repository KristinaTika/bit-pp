import { fetchUsers } from "./services/userService.js";

export const getUsers = () => {

    return fetchUsers();
}

