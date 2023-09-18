import React from "react";
import moment from "moment";

function Info({ infoData }) {
  const { osType, upTime, cpuModel, numCores, cpuSpeed } = infoData;

  return (
    <div className="col-sm-3 col-sm-offset-1 cpu-info">
      <div className="widget-text">
        <h3>Operating System:</h3> <span>{osType}</span>
      </div>

      <div className="widget-text">
        <h3>Time Online:</h3> <span>{moment.duration(upTime).humanize()}</span>
      </div>
      <h3 className="tac">Processor information:</h3>
      <div className="widget-text">
        <strong>Type:</strong> {cpuModel}
      </div>
      <div className="widget-text">
        <strong>Number of Cores:</strong> {numCores}
      </div>
      <div className="widget-text">
        <strong>Clock Speed:</strong> {cpuSpeed}
      </div>
    </div>
  );
}

export default Info;
