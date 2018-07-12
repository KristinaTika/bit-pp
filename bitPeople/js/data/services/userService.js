import { userEndpoint } from "../shared/constants.js";
import { User } from "../entities/User.js";
import { get } from "./APIService.js";

class UserService {

  fetchUsers() {
    return get(userEndpoint)
      .then((response) => {
        const userData = response.results;
        return userData.map((user) => {
          const userName = user.name.first;
          const userSurname = user.name.last;
          const name = userName + " " + userSurname;
          const myUser = new User(name, user.email, user.dob.date, user.picture.large, user.gender);
          return myUser;
        });
      });
  }
}

export const userService = new UserService;