

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
    document.querySelector(".high").innerHTML = Math.round(data[recent].AT.mx);
    document.querySelector(".low").innerHTML = Math.round(data[recent].AT.mn);
    document.querySelector(".speed").innerHTML = Math.round(data[recent].HWS.av*(18/5));
    var date = Date(data[recent].First_UTC);
    console.log(date);
    document.querySelector(".earth-date").innerHTML = changeDate(date);

    function changeDate(date){
    let currentDate = new Date(date);
    var fd = currentDate.toLocaleDateString(
      undefined, {month: 'long', day: 'numeric'}
    );
    return fd;
  }
    console.log(changeDate(date));




    // console.log(solData);
    // console.log(data[recent].AT.mn);


}

getData();
