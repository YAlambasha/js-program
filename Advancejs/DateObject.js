//data objects
//The date() constructor creates data objects.when called as a function,it return a string respresenting the current time

//syntax:new Data(),new Data(data string)

/*9 ways
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

*/
const currentDate=new Date();
console.log(currentDate);