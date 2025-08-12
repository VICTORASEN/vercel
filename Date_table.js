/*

function get_date(day,month,year=2000){



let a=[year%4,year%100,year%400];








months=Object.assign({'JANUARY':31,'MARCH':31,'APRIL':30,'MAY':31,'JUNE':30,'JULY':31,'AUGUST':31,'SEPTEMBER':30,'OCTOBER':31,'NOVEMBER':30,'DECEMBER':31},{FEBRUARY:a.includes(0)||a.join('')=='000'?29:28});

months2=[31,a.includes(0)||a.join('')=='000'?29:28,31,30,31,30,31,31,30,31,30,31];

console.log(JSON.stringify(months2));


days=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];

28%7;


function next(e,s){return(e.JANUARY+s+months.JANUARY)%7}

res=([({
a:parseInt((year-1)/4),
b:parseInt((year-1)/100),
c:parseInt((year-1)/400)
})]

.map(e=>Object.assign(e,{
d:(e.a-e.b)+e.c,
e:((e.a-e.b)+e.c)*366,
f:((year-1)-((e.a-e.b)+e.c))*365,
}))

.map(e=>Object.assign(e,{
g:(e.f)+(e.e)+1,
JANUARY:(e.f+e.e+1)%7,

}))

.map(e=>Object.assign(e,{
i:days[e.JANUARY],
FEBRUARY:next(e,0),
MARCH:next(e,months.FEBRUARY),

}))
.map(e=>Object.assign(e,{
APRIL:next(e,e.MARCH),

}))


)[0]



//months2.slice(-(0+1)).reduce((e,e2)=>e+e2)


[31,29,31,30,31,30,31,31,30,31,30,31].map((e,i,a)=>a.slice(-(i+1)).reduce((e,e2)=>e+e2)).reduce((r,e,i,a)=>{

if(i==0){r.push((e+res.JANUARY)%7)}else{r.push((e+r.slice(-1))%7)}
return r
    },[])



}
//get_date()



a=2025;
b=a-1;
c=parseInt(b/4);
d=parseInt(b/100);
e=parseInt(b/400);
f=c+e-d;
g=b-f;
h=f*366;
i=g*365;
j=h+i;
k=j+1;
l=k%7;
m=a%4;
n=a%100;
o=a%400;
p=[m,n,o].includes(0)?29:28;
months=[31,p,31,30,31,30,31,31,30,31,30,31];
function get(index){return months.slice(0,index+1).reduce((e,e2)=>e+e2)}
JANUARY=k%7;
FEBRUARY=((k+get(0))%7);
MARCH=((k+get(1))%7);
APRIL=((k+get(2))%7);
MAY=((k+get(3))%7);
JUNE=((k+get(4))%7);
JULY=((k+get(5))%7);
AUGUST=((k+get(6))%7);
SEPTEMBER=((k+get(7))%7);
OCTOBER=((k+get(8))%7);
NOVEMBER=((k+get(9))%7);
DECEMBER=((k+get(10))%7);

[k%7].concat(Array(11).fill(0).map((e,i)=>((k+get(i))%7)))

console.log(JSON.parse(JSON.stringify({a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,JANUARY,FEBRUARY,MARCH,APRIL,MAY,JUNE,JULY,AUGUST,SEPTEMBER,OCTOBER,NOVEMBER,DECEMBER,months})))







//[31,29,31,30,31,30,31,31,30,31,30,31].slice(-(0+1)).reduce((e,e2)=>e+e2)


//document.body.innerHTML=get_month();


//document.body.innerHTML='<br>'+'<div class="wrapper">'+get_month(0)+get_month(1)+get_month(2)+get_month(3)+'</div>'

    
//m0.outerHTML=get_month(0);
//m1.outerHTML=get_month(1);




*/

function get_month(index=0){
    return Object.assign(document.createElement('span'),{id:'m'+index,className:'calendar',innerHTML:`<div class="c m">${['January','February','March','April','May','June','July','August','September','October','November','December'][index]}</div>`+['SUN','MON','TUE','WED','THU','FRI','SAT'].map(e=>Object.assign(document.createElement('div'),{className:'c d',innerHTML:e}).outerHTML).join('')+'<div class="c"></div>'.repeat(42)}).outerHTML
}

function display_numbers(a=2025){generate_tables();let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,months,day_start;
 b=a-1;
 c=parseInt(b/4);
 d=parseInt(b/100);
 e=parseInt(b/400);
 f=c+e-d;
 g=b-f;
 h=f*366;
 i=g*365;
 j=h+i;
 k=j+1;
 l=k%7;
 m=a%4;
 n=a%100;
 o=a%400;
 p=[28,29,28,29][[m,n,o].filter(e=>e===0).length];
 months=[31,p,31,30,31,30,31,31,30,31,30,31];

function get(index){return months.slice(0,index+1).reduce((e,e2)=>e+e2)};
                                 
day_start=[k%7].concat(Array(11).fill(0).map((e,i)=>((k+get(i))%7)));

console.log(JSON.parse(JSON.stringify({a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,months,day_start})));

Array.from(Array(12).fill('m').map((e,i)=>document.getElementById(e+i))).map(e=>Array.from(e.children)).forEach((e,i)=>e.slice(8).slice(day_start[i]).slice(0,months[i]).forEach((e,i)=>e.innerHTML=i+1))

}

function generate_tables(){Array(12).fill('m').map((e,i)=>document.getElementById(e+i).outerHTML=get_month(i));}

generate_tables();

display_numbers();





   






