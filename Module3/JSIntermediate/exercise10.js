const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')


console.log(today.getHours()*60 + today.getMinutes() + ' the total number of minutes that have passed so far today')
console.log(today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds() + ' the total number of seconds that have passed so far today')



const birthDate = new Date(Date.parse("27 Jul 1981"));

const monthDays = [30,28,30,31,30,31,30,31,30,31,30,31];

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

if(leapyear((new Date()).getYear()))
    monthDays[1] = 29;

function calculateFullAge(birthDate){
    
        const birthDateYear = birthDate.getYear();  
        const birthDateMonth = birthDate.getMonth();  
        const birthDateDate = birthDate.getDate();  
          
        
        const now = new Date();  
        const currentYear = now.getYear();  
        const currentMonth = now.getMonth();  
        const currentDate = now.getDate();  
           
        
        let ageYears = currentYear - birthDateYear;  
        let ageMonths = currentMonth - birthDateMonth;
        let ageDays = currentDate - birthDateDate;
        

        if(ageMonths == 0){

            if(ageDays < 0)
            {
                ageYears--;  
                ageMonths = 11;  
                ageDays = monthDays[currentMonth] + ageDays;
            }
        }
        else 
        if (ageMonths < 0) {  
            ageYears--;  
            ageMonths = 12 + ageMonths;  
        }  
      
        if (ageDays < 0){  

            ageMonths--;  
      
          if (ageMonths < 0) {  
            ageMonths = 11;  
            ageYears--;  
          }  
          
          ageDays = monthDays[currentMonth] + ageDays;  
        }  
        
        const fullAge = {  
        years: ageYears,  
        months: ageMonths,  
        days: ageDays  
        };  

        return fullAge;
}

const fullAge = calculateFullAge(birthDate);

console.log(`I am ${fullAge.years} years, ${fullAge.months} months and ${fullAge.days} days old`)

function daysInBetween(date1, date2){

    let ldiffMillsec = Math.abs(date1 - date2);

    return ldiffMillsec / (1000 * 3600 * 24);    

}

console.log(`${daysInBetween(new Date(Date.parse("27 Jul 1981")), new Date(Date.parse("27 Jul 1982")))} days`);