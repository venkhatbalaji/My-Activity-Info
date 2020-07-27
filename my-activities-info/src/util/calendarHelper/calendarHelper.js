export default{

    convertDateTimeToRange: (activityInfo)=>{
        console.log(activityInfo)
        if(activityInfo !== null){
            let startTime = convertStringToDate(activityInfo.start_time);
            let endTime = convertStringToDate(activityInfo.end_time);
            return{
                startTime,
                endTime
            }
        }else{
            return null;
        }
    },

    filterActivityRange: (activePeriod, selectedRange) =>{
        if(activePeriod && selectedRange && selectedRange.from && selectedRange.to){
            let starttime = convertStringToDate(activePeriod.start_time);
            let endTime = convertStringToDate(activePeriod.end_time);
            console.log(starttime, endTime, selectedRange);
            if(starttime >= selectedRange.from && endTime <= selectedRange.to){
                return true;
            } else{
                return false;
            }
        }
    },

};


const convertStringToDate = (input) =>{
    console.log(input)
    if(input){
        let inputArray = input.replace(',','').split(" ");
        inputArray.pop();
        const date = new Date(inputArray.toString());
        return date;
    }else{
        return null;
    }
};
