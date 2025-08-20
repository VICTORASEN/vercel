function isLeapYear(y=2025){return(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001')[(y-1)%400]}
function start_day(y=2025){let e='1234601245602345012356013456';return Object.assign(Array(17).fill(e),{3:e.slice(0,-12),4:e.slice(4,-16),5:e.slice(-16),8:e.slice(0,-8),9:e.slice(8),12:e.slice(0,-4),13:e.slice(-16)}).join('')[(y-1)%400]}
function get_calender(y=2025){let d,s,l;
d=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
s=Number(start_day(y));
l=isLeapYear(y)==1?29:28;
return Array.from({length:12},(_,i2)=>Array.from({length:[31,l,31,30,31,30,31,31,30,31,30,31][i2]},(_,i)=>d[(s+(i2>1?l:0)+i+[0,3,3,6,1,4,6,2,5,0,3,5][i2])%7]))
}

function gregorian_days(y=500,m,d=2){
return((BigInt(y)/400n)*146097n)+BigInt([31,isLeapYear(y)==1?29:28,31,30,31,30,31,31,30,31,30,31].slice(0,m-1).reduce((p,e)=>p+e,0))+BigInt(d)
 }


/* function isLeapYear(y){return(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001')[(y-1)%400]} function start_day(y,e='1234601245602345012356013456'){return Object.assign(Array(17).fill(e),{3:e.slice(0,-12),4:e.slice(4,-16),5:e.slice(-16),8:e.slice(0,-8),9:e.slice(8),12:e.slice(0,-4),13:e.slice(-16)}).join('')[(y-1)%400]} days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; s = start_day(2025); l = isLeapYear(2025) == 1 ? 29 : 28; [ Array.from({length:31},(_,i)=>days[(s+i)%7]), Array.from({length:l},(_,i)=>days[(s+i+31)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31)%7]), Array.from({length:30},(_,i)=>days[(s+l+i+31+31)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31+31+30)%7]), Array.from({length:30},(_,i)=>days[(s+l+i+31+31+30+31)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31+31+30+31+30)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31+31+30+31+30+31)%7]), Array.from({length:30},(_,i)=>days[(s+l+i+31+31+30+31+30+31+31)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31+31+30+31+30+31+31+30)%7]), Array.from({length:30},(_,i)=>days[(s+l+i+31+31+30+31+30+31+31+30+31)%7]), Array.from({length:31},(_,i)=>days[(s+l+i+31+31+30+31+30+31+31+30+31+30)%7]) ]; (31+31+30+31+30+31+31+30+31+30)%7 */


function gregorianToHijri(date='622-7-19') {
  const d = (date instanceof Date) ? date : new Date(date);
  const fmt = new Intl.DateTimeFormat(
    'en-u-ca-islamic-umalqura-nu-latn',
    { year: 'numeric', month: 'numeric', day: 'numeric' }
  );
  const parts = Object.fromEntries(fmt.formatToParts(d).map(p => [p.type, p.value])); 
  return {
    y: Number(parts.year),          // e.g. 1447
    m: Number(parts.month),        // 1..12  (Muḥarram = 1)
    d: Number(parts.day)             // 1..30
  };
}

function gregorianCalenderToHijri(year='622'){return[year].map(e3 =>
  get_calender(e3) // no .slice(6)
    .map((monthArr, i2) =>
      monthArr.map((dayName, i) =>
        Object.assign(
          gregorianToHijri(`${e3}-${i2 + 1}-${i + 1}`), // proper month + day
          { day2: dayName }
        )
      )
    )
)[0]}

gregorianCalenderToHijri().filter(e=>!(e[0]['y']==0))

