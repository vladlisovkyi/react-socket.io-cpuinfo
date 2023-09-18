import io from "socket.io-client";
const socket = io.connect("http://localhost:8181");
socket.emit("clientAuth", "uihjt3refvdsadf");
export default socket;
