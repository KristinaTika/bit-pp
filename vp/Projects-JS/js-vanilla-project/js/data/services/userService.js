import { get } from "./APIService.js";
import { usersEndpoint } from "../shared/constants.js";
import { User } from "../entities/User.js";

class UserService {

    fetchUsers() {
        return get(usersEndpoint)
            .then((users) => {
                return users.map((user) => {
                    const id = user.id;
                    const name = user.name;
                    const about = user.aboutShort;
                    const postDate = user.lastPostDate;
                    const avatarUrl = user.avatarUrl;
                    const postsCount = user.postsCount;
                    const commentsCount = user.commentsCount;

                    const myUser = new User(id, name, about, postDate, avatarUrl, postsCount, commentsCount);
                    return myUser;
                })
            })
    }

    fetchSingleUser(id) {
        let url = (`${usersEndpoint}/${id}`);
        return get(url)
            .then((user) => {
                    const id = user.userId;
                    const name = user.name;
                    const about = user.aboutShort;
                    const postDate = user.lastPostDate;
                    const avatarUrl = user.avatarUrl;
                    const postsCount = user.postsCount;
                    const commentsCount = user.commentsCount;

                    const myUser = new User(id, name, about, postDate, avatarUrl, postsCount, commentsCount);
                    return myUser;
                })
    }
}

export const userService = new UserService;