import { usersEndpoint } from "../shared/constants";
import { get } from "./APIService";
import { User } from "../entities/User";

class UserService {

    fetchUsers() {
        return get(usersEndpoint)
            .then((response) => {
                const usersData = response.results;
                return usersData.map((user) => {
                    const picture = user.picture.large;
                    const gender = user.gender;
                    const firstName = user.name.first;
                    const lastName = user.name.last;
                    const name = `${firstName} ${lastName}`;
                    let originalEmail = user.email;
                    const currentEmail = originalEmail.split("@");
                    currentEmail[0] = currentEmail[0].slice(0, 3) + "...";
                    const email = currentEmail.join("@");
                    let date = new Date(user.dob.date).toDateString().split(" ");
                    const dob = `${date[1]} ${date[2]} ${date[3]}`;

                    const myUser = new User(picture, name, email, dob, gender);
                    return myUser;
                })
            })
    }
}

export const userService = new UserService;

