import { GET } from "../utils/https.js";
import { tweetGen } from "../utils/fn.js";

const tweetData = {
  id: 1,
  image: "https://robohash.org/excepturiiuremolestiae.png",
  firstName: "Pippo",
  username: "superPippo",
  body: "his mother had always tauth him",
  reactions: 1,
};

let userList = [];
let postList = [];

const contentEl = document.querySelector(".content");
/* contentEl.append(tweetGen(tweetData)); */

/* GET("/posts").then(({ posts }) => (postList = posts));

GET("/users")
  .then(({ users }) => (userList = users))
  .then(() => console.log(postList)); */

const remoteData = Promise.all([GET("/posts"), GET("/users")]);

remoteData
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    postList
      .map((post) => {
        const corrUser = userList.find((user) => user.id === post.userId);
        post.user = corrUser;
        return post;
      })
      .forEach((post) => contentEl.append(tweetGen(post)))
  );

/* postList.forEach((post) => contentEl.append(tweetGen(post))) */
