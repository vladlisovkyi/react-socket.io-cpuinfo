function socketMain(io, socket) {
  socket.on("clientAuth", (key) => {
    if (key === "5t78yuhgirekjaht32i3") {
      socket.join("clients");
    } else if (key === "uihjt3refvdsadf") {
      socket.join("ui");
      console.log("A react client has joined!");
    } else {
      socket.disconnect(true);
    }
  });

  socket.on("perfData", (data) => {
    console.log("Tick...");
    io.to("ui").emit("data", data);
  });
}

module.exports = socketMain;
