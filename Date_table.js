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
