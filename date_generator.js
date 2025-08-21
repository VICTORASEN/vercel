function isLeapYear(y=2025){return(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001')[(y-1)%400]}
function start_day(y=2025){let e='1234601245602345012356013456';return Object.assign(Array(17).fill(e),{3:e.slice(0,-12),4:e.slice(4,-16),5:e.slice(-16),8:e.slice(0,-8),9:e.slice(8),12:e.slice(0,-4),13:e.slice(-16)}).join('')[(y-1)%400]}
function get_calender(y=2025){let d,s,l;
d=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
s=Number(start_day(y));
l=isLeapYear(y)==1?29:28;
return Array.from({length:12},(_,i2)=>Array.from({length:[31,l,31,30,31,30,31,31,30,31,30,31][i2]},(_,i)=>d[(s+(i2>1?l:0)+i+[0,3,3,6,1,4,6,2,5,0,3,5][i2])%7]))
}

function gregorian_days(y=2025,m=1,d=1){return BigInt((BigInt(y)-1n)/400n)*146097n+(Array(4).fill('0001'.repeat(24)).join('0000').slice(0,-1)+'10001').slice(0,Number(((BigInt(y)-1n)-(400n*BigInt((BigInt(y)-1n)/400n))))).split('').map(e=>Number(e)?366n:365n).reduce((p,e)=>p+e)+BigInt(get_calender(parseInt(y)).slice(parseInt(m)).flat().slice(parseInt(d)).length)}
gregorian_days();


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

u('H4sIAAAAAAAACp1TARKDMAj7UlL//7edXbGUULp56h0oDSFEErxvNpIAl+vC/Rr3+17WnxG7agJXs5jt+oawsp64mPNcgOHEAQ0Dwov2bVC3ZK3B8bKaFqr/OatTTdo+1cGHoLPIRgoogU+Co4rJgvIZYDSXXXLBqGeH4rkaFUJ5BtL1eIssKnVMgj9+6eAXtu8AVh0eO+aAzhCnDgZjDUY8E2x4cWmR6zdZx3nEBo5KIVF+jPGraXba3mag0EGtZPFhDYnQ2jAkD46jUq4y8UdmxwVDDFna0exxlCy4041UubOURZVOIdNtVX7c/lJhD69+2dQ6r82pTBhBe/wBPTrxy2gHAAA=').then(e=>ds2=e.split('').map(e=>[29,30,28,31][e]).reduce((p,e,i,a)=>{if(i%12==11){p.push(a.slice(i-11,i+1))}return p},[]));


/*23999,1343,1,1,1924,8,1 to  79989,1500,12,30,2077,11,16*/




