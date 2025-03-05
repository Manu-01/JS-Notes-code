// console.log('shukla');
// setTimeout(function(){
//     console.log('hi');
// },2000);//MINIMUN TIME IS 2 SEC TO EXECUTE , IT WILL EXECUTE WHEN STACK WILL EMPTY IT TAKE MORE TIME THAN 2 SEC NO GURANTEE.
// console.log('manu');


// Start an interval that logs a message every second
let count = 0;
let intervalID = setInterval(() => {
    console.log(`Interval running: ${++count}`);

    // Stop the interval after 5 executions
    if (count === 5) {
        clearInterval(intervalID);
        console.log("Interval stopped");
    }
}, 1000);
