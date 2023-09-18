import React, { useRef, useEffect } from "react";
import drawCircle from "./utilities/canvasLoadAnimation";

function Mem({ memData }) {
  const { totalMem, memUseage, freeMem, memWidgetId } = memData;
  const totalMemInGB = ((totalMem / 1073741824) * 100) / 100;
  const freeMemInGB = Math.floor((freeMem / 1073741824) * 100) / 100;
  const mem = memUseage * 100;

  const canvasRef = useRef(null);

  useEffect(
    () => {
      const canvas = canvasRef.current;
      if (canvas) {
        drawCircle(canvas, mem);
      }
    },
    [mem]
  );

  return (
    <div className="col-sm-3 mem">
      <h3>Memory Usage</h3>
      <div className="canvas-wrapper">
        <canvas
          className={memWidgetId}
          width="200"
          height="200"
          ref={canvasRef}
        />
        <div className="mem-text">{mem.toFixed(2)}%</div>
      </div>
      <div>Total Memory: {totalMemInGB.toFixed(2)}gb</div>
      <div>Free Memory: {freeMemInGB.toFixed(2)}gb</div>
    </div>
  );
}

export default Mem;
