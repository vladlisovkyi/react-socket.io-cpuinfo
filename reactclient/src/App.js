import React, { useState, useEffect } from "react";
import socket from "./utilities/socketConnection";
import Widget from "./Widget";

function App() {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    const handleData = (data) => {
      setPerformanceData((prevData) => ({
        ...prevData,
        [data.macA]: data,
      }));
    };

    socket.on("data", handleData);

    return () => {
      socket.off("data", handleData);
    };
  }, []);

  const widgets = Object.values(performanceData).map((value) => (
    <Widget key={value.macA} data={value} />
  ));

  return <div className="App">{widgets}</div>;
}

export default App;
