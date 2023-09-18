import React, { useRef, useEffect } from "react";
import drawCircle from "./utilities/canvasLoadAnimation";

function Cpu({ cpuData }) {
  const { cpuWidgetId, cpuLoad } = cpuData;
  const canvasRef = useRef(null);

  useEffect(
    () => {
      const canvas = canvasRef.current;
      if (canvas) {
        drawCircle(canvas, cpuLoad);
      }
    },
    [cpuLoad]
  );

  return (
    <div className="col-sm-3 cpu">
      <h3>CPU load</h3>
      <div className="canvas-wrapper">
        <canvas
          className={cpuWidgetId}
          width="200"
          height="200"
          ref={canvasRef}
        />
        <div className="cpu-text">{cpuLoad}%</div>
      </div>
    </div>
  );
}

export default Cpu;
