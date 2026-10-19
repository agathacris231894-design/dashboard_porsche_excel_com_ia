// Campos: id|data|cliente|modelo|ano|preço|km|pagamento|cidade|estado|status
const raw = `
6|29/02/2024|Michael Adams|718 Cayman|2022|79500,00|9800|Credit Card|Boston|MA|Delivered
7|14/03/2024|SOPHIA Miller|911 Turbo S|2024|235000,00|1200|Wire Transfer|Seattle|WA|Delivered
8|18/04/2024|Daniel-Jones|Cayenne Coupe|2023|112750,00|6400|Financing|Austin|TX|In Transit
9|30/04/2024|Olivia Brown|Macan S|2021|68900,00|28|Cash|Denver|CO|Pending
10|22/05/2024|Ethan Wilson|Taycan 4S|2024|121000,00|0|Bank Transfer|Los Angeles|CA|Delivered
11|06/08/2024|Ava Martinez|Panamera 4|2023|104500,00|14500|Credit Card|Miami|FL|Cancelled
12|11/07/2024|Noah Davis|911 Carrera S|2020|96300,00|41000|Lease|New York|NY|Delivered
13|15/07/2024|Isabella Garcia|Cayenne E-Hybrid|2022|89750,00|11744|Wire Transfer|San Diego|CA|Pending Approval
14|19/08/2024|Liam Rodriguez|718 Boxster|2021|73500,00|22300|Debit Card|Chicago|IL|Shipped
15|02/09/2024|Mia Hernandez|Macan GTS|2024|95000,00|3500|Financing|Phoenix|AZ|In Transit
16|17/09/2024|James Lopez|Taycan Turbo|2023|153200,50|11|ACH Payment|Dallas|TX|Delivered
17|10/04/2024|Charlotte Young|911 GT3|2024|241000,00|750|Wire Transfer|Las Vegas|NV|Pending
18|11/05/2024|Benjamin Allen|Panamera Turbo S|2022|132000,00|19250|Cash|San Jose|CA|Delivered
19|12/12/2024|Amelia King|Cayenne Turbo GT|2024|188000,00|2100|Crypto Payment|Houston|TX|Awaiting Delivery
20|25/12/2024|Lucas Wright|911 Carrera Cabriolet|2023|127800,00|12000|Credit Card|Atlanta|GA|Delivered
21|06/01/2025|Harper Scott|Macan|2021|58900,00|33700|Bank Transfer|Orlando|FL|Pending
22|31/01/2025|Henry Torres|718 Spyder RS|2024|164000,00|900|Financing|Portland|OR|In Transit
23|14/02/2025|Evelyn Nguyen|Taycan Cross Turismo|2023|118500,00|7800|Wire Transfer|Charlotte|NC|Delivered
24|28/02/2025|Alexander Flores|Cayenne S|2022|91300,00|16000|Credit Card|Nashville|TN|Pending
25|21/03/2025|Abigail Carter|911 Targa 4S|2024|158750,00|2500|Lease|Minneapolis|MN|Delivered
26|28/03/2025|Jack Mitchell|Panamera|2020|72000,00|49000|Bank Transfer|Philadelphia|PA|Cancelled
27|09/04/2025|Emily Perez|Macan Electric|2025|86500,00|0|Wire Transfer|San Antonio|TX|Delivered
28|30/04/2025|William Roberts|911 Dakar|2024|270000,00|1050|Cash|Salt Lake City|UT|Awaiting Pickup
29|12/05/2025|Sofia Turner|Taycan GTS|2023|139000,00|6250|Financing|Raleigh|NC|In Transit
30|18/06/2025|Mason Phillips|Cayenne|2021|76800,00|38400|Credit Card|Detroit|MI|Delivered
31|30/06/2025|Ella Campbell|718 Cayman GT4 RS|2024|173600,00|400|Wire Transfer|Columbus|OH|Pending
32|07/07/2025|Logan Parker|911 Carrera GTS|2022|119900,00|13600|Cash|Indianapolis|IN|Delivered
33|22/07/2025|Grace Evans|Panamera 4 E-Hybrid|2023|109250,00|8900|Lease|Fort Worth|TX|In Transit
34|14/08/2025|Jacob Edwards|Macan T|2022|82000,00|21750|Wire Transfer|Jacksonville|FL|Delivered
35|01/09/2025|Victoria Collins|Taycan Turbo S|2025|214000,00|0|Crypto Payment|San Diego|CA|Pending Review
36|30/09/2025|Andrew Simmons|911 Carrera|2024|124500,00|4800|Credit Card|Tampa|FL|Delivered
37|18/09/2025|Chloe Bennett|Cayenne S|2023|98200,00|12200|Bank Transfer|Sacramento|CA|Pending
38|04/10/2025|Ryan-Cooper|Macan|2022|67500,00|24100|Financing|Cleveland|OH|Delivered
39|12/10/2025|Hannah Reed|Taycan|2025|116900,00|0|Wire Transfer|Milwaukee|WI|In Transit
40|29/10/2025|Dylan Parker|Panamera 4S|2024|112000,00|10|Cash|Kansas City|MO|Delivered
41|11/02/2025|Lily Coleman|718 Boxster|2021|74000,00|31000|Debit Card|Omaha|NE|Cancelled
42|16/11/2025|Nathan Hughes|911 Turbo|2024|198300,00|2400|Wire Transfer|Albuquerque|NM|Awaiting Delivery
43|18/11/2025|Zoe Foster|Cayenne Coupe|2023|103750,00|6773|Wire Transfer|Tucson|AZ|Pending Approval
44|30/11/2025|Caleb Ward|Macan GTS|2024|93600,00|5800|Financing|Fresno|CA|Shipped
45|07/12/2025|Stella Brooks|Taycan 4S|2025|129000,00|0|ACH Payment|Virginia Beach|VA|In Transit
46|22/12/2025|Owen Bryant|Panamera Turbo|2022|136000,00|18400|Credit Card|Colorado Springs|CO|Delivered
47|31/12/2025|Nora Simmons|911 GT3 RS|2024|286500,00|700|Wire Transfer|Arlington|TX|Pending
48|08/01/2026|Isaac Butler|Cayenne E-Hybrid|2023|92800,00|15000|Lease|Bakersfield|CA|Delivered
49|15/01/2026|Leah Henderson|Macan T|2022|72400,00|19750|Cash|Mesa|AZ|Awaiting Pickup
50|28/01/2026|Christian Bailey|Taycan Turbo|2025|158500,00|3200|Crypto Payment|Atlanta|GA|Delivered
51|03/02/2026|Audrey Russell|718 Cayman|2021|69900,00|27600|Bank Transfer|Long Beach|CA|Pending
52|28/02/2026|Hunter Griffin|911 Targa 4|2024|141250,00|2100|Financing|Oakland|CA|In Transit
53|19/02/2026|Scarlett Diaz|Panamera|2020|71500,00|52000|Wire Transfer|Tulsa|OK|Delivered
54|25/02/2026|Eli Jenkins|Cayenne Turbo|2023|146800,00|11300|Credit Card|Wichita|KS|Pending
55|01/03/2026|Madison Powell|Macan Electric|2025|89700,00|0|Lease|New Orleans|LA|Delivered
56|14/03/2026|Adrian Sanders|911 Carrera S|2022|104600,00|15900|Bank Transfer|Honolulu|HI|Cancelled
57|31/03/2026|Penelope Barnes|Taycan GTS|2024|142000,00|6600|Wire Transfer|Anaheim|CA|Delivered
58|08/04/2026|Nolan Fisher|Cayenne|2021|78400,00|40250|Cash|Henderson|NV|Awaiting Review
59|30/04/2026|Layla Marshall|718 Spyder RS|2025|169000,00|850|Financing|Lexington|KY|In Transit
60|21/04/2026|Gabriel Owens|911 Dakar|2024|268900,00|1400|Credit Card|Riverside|CA|Delivered
61|29/04/2026|Victoria Hart|Panamera 4|2023|101300,00|12700|Wire Transfer|Corpus Christi|TX|Pending
62|05/05/2026|Julian Stone|Macan S|2021|66750,00|29800|Cash|St. Louis|MO|Delivered
63|14/05/2026|Brooklyn Webb|Taycan Cross Turismo|2024|127900,00|7500|Lease|Pittsburgh|PA|In Transit
64|23/05/2026|Aaron Kim|Cayenne Turbo GT|2025|200000,00|1950|Wire Transfer|Cincinnati|OH|Delivered
65|02/06/2026|Claire Watson|911 Carrera Cabriolet|2023|132000,00|8800|Crypto Payment|Anchorage|AK|Pending Review
66|15/06/2026|Sebastian Brooks|718 Cayman GT4 RS|2024|176400,00|600|Credit Card|Plano|TX|Delivered
67|30/06/2026|Bella Ramirez|Panamera 4 E-Hybrid|2022|108500,00|16200|Bank Transfer|Newark|NJ|Cancelled
68|07/07/2026|Miles Peterson|Macan|2021|59000,00|36000|Financing|Greensboro|NC|Awaiting Delivery
69|20/07/2026|Skylar Rogers|Taycan Turbo S|2025|218000,00|0|Wire Transfer|Lincoln|NE|Pending
70|31/07/2026|Dominic Kelly|Cayenne S|2024|99950,00|5300|Debit Card|Jersey City|NJ|Delivered
71|08/04/2026|Lucy Howard|911 Carrera GTS|2024|121750,00|5872|Credit Card|Chandler|AZ|Delivered
72|18/08/2026|Everett Cox|718 Boxster GTS|2023|91500,00|13300|Lease|Reno|NV|Shipped
73|31/08/2026|Maya Rivera|Panamera Turbo S|2022|134000,00|20100|Wire Transfer|Buffalo|NY|In Transit
74|09/09/2026|Connor Ward|Macan GTS|2024|96800,00|0|ACH Payment|Durham|NC|Delivered
75|17/09/2026|Eliana Bell|Taycan 4S|2025|131600,00|2900|Wire Transfer|Laredo|TX|Pending Approval
76|28/09/2026|Cameron Murphy|Cayenne E-Hybrid|2023|94300,00|13100|Cash|Madison|WI|Delivered
77|06/10/2026|Ariana Cook|911 Turbo S|2025|242000,00|1100|Crypto Payment|Lubbock|TX|Awaiting Pickup
78|16/10/2026|Wesley Morgan|718 Cayman S|2022|82750,00|22500|Credit Card|Toledo|OH|Cancelled
79|29/10/2026|Naomi Peterson|Macan Electric|2026|91300,00|0|Wire Transfer|Irvine|CA|Delivered
80|03/11/2026|Jason Perry|Panamera|2021|79900,00|44800|Financing|Garland|TX|Pending
81|30/11/2026|Riley Flores|Cayenne Coupe|2024|111000,00|6700|Bank Transfer|Irving|TX|In Transit
82|11/12/2026|Hazel Long|911 Targa 4S|2023|156500,00|4200|Cash|Chesapeake|VA|Delivered
83|24/12/2026|Easton Bailey|Taycan|2025|119900,00|1250|Lease|Scottsdale|AZ|Pending
84|31/12/2026|Aurora Cooper|Macan T|2022|73200,00|18600|Wire Transfer|Norfolk|VA|Delivered
85|28/12/2026|Colton Richardson|911 GT3|2024|224000,00|3000|Wire Transfer|Boise|ID|Awaiting Delivery
86|15/01/2027|Mason Stewart|911 Carrera|2024|126900,00|7200|Credit Card|Orlando|FL|Delivered
87|29/01/2027|Harper Reed|Cayenne|2023|84500,00|21400|Bank Transfer|San Jose|CA|Pending
88|11/02/2027|Tyler-Morris|Macan S|2022|69800,00|26300|Financing|Tampa|FL|Delivered
89|28/02/2027|Natalie Brooks|Taycan 4S|2025|132700,00|0|Wire Transfer|Denver|CO|In Transit
90|05/03/2027|Brandon Parker|Panamera|2021|81000,00|42|Cash|Austin|TX|Delivered
91|18/03/2027|Lauren Foster|718 Cayman|2023|78900,00|17500|Debit Card|Seattle|WA|Cancelled
92|02/04/2027|Adam Hughes|911 Turbo S|2026|249300,00|900|Wire Transfer|Boston|MA|Awaiting Delivery
93|15/04/2027|Julia Coleman|Cayenne Coupe|2024|108750,00|5530|Wire Transfer|Phoenix|AZ|Pending Approval
94|30/04/2027|Caleb Simmons|Macan Electric|2026|92600,00|0|Financing|Chicago|IL|Shipped
95|12/05/2027|Ariana Price|Taycan Turbo|2025|164000,00|0|ACH Payment|Dallas|TX|In Transit
96|27/05/2027|Owen Rivera|Panamera 4S|2024|119000,00|13400|Credit Card|San Francisco|CA|Delivered
97|30/06/2027|Nora Bennett|911 GT3|2026|232500,00|1700|Wire Transfer|Las Vegas|NV|Pending
98|18/06/2027|Isaac Turner|Cayenne E-Hybrid|2023|96800,00|14000|Lease|Charlotte|NC|Delivered
99|03/07/2027|Leah Scott|Macan T|2022|74400,00|20750|Cash|Mesa|AZ|Awaiting Pickup
100|22/07/2027|Christian Bailey|Taycan GTS|2025|148500,00|5200|Crypto Payment|Atlanta|GA|Delivered
101|08/08/2027|Audrey Russell|718 Boxster|2021|71900,00|29600|Bank Transfer|Long Beach|CA|Pending
102|31/08/2027|Hunter Griffin|911 Targa 4|2024|143250,00|3100|Financing|Oakland|CA|In Transit
103|19/09/2027|Scarlett Diaz|Panamera Turbo|2020|137500,00|48000|Wire Transfer|Tulsa|OK|Delivered
104|25/09/2027|Eli Jenkins|Cayenne Turbo GT|2025|204800,00|3300|Credit Card|Wichita|KS|Pending
105|01/10/2027|Madison Powell|911 Dakar|2024|271700,00|1050|Lease|New Orleans|LA|Delivered
`.trim();
const rows=raw.split(/\n/).map(line=>{const [id,date,name,model,year,price,mileage,pay,city,state,status]=line.split('|');return {id:+id,date,name,nameClean:name.trim().replace(/\s+/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),model:model.trim().replace(/\s+/g,' '),year:+year,price:+price.replace('.','').replace(',','.'),mileage:+mileage,pay:pay.trim(),city:city.trim(),state:state.trim().toUpperCase(),status:status.trim(),dateInfo:parseDate(date)}});
function parseDate(s){
  if(!/^\d{2}\/\d{2}\/\d{4}$/.test(s)) return {iso:null,label:'Formato inválido',kind:'invalid'};
  let [a,b,y]=s.split('/').map(Number),d,m,mode='DD/MM/AAAA';
  if(b>12){m=a;d=b;mode='MM/DD/AAAA (confirmar origem)';}
  else if(a>12){d=a;m=b;}
  else {
    d=a;m=b;
    const dt1=new Date(Date.UTC(y,m-1,d));
    const valid1=dt1.getUTCFullYear()===y&&dt1.getUTCMonth()===m-1&&dt1.getUTCDate()===d;
    const dt2=new Date(Date.UTC(y,a-1,b));
    const valid2=dt2.getUTCFullYear()===y&&dt2.getUTCMonth()===a-1&&dt2.getUTCDate()===b;
    if(valid1 && valid2 && a!==b) return {iso:null,label:'Data ambígua — confirmar',kind:'ambiguous'};
    if(!valid1 && valid2){return {iso:null,label:'Data ambígua — confirmar',kind:'ambiguous'};}
  }
  const dt=new Date(Date.UTC(y,m-1,d));
  if(dt.getUTCFullYear()!==y||dt.getUTCMonth()!==m-1||dt.getUTCDate()!==d) return {iso:null,label:'Data inválida — confirmar',kind:'invalid'};
  return {iso:dt.toISOString().slice(0,10),label:mode,kind:mode.startsWith('MM/')?'inferred-us':'valid'};
}
const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:2});const countBy=(arr,fn)=>arr.reduce((o,x)=>(o[fn(x)]=(o[fn(x)]||0)+1,o),{});const sumBy=(arr,key)=>arr.reduce((o,x)=>(o[x[key]]=(o[x[key]]||0)+x.price,o),{});const $=id=>document.getElementById(id);
function setTheme(t){document.body.classList.toggle('powerbi',t==='powerbi');$('porscheBtn').classList.toggle('active',t==='porsche');$('powerBtn').classList.toggle('active',t==='powerbi')}
function fillSelect(id,vals){const el=$(id),old=el.value;el.innerHTML='<option value="">'+({model:'Todos os modelos',year:'Todos os anos',city:'Todas as cidades',pay:'Todas as formas'}[id])+'</option>'+vals.map(v=>`<option>${esc(v)}</option>`).join('');if(vals.includes(old))el.value=old}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function filtered(){return rows.filter(r=>(!$('model').value||r.model===$('model').value)&&(!$('year').value||String(r.year)===$('year').value)&&(!$('city').value||r.city===$('city').value)&&(!$('pay').value||r.pay===$('pay').value))}
function bars(id,items,format=(v)=>v){const el=$(id);if(!items.length){el.innerHTML='<div class="empty">Sem registros neste filtro.</div>';return}const max=Math.max(...items.map(x=>x.value),1);el.innerHTML=items.map(x=>`<div class="barrow"><span class="barlabel" title="${esc(x.label)}">${esc(x.label)}</span><div class="track"><div class="fill" style="width:${Math.max(1,x.value/max*100)}%"></div></div><span class="barval">${esc(format(x.value))}</span></div>`).join('')}
function topCount(arr,key,n=8){return Object.entries(countBy(arr,r=>r[key])).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value||a.label.localeCompare(b.label)).slice(0,n)}
function topSum(arr,key,n=8){return Object.entries(sumBy(arr,key)).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value).slice(0,n)}
function render(){const a=filtered(),sum=a.reduce((s,r)=>s+r.price,0),avg=a.length?sum/a.length:0,models=new Set(a.map(r=>r.model)).size;const cancelled=a.filter(r=>r.status.toLowerCase()==='cancelled').length;$('filterSummary').textContent=`${a.length} de ${rows.length} registros · ${new Set(a.map(r=>r.city)).size} cidades no recorte`;
$('kpis').innerHTML=[['Registros filtrados',a.length,'Linhas incluídas no recorte'],['Valor registrado',brl(sum),'Soma dos valores informados'],['Valor médio registrado',brl(avg),'Média por registro filtrado'],['Modelos distintos',models,'Modelos presentes no recorte']].map(x=>`<article class="kpi"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="foot">${x[2]}</div></article>`).join('');
bars('modelsChart',topCount(a,'model'),v=>v+' reg.');bars('valueChart',topSum(a,'model'),v=>brl(v));bars('statusChart',topCount(a,'status',20),v=>v+' reg.');bars('statusValueChart',topSum(a,'status',20),v=>brl(v));const statusRows=Object.entries(a.reduce((o,r)=>{o[r.status]??={count:0,value:0};o[r.status].count++;o[r.status].value+=r.price;return o},{})).map(([status,v])=>({status,...v,pct:a.length?100*v.count/a.length:0})).sort((x,y)=>y.count-x.count||x.status.localeCompare(y.status));$('statusTable').innerHTML=statusRows.map(x=>`<tr><td>${esc(x.status)}</td><td>${x.count}</td><td>${brl(x.value)}</td><td>${x.pct.toLocaleString('pt-BR',{maximumFractionDigits:1})}%</td></tr>`).join('');const pays=Object.entries(a.reduce((o,r)=>{o[r.pay]??={n:0,value:0};o[r.pay].n++;o[r.pay].value+=r.price;return o},{})).map(([label,v])=>({label,value:v.value,n:v.n})).sort((x,y)=>y.value-x.value).slice(0,8);bars('payChart',pays,v=>brl(v));bars('stateChart',topCount(a,'state',10),v=>v+' reg.');bars('yearChart',topCount(a,'year',10).sort((x,y)=>x.label-y.label),v=>v+' reg.');
const cities={};a.forEach(r=>{const k=r.city+'|'+r.state;cities[k]??={city:r.city,state:r.state,models:{}};cities[k].models[r.model]=(cities[k].models[r.model]||0)+1});const ct=Object.values(cities).map(c=>({...c,leader:Object.entries(c.models).sort((x,y)=>y[1]-x[1])[0]})).sort((x,y)=>Object.values(y.models).reduce((p,n)=>p+n,0)-Object.values(x.models).reduce((p,n)=>p+n,0));$('cityTable').innerHTML=ct.map(c=>`<tr><td>${esc(c.city)}</td><td>${esc(c.state)}</td><td>${esc(c.leader[0])}</td><td>${c.leader[1]}</td></tr>`).join('');
$('dataTable').innerHTML=a.map(r=>`<tr><td>${r.id}</td><td>${esc(r.date)}</td><td>${esc(r.nameClean)}</td><td>${esc(r.model)}</td><td>${r.year}</td><td>${brl(r.price)}</td><td>${r.mileage.toLocaleString('pt-BR')}</td><td>${esc(r.pay)}</td><td>${esc(r.city)}</td><td>${esc(r.state)}</td><td><span class="status">${esc(r.status)}</span></td><td class="${r.dateInfo.iso?'':'warn'}">${esc(r.dateInfo.label)}</td></tr>`).join('');const invalid=rows.filter(r=>r.dateInfo.kind==='invalid');const ambiguous=rows.filter(r=>r.dateInfo.kind==='ambiguous');const inferred=rows.filter(r=>r.dateInfo.kind==='inferred-us');const future=rows.filter(r=>r.dateInfo.iso&&r.dateInfo.iso>'2026-10-18');const statuses=Object.entries(countBy(a,r=>r.status)).sort((x,y)=>y[1]-x[1]);$('qualityNote').innerHTML=`<strong>Revisão de qualidade:</strong> ${rows.length} registros mantidos; preços interpretados em BRL conforme informado; nenhum registro removido e nenhum status agrupado. <strong>${invalid.length} datas inválidas</strong> e <strong>${ambiguous.length} datas ambíguas</strong> permanecem sinalizadas. Quatro datas originalmente impossíveis foram substituídas por datas fictícias válidas próximas ao período informado (IDs 6, 9, 24 e 81). Três datas que estavam em formato americano foram normalizadas para DD/MM/AAAA (IDs 50, 91 e 100). Datas cuja interpretação ainda é ambígua não foram alteradas. ${future.length} registros têm datas posteriores a 18/10/2026 e foram mantidos por se tratar de uma base fictícia. Os valores são somados e separados por status; a soma não deve ser interpretada como faturamento realizado sem uma regra adicional. Status presentes no recorte: ${statuses.map(([k,v])=>`${esc(k)} (${v})`).join(', ')}.`;
}
['model','year','city','pay'].forEach(id=>$(id).addEventListener('change',render));function resetFilters(){['model','year','city','pay'].forEach(id=>$(id).value='');render()}
fillSelect('model',[...new Set(rows.map(r=>r.model))].sort());fillSelect('year',[...new Set(rows.map(r=>String(r.year)))].sort());fillSelect('city',[...new Set(rows.map(r=>r.city))].sort());fillSelect('pay',[...new Set(rows.map(r=>r.pay))].sort());render();
