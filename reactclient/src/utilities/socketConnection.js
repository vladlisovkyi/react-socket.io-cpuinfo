import io from "socket.io-client";
const socket = io("https://socket-io-7gf6.onrender.com", {
  withCredentials: false,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});
socket.emit("clientAuth", "uihjt3refvdsadf");
export default socket;
