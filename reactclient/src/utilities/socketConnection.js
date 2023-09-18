import io from "socket.io-client";
const socket = io.connect("https://socket-io-7gf6.onrender.com");
socket.emit("clientAuth", "uihjt3refvdsadf");
export default socket;
