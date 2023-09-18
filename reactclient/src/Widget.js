import React from "react";
import Cpu from "./Cpu";
import Mem from "./Mem";
import Info from "./Info";
import "./widget.css";

function Widget({ data }) {
  const {
    freeMem,
    totalMem,
    usedMem,
    memUseage,
    osType,
    upTime,
    cpuModel,
    numCores,
    cpuSpeed,
    cpuLoad,
    macA,
    isActive,
  } = data;

  const cpuWidgetId = `cpu-widget-${macA}`;
  const memWidgetId = `mem-widget-${macA}`;

  const cpuData = { cpuLoad, cpuWidgetId };
  const memData = { totalMem, usedMem, memUseage, freeMem, memWidgetId };
  const infoData = { macA, osType, upTime, cpuModel, numCores, cpuSpeed };

  return (
    <div className={`widget col-sm-12 ${isActive ? "" : "not-active"}`}>
      {!isActive && <div className="not-active">Offline</div>}
      <div className="pc-info">
        <Cpu cpuData={cpuData} />
        <Mem memData={memData} />
      </div>

      <Info infoData={infoData} />
    </div>
  );
}

export default Widget;
