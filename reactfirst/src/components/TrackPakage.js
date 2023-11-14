// // import Progressbar from './Component/Progress_bar'; 
// import Progressbar from "./Progress_bar";
// //import Progress_bar from "./Progress_bar";
// function TrackPakage() { 

 



// return ( 
	
// <div className="App"> 
// 	<h3 className="heading">Progress Bar</h3> 
// 	{/* <Progress_bar bgcolor="orange" progress='30' height={30} /> 
// 	<Progress_bar bgcolor="red" progress='60' height={30} />  */}
// 	<Progressbar bgcolor="#99ff66" progress={70} height={30} /> 
// 	<Progressbar bgcolor="#ff00ff" progress='85' height={30} /> 
// 	<Progressbar bgcolor="#99ccff" progress='95' height={30} /> 
// </div> 
	
// ); 
// } 

// export default TrackPakage; 
import React from 'react';
import Progressbar from './Progress_bar';

function TrackPakage(c,d) {
  const createdAt = c;
  const deliverDate = d;

   function parseDate(dateString) {
    const [, month, day, year, time, ampm, timeZone] = dateString.match(/(\w+), (\w+) (\d+), (\d+), (\d+:\d+:\d+ [APM]+) ([\w\s]+)$/);
    const date = new Date(`${month} ${day}, ${year} ${time} ${ampm} UTC+05:30`);
    return date;
  }
  function formatDateToCustomString(date) {
    const options = {
      weekday: 'short',    // Abbreviated weekday name (e.g., "Mon")
      month: 'short',      // Abbreviated month name (e.g., "Oct")
      day: 'numeric',      // Day of the month (e.g., "16")
      year: 'numeric',     // Four-digit year (e.g., "2023")
      hour: '2-digit',     // Two-digit hour (e.g., "17")
      minute: '2-digit',   // Two-digit minute (e.g., "53")
      second: '2-digit',   // Two-digit second (e.g., "40")
      timeZoneName: 'long', // Full time zone name (e.g., "India Standard Time")
    };
  
    const customDateString = date.toLocaleString('en-US', options);
    return customDateString;
  }
  
  const now = new Date();
  const currentDate = formatDateToCustomString(now);

  const deliveryDateObj=parseDate(deliverDate);
  const createdAtObj=parseDate(createdAt);
  const currentDateObj=parseDate(currentDate);
  console.log(currentDateObj);
  // Calculate the total time difference between createdAt and deliverDate
  const totalTime = deliveryDateObj - createdAtObj;

  // Calculate the progress based on the current date
 // const currentDateObj = new Date();
  const elapsedTime = currentDateObj - createdAtObj;
  
  // let progress = (elapsedTime / totalTime) * 100;
  // if (progress > 100) {
  //   progress = 100;
  // }
  let progress1 = Math.min((elapsedTime / totalTime) * 100, 100);

const progress = Math.ceil(progress1);


console.log(progress);
  return (
    <div className="App">
      <h3 className="heading">Track Package </h3>
      <Progressbar bgcolor="#99ff66" progress={progress} height={30} />
      {/* <Progressbar bgcolor="#ff00ff" progress='85' height={30} />  */}
    </div>
  );
}

export default TrackPakage;
