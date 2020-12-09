import './SeasonDisplay.css'
import React from 'react';

const SeasonDisplay = (props) => {
    const season = setSeason(props.lat, new Date().getMonth())
    const{text,iconName} = seasonConfig[season];
    return(
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon `} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon `} />
    </div>
    )
}

const setSeason = (lat,month) => {
    if(month >2 && month < 9){
       return lat > 0 ? 'winter': 'summer';
    }else{
        return lat > 0 ? 'summer': 'winter';
    }
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "It's chilly",
        iconName: "snowflake"
    }
}

export default SeasonDisplay;
