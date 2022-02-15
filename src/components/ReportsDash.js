import React, { useState } from 'react';
import StrategicObjectiveForm from "../components/StrategicObjectiveForm.js";
import MissionVision from "../components/MissionVision.js";


function ReportsDash() {

  const [ state, setState ] = useState('default');


  return(
    <div className="reportsDash">
      <div>
        <p className="pageHeading">Set Security Strategy</p>
        <hr className="horizontalRule" />
      </div>

      <div className="subDash">
        <div className="buttonContainer">
          <button id="1" className={`dashButton ${ state==='mission' ? "activeButton" : ""}`} onClick={ () => setState('mission') }>Mission & Vision</button>
          <button id="2" className={`dashButton ${ state==='objectives' ? "activeButton" : ""}`} onClick={ () => setState('objectives') }>Strategic Business Objectives</button>
        </div>


        <div className="activeDash">
          { state === 'default'
            && (<MissionVision />)
          }
          { state === 'mission'
            && (<MissionVision />)
          }
          { state === 'objectives'
            && (<StrategicObjectiveForm />)
          }

        </div>
      </div>


    </div>
  );
};

export default ReportsDash;
