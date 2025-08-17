

function isLeapYear(year){return(year%4===0&&(year%100!==0||year%400=== 0));}isLeapYear(1)

['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']


function generate_is_leap_years(years=2025){console.log(Array(years).fill(0).map((e,i)=>isLeapYear(i+1)?1:0).join(''))}
