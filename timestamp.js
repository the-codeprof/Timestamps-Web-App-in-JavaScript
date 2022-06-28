
// Author: Thompson Musiliu Omokayode - (Codeprof ) from codeprof academy 

//  grabbing my time display DOM elements
const days = document.getElementById('days');
const hours = document.getElementById("hours")
const mins = document.getElementById("mins")
const secs = document.getElementById("secs")


// calculate timeout function 
function calcTiming(){

    const startDate = new Date(); // the giveaway starting time
    const endDate  = new Date(2023, 1, 14); // the giveaway period ending time

    const start = startDate.getTime(); // converting to timestamp for calcualtion
    const end  = endDate.getTime();  // converting to timestamp for calcualtion
    let TimeRemain = end - start; // getting the time left for the giveaway to expire
    
   let  dd = Math.floor( TimeRemain / (24 * 3600 * 1000)) // getting the no of days
   if(dd < 10 ){ 
    dd = "0" + dd; // to prefix the no of days with a zero if less than 10
   }else{
    dd = dd // if the nos of days > 10, display it like that without the prefix zero
   }
    TimeRemain = TimeRemain % (24 * 3600 * 1000);// getting the remaining time after
    // deducting the no of days


// same process for calculating the days goes for the hours, mins and secs

    //  calculating the no of hours remaining
    let hr = Math.floor(TimeRemain / (3600 * 1000))
     if(hr < 10 ){
    hr = "0" + hr;
   }else{
    hr = hr
   }
    TimeRemain = TimeRemain % (3600 * 1000);

    //  calculating the no of minutes remaining
    let mn = Math.floor(TimeRemain / (60 * 1000))
       if(mn < 10 ){
    mn = "0" + mn;
   }else{
    mn = mn
   }
    TimeRemain = (TimeRemain) % (60 * 1000);

    
    //  calculating the no of secs remaining
    let sc = Math.floor(TimeRemain / 1000) // converting for millisec to sec
      if(sc < 10 ){
    sc = "0" + sc;
   }else{
    sc = sc
   }
     
   
   // populating the DOM elements with the calculated time values
    days.innerHTML = dd; // display the remaining days
    hours.innerHTML = hr; // display the remaining hours
    mins.innerHTML = mn; //  display the remaining minutes
    secs.innerHTML = sc; // display the remaining seconds


}

// ensuring the time keeps updating after every 1s
const timing = setInterval(()=>{
    
  calcTiming() // invoking the calcTiming function

  if(dd == 0 && hr==0 && mn == 0  && sc == 0){
    clearInterval(timing)
  }

}, 1000)