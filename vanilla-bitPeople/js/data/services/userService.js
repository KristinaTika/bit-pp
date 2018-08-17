import { userEndpoint } from "../shared/constants.js";
import { User } from "../entities/User.js";

const nameHandler = (user) => {
  const firstName = user.name.first[0].toUpperCase() + user.name.first.slice(1);
  const lastName = user.name.last[0].toUpperCase() + user.name.last.slice(1);
  const name = `${firstName} ${lastName}`;
  return name;
}

const mailHandler = (mail) => {
  const currentEmail = mail.split("@");
  currentEmail[0] = currentEmail[0].slice(0, 3) + "...";
  const email = currentEmail.join("@");
  return email;
}

const dateHandler = (myDate) => {
  let date = new Date(myDate).toDateString().split(" ");
  const dob = `${date[1]} ${date[2]} ${date[3]}`;
  return dob;
}

export async function fetchUsers() {
  try {
    let userData = await $.getJSON(userEndpoint);
    return userData.results.map((user) => {
      const name = nameHandler(user);
      const email = mailHandler(user.email);
      const dob = dateHandler(user.dob.date);
      const myUser = new User(name, user.email, user.dob.date, user.picture.large, user.gender);
      return myUser;
    });
  } catch (e) {
    console.log("Could not load users!");
  }

}
