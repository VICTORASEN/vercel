
/*
Non-leap year: 365 days

February 28

Leap year: 366 days

February 29
*/

function isLeapYear(y){return(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001')[(y-1)%400]}

function start_day(y,e='1234601245602345012356013456'){return Object.assign(Array(17).fill(e),{3:e.slice(0,-12),4:e.slice(4,-16),5:e.slice(-16),8:e.slice(0,-8),9:e.slice(8),12:e.slice(0,-4),13:e.slice(-16)}).join('')[(y-1)%400]}




function get_calender(){ let d,s,l;
d=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
s=Number(start_day(2025));
l= isLeapYear(2025) == 1 ? 29 : 28;
return[
Array.from({length:31},(_,i)=>d[(s+i)%7]),
Array.from({length:l},(_,i)=>d[(s+i+3)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+3)%7]),
Array.from({length:30},(_,i)=>d[(s+l+i+6)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+1)%7]),
Array.from({length:30},(_,i)=>d[(s+l+i+4)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+6)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+2)%7]),
Array.from({length:30},(_,i)=>d[(s+l+i+5)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+0)%7]),
Array.from({length:30},(_,i)=>d[(s+l+i+3)%7]),
Array.from({length:31},(_,i)=>d[(s+l+i+5)%7])
];
}

