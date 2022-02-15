import React from 'react';

function MissionVision() {

  return(
    <div className="dashContainer">

      <div className="reportsDash">
        <form className="missionForm">
        <label className="missionStatement">Mission Statement</label>
        <textarea className="missionStatementTxt"
                  name="mission"
                  rows="6"
                  cols="50"
                  placeholder="My mission is to become a better developer, look back at this experience and (hopefully) have a laugh!"
                  >
        </textarea>
        <label>Goals to kick on the way:</label>
        <input className="missionGoals" type="text" name="mission" size="90"></input>
        <input className="missionGoals" type="text" name="mission" size="90"></input>
        <input className="missionGoals" type="text" name="mission" size="90"></input>
        </form>
      </div>

    </div>
  );
};

export default MissionVision;
