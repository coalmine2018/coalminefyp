var smoStatus = document.getElementById('smoStatus')
var oxyStatus = document.getElementById('oxyStatus')
var tempStatus = document.getElementById('tempStatus')
var humiStatus = document.getElementById('humiStatus')
var methStatus = document.getElementById('methStatus')
var carbonStatus = document.getElementById('carbonStatus')
var time = document.getElementById('timeStatus')
var time2 = document.getElementById('timeStatus2')
var smoke = [], times = [], tempe = [], hum = [], ch4 = [], o2 = [], co = [];
var i = 0, j = 0
firebase.database().ref('DHT11').on('value', function (dat) {
  if (j < 10) {
    var today = new Date()
    var today = new Date();
    var smo = dat.val().Smoke;
    var temp = dat.val().Temperature;
    var humi = dat.val().Humidity;
    var oxy = dat.val().Oxygen;
    var meth = dat.val().Methane;
    var car = dat.val().Carbon;
    smoke[j] = smo + "<br>"
    times[j] = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "<br>";
    tempe[j] = temp + "<br>"
    hum[j] = humi + "<br>"
    ch4[j] = meth + "<br>"
    o2[j] = oxy + "<br>"
    co[j] = car + "<br>"
    console.log(smoke)
    smoStatus.innerHTML = smoke.join("\n") + "<br>";
    time.innerHTML = times.join("\n") + "<br>";
    time2.innerHTML = times.join("\n") + "<br>";
    tempStatus.innerHTML = tempe.join("\n") + "<br>";
    humiStatus.innerHTML = hum.join("\n") + "<br>";
    oxyStatus.innerHTML = o2.join("\n") + "<br>";
    methStatus.innerHTML = ch4.join("\n") + "<br>";
    carbonStatus.innerHTML = co.join("\n") + "<br>";
    j++
    console.log(j)
  }
  else {
    j = 0
  }
})
