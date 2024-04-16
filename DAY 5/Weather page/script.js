function weatherAPI(){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=XLWWFJLF6SJ7542HQXTK7GYNT')
    .then(res => res.json())
    .then((res) =>{
       renderUI(res)
    })
}

weatherAPI()

const root=document.getElementById('root')

function renderUI(res) {
  //  console.log(res);
    const date =res.days
    console.log(date)
    const div = document.createElement("div");
    const table = document.createElement('table');
    const tr = document.createElement('tr');


    const th1 = document.createElement('th');
    th1.innerText = 'datetime';
    tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerText = 'conditions';
    tr.appendChild(th2);
    const th3 = document.createElement('th');
    th3.innerText = 'description';
    tr.appendChild(th3);
    const th4 = document.createElement('th');
    th4.innerText = 'Humidity';
    tr.appendChild(th4);
    const th5 = document.createElement('th');
    th5.innerText = 'temperature';
    tr.appendChild(th5);
 
    for(let i=0;i<date.length;i++){
        const data=date[i]
        const tr2 = document.createElement('tr');
        const d1 = document.createElement('td');
        d1.innerText = data.datetime
        tr.appendChild(d1);
        const d2 = document.createElement('td');
        d2.innerText = data.conditions
        tr.appendChild(d2);
        const d3 = document.createElement('td');
        d3.innerText = data.description
        tr.appendChild(d3);
        const d4 = document.createElement('td');
        d4.innerText = data.humidity
        tr.appendChild(d4);
        const d5 = document.createElement('td');
        d5.innerText = data.temp        
        tr.appendChild(d5);
    
        table.appendChild(tr2);
        table.appendChild(tr);
        div.appendChild(table);
        root.appendChild(div);
    }
   
}