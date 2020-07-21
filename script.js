

const apiKey = "vKTQqejDZdeuzBrhumhZZDcMOiwpXvTe4SQsz2DT"

async function  getData(){

    const rawData = await fetch("https://api.nasa.gov/insight_weather/?api_key="+apiKey+"&feedtype=json&ver=1.0", {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await rawData.json();

    var r = Object.values(data.sol_keys);
    var recent = r[r.length-1];
    document.querySelector(".solDay").innerHTML = recent;
    document.querySelector(".high").innerHTML = data[recent].AT.mx;
    document.querySelector(".low").innerHTML = data[recent].AT.mn;
    document.querySelector(".speed").innerHTML = data[recent].HWS.av;
    // console.log(solData);
    // console.log(data[recent].AT.mn);


}

getData();
