function isLeapYear(y=2025){return(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001')[(y-1)%400]}
function start_day(y=2025){let e='1234601245602345012356013456';return Object.assign(Array(17).fill(e),{3:e.slice(0,-12),4:e.slice(4,-16),5:e.slice(-16),8:e.slice(0,-8),9:e.slice(8),12:e.slice(0,-4),13:e.slice(-16)}).join('')[(y-1)%400]}
function get_calender(y=2025){let d,s,l;
d=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
s=Number(start_day(y));
l=isLeapYear(y)==1?29:28;
return Array.from({length:12},(_,i2)=>Array.from({length:[31,l,31,30,31,30,31,31,30,31,30,31][i2]},(_,i)=>d[(s+(i2>1?l:0)+i+[0,3,3,6,1,4,6,2,5,0,3,5][i2])%7]))
}

function gregorian_julian_day(y=2025,m=1,d=1){ return BigInt((BigInt(y)-1n)/400n)*146097n+ (Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001') .slice(0,Number(((BigInt(y)-1n)-(400n*BigInt((BigInt(y)-1n)/400n))))) .split('').map(e=>Number(e)?366n:365n).reduce((p,e)=>p+e,0n)+ BigInt((isLeapYear(y)==1?366:365)-get_calender(y).slice(m-1).flat().slice(d-1).length)+ 1n }
gregorian_julian_day();

function gregorian_from_julian_day(n){ n = BigInt(n); let k = n-1n; let q = k/146097n; let r = k%146097n; let y=0; let pat=(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001').split(''); for(let i=0;i<400;i++){ let days = pat[i]=='1'?366:365; if(r<days){break;} r-=BigInt(days);y++; } y += Number(q*400n)+1; let l = pat[(y-1)%400]=='1'?29:28; let mdays=[31,l,31,30,31,30,31,31,30,31,30,31]; let m=0; for(;m<12;m++){ if(r<BigInt(mdays[m])) break; r-=BigInt(mdays[m]); } let d=Number(r)+1; return [y,m+1,d]; }


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



'30211131112120211211212112212112112111121122112121111212120212121112122111122211112212111121211121212111221112121211121212111212111212121112122111122111121212'.split('').map((e,i)=>({year:1343+i,days:[353,354,355,356][Number(e)]}))



u=async b=>new Response(new Blob([Uint8Array.from(atob(b),c=>c.charCodeAt(0))]).stream().pipeThrough(new DecompressionStream("gzip"))).text();

u('H4sIAAAAAAAAClWMCwoAMAhCr7Rn97/bKIs1EM0PxREQgFDehSRzgQ7cWHJsq6py0PJGPXW6zNLPzYNJL5Bkz9CeAAAA').then(e=>ds=e.split('').map((e,i)=>({year:1343+i,days:[353,354,355,356][Number(e)]})));

u('H4sIAAAAAAAACp1TARKDMAj7UlL//7edXbGUULp56h0oDSFEErxvNpIAl+vC/Rr3+17WnxG7agJXs5jt+oawsp64mPNcgOHEAQ0Dwov2bVC3ZK3B8bKaFqr/OatTTdo+1cGHoLPIRgoogU+Co4rJgvIZYDSXXXLBqGeH4rkaFUJ5BtL1eIssKnVMgj9+6eAXtu8AVh0eO+aAzhCnDgZjDUY8E2x4cWmR6zdZx3nEBo5KIVF+jPGraXba3mag0EGtZPFhDYnQ2jAkD46jUq4y8UdmxwVDDFna0exxlCy4041UubOURZVOIdNtVX7c/lJhD69+2dQ6r82pTBhBe/wBPTrxy2gHAAA=').then(e=>ds2=e.split('').map(e=>[29,30,28,31][e]).reduce((p,e,i,a)=>{if(i%12==11){p.push(a.slice(i-11,i+1))}return p},[])).then(e=>{Hijri_object=(() => {
  let i = 4; // starting weekday index
  const monthNames = ['Muharram','Safar','Rabiʿal-Awwal','Rabiʿal-Thani','Jumadaal-Awwal','Jumadaal-Thani','Rajab','Shaʿban','Ramadan','Shawwal','Dhual-Qiʿdah','Dhual-Hijjah'];
  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const calendar = {};

  ds2.forEach((yearMonths, yearIndex) => {
    const yearNum = 1343 + yearIndex;
    calendar[yearNum] = {};

    yearMonths.forEach((monthLength, monthIndex) => {
      const monthNum = monthIndex + 1;   // month starts from 1
      const monthName = monthNames[monthIndex];

      calendar[yearNum][monthNum] = {};  // initialize month object

      for (let day = 1; day <= monthLength; day++) {
        i = i + 1;
        calendar[yearNum][monthNum][day] = {
          year: yearNum,
          weekday: weekDays[i % 7],
          day: day,
          month: monthNum,
          monthName: monthName,
          jd: 23994 + i
        };
      }
    });
  });

  return calendar;
})();})


/*23999,1343,1,1,1924,8,1 to  79989,1500,12,30,2077,11,16*/

function get_hegri_julian_day(y=1343,m=1,d=1){return 23999+ds2.slice(0, y-1343).flat().reduce((p,e)=>p+e,0)+ds2[y-1343].slice(0,m-1).reduce((p,e)=>p+e,0)+d-1}



/*JDN 1721426 = 1‑Jan‑1*/
/*each 400 year cycle have 146097 days*/

(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001').split('').reduce((p,e)=>p+[365,366][e],0)

146097









ds6='bbcbbcbbbdbbbccbcbcbcbcbcbcbcacbdbbcbccbbcbbccbbcccbbcbbcbbccbcbcbcbbccadbcbcbcbbbdabcbcbccbcbbcbbcbcbcccbbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbcbcadbcbcbcbcbbcbccbcbcbbccbcbcbcbcbcbcbbbbcbccbccbbcbbbcbccbccbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbdbbbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbbcbcbcbcbcbcbcbcbccbcbcbbbcbcbcbccbcbbcbcbcbcbcbcbbcbcbcbbccbbbcbcbcbccbbccbccbbbcbcbcbccbcbcbbcbbbcbcbcbcbcbccbcbcbcbcbcbbcbcbcbcbcbcbcbbcbccbcbcbcbbcbbccbcbcbcbbcbcbcbcbcbcbcbcbcbcbcbbccbcbbbcbbccbcbcbcbbccbcbcbcbcbbcbbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbccbcbcbcbcbcbbccbcbcbcbcbbbcbcccbcbcbbbcbcbcbccbbcbcbbcbccbcbcbcbbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbbcbccbcbcbbcbcbcbccbcbcbbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbcbccbcbbcbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbcbccbcbbbbcbccbcccbbbbcbbccbcccbbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbcbccbcbcbbcbbcbccbcbcbbcbbcbccbccbbbcbbcbccbccbbcbbcbbccbcbcbcbcbbcbcbcbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbbcbccbcbcbcbbbccbcbcbccbbbcbcbcbcbccbbcbcbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbbcbccbccbbcbbcbcbcbccbbcbcbbcbcbcbcbcbcbcbcbbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbccbbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbccbbcbbcbbccbccbbcbcbbbccbccbcbbcbbcbcbcbccbcbbcbcbbcbccbcbcbbcbbcbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbcbbbccbccbcbbcbbcbcbccbcbcbbcbcbbccbcbcbcbcbbcbbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbbcbcbbbccbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbccbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbcbbcbbccbccbcbb'.split('').map(e=>({a:31,b:30,c:29,d:28}[e]));

ds6.slice(0,((1425)-1342)*12).slice(0,-(12)+(1)-1).reduce((p,e)=>p+e,0)+28+23999-1;




function Hijri_to_JD(y=1343,m=1,d=1){
let ds6='bbcbbcbbbdbbbccbcbcbcbcbcbcbcacbdbbcbccbbcbbccbbcccbbcbbcbbccbcbcbcbbccadbcbcbcbbbdabcbcbccbcbbcbbcbcbcccbbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbcbcadbcbcbcbcbbcbccbcbcbbccbcbcbcbcbcbcbbbbcbccbccbbcbbbcbccbccbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbdbbbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbbcbcbcbcbcbcbcbcbccbcbcbbbcbcbcbccbcbbcbcbcbcbcbcbbcbcbcbbccbbbcbcbcbccbbccbccbbbcbcbcbccbcbcbbcbbbcbcbcbcbcbccbcbcbcbcbcbbcbcbcbcbcbcbcbbcbccbcbcbcbbcbbccbcbcbcbbcbcbcbcbcbcbcbcbcbcbcbbccbcbbbcbbccbcbcbcbbccbcbcbcbcbbcbbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbccbcbcbcbcbcbbccbcbcbcbcbbbcbcccbcbcbbbcbcbcbccbbcbcbbcbccbcbcbcbbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbbcbccbcbcbbcbcbcbccbcbcbbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbcbccbcbbcbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbcbccbcbbbbcbccbcccbbbbcbbccbcccbbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbcbccbcbcbbcbbcbccbcbcbbcbbcbccbccbbbcbbcbccbccbbcbbcbbccbcbcbcbcbbcbcbcbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbbcbccbcbcbcbbbccbcbcbccbbbcbcbcbcbccbbcbcbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbbcbccbccbbcbbcbcbcbccbbcbcbbcbcbcbcbcbcbcbcbbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbccbbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbccbbcbbcbbccbccbbcbcbbbccbccbcbbcbbcbcbcbccbcbbcbcbbcbccbcbcbbcbbcbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbcbbbccbccbcbbcbbcbcbccbcbcbbcbcbbccbcbcbcbcbbcbbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbbcbcbbbccbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbccbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbcbbcbbccbccbcbb'.split('').map(e=>({a:31,b:30,c:29,d:28}[e]));

return ds6.slice(0,((y)-1342)*12).slice(0,-(12)+(m)-1).reduce((p,e)=>p+e,0)+d+23999-1;

}

Hijri_to_JD()





function JD_to_Hijri(JD=23999){
  let ds6='bbcbbcbbbdbbbccbcbcbcbcbcbcbcacbdbbcbccbbcbbccbbcccbbcbbcbbccbcbcbcbbccadbcbcbcbbbdabcbcbccbcbbcbbcbcbcccbbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbcbcadbcbcbcbcbbcbccbcbcbbccbcbcbcbcbcbcbbbbcbccbccbbcbbbcbccbccbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbdbbbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbbcbcbcbcbcbcbcbcbccbcbcbbbcbcbcbccbcbbcbcbcbcbcbcbbcbcbcbbccbbbcbcbcbccbbccbccbbbcbcbcbccbcbcbbcbbbcbcbcbcbcbccbcbcbcbcbcbbcbcbcbcbcbcbcbbcbccbcbcbcbbcbbccbcbcbcbbcbcbcbcbcbcbcbcbcbcbcbbccbcbbbcbbccbcbcbcbbccbcbcbcbcbbcbbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbccbcbcbcbcbcbbccbcbcbcbcbbbcbcccbcbcbbbcbcbcbccbbcbcbbcbccbcbcbcbbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbbcbccbcbcbbcbcbcbccbcbcbbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbcbccbcbbcbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbcbccbcbbbbcbccbcccbbbbcbbccbcccbbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbcbccbcbcbbcbbcbccbcbcbbcbbcbccbccbbbcbbcbccbccbbcbbcbbccbcbcbcbcbbcbcbcbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbbcbccbcbcbcbbbccbcbcbccbbbcbcbcbcbccbbcbcbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbbcbccbccbbcbbcbcbcbccbbcbcbbcbcbcbcbcbcbcbcbbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbccbbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbccbbcbbcbbccbccbbcbcbbbccbccbcbbcbbcbcbcbccbcbbcbcbbcbccbcbcbbcbbcbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbcbbbccbccbcbbcbbcbcbccbcbcbbcbcbbccbcbcbcbcbbcbbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbbcbcbbbccbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbccbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbcbbcbbccbccbcbb'
             .split('')
             .map(e=>({a:31,b:30,c:29,d:28}[e]));
  let days=JD-23999+1, y=1343, m=1;
  for(let len of ds6){
    if(days>len){days-=len; m++; if(m>12){m=1; y++;}}
    else break;
  }
  return {y,m,d:days};
}
JD_to_Hijri()





/*
Hijri_to_JD

=LAMBDA(yy;mm;dd;     LET(         yy; IF(OR(ISBLANK(yy); yy=""); 1425; yy);         mm; IF(OR(ISBLANK(mm); mm=""); 1; mm);         dd; IF(OR(ISBLANK(dd); dd=""); 1; dd);                  nums; MID(patt; SEQUENCE(LEN(patt)); 1);         lens; MAP(nums; LAMBDA(ch; CHOOSE(MATCH(ch; {"a";"b";"c";"d"};0);31;30;29;28)));                  offset; (yy-1342)*12;         monthsums; IF(offset>0; DROP(TAKE(lens; offset); 12-mm); TAKE(DROP(lens; 12-mm); -offset));                  SUM(monthsums)+dd+23998     ) )

patt

="bbcbbcbbbdbbbccbcbcbcbcbcbcbcacbdbbcbccbbcbbccbbcccbbcbbcbbccbcbcbcbbccadbcbcbcbbbdabcbcbccbcbbcbbcbcbcccbbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbcbcadbcbcbcbcbbcbccbcbcbbccbcbcbcbcbcbcbbbbcbccbccbbcbbbcbccbccbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbc"&"bcbcbdbbbcbcbcbcbcbcbbbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbbcbcbcbcbcbcbcbcbccbcbcbbbcbcbcbccbcbbcbcbcbcbcbcbbcbcbcbbccbbbcbcbcbccbbccbccbbbcbcbcbccbcbcbbcbbbcbcbcbcbcbccbcbcbcbcbcbbcbcbcbcbcbcbcbbcbccbcbcbcbbcbbccbcbcbcbbcbcbcbcbcbcbcbcbcbcbcbbc"&"cbcbbbcbbccbcbcbcbbccbcbcbcbcbbcbbcbcbcbcbcbcbcbcbcbcbbbcbcbcbbcbccbcbcbcbcbcbbccbcbcbcbcbbbcbcccbcbcbbbcbcbcbccbbcbcbbcbccbcbcbcbbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbcbcbcbcbcbbcbbcbccbcbcbbcbcbcbccbcbcbbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbcbcbcbcbcbcbc"&"bbcbcbcbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbcbccbcbbcbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbcbccbcbbbbcbccbcccbbbbcbbccbcccbbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbbcbccbcbcbbcbbcbccbcbcbbcbb"&"cbccbccbbbcbbcbccbccbbcbbcbbccbcbcbcbcbbcbcbcbccbcbbbcbcbcbccbcbbcbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbcbcbcbbcbcbbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbbcbcbcbccbcbbcbbcbcbcc"&"bcbcbbcbbcbcbccbcbcbbcbbcbccbcbcbcbbbcbccbcbcbcbbbccbcbcbccbbbcbcbcbcbccbbcbcbbcbcbccbcbcbbbcbcbccbccbbcbbbcbccbccbbcbbbcbccbccbbcbbcbcbcbccbbcbcbbcbcbcbcbcbcbcbcbbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbccbbbbcbcbccbcbcbbcbbcbccbcbcbcbbcbcbcbcbccbbcbbcbbccbccbb"&"cbcbbbccbccbcbbcbbcbcbcbccbcbbcbcbbcbccbcbcbbcbbcbccbcbcbcbbbcbccbccbcbbbcbbccbccbcbbcbbbccbccbcbbcbbcbcbccbcbcbbcbcbbccbcbcbcbcbbcbbcbccbcbcbbcbbcbccbccbbcbbbcbccbccbbcbbcbbccbccbbcbcbbbccbcbcbcbcbbcbcbcbccbcbbcbbcbcbccbcbcbbbcbcbccbcbcbbcbbcbccbcbcbcbbc"&"bcbbccbcbcbcbbcbbccbcbccbbcbbbccbccbcbcbbbcbcbccbcbcbbbcbcbccbcbcbbcbbccbcbcbcbcbbcbcbcbcbcbcbcbcbbcbbccbccbcbb"

*/




