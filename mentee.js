let menu = document.querySelector("#men");
menu.addEventListener("click", drop);
let dropmenu = document.querySelector("#drop");
let cl = document.querySelectorAll(".close");
let dropli = dropmenu.getElementsByTagName("li");
let clicked = 0;
let nav1 = 0;
let home = document.querySelectorAll(".hom");
let nav = document.querySelector(".navbar");
let au = document.getElementById("about");
let ju = document.querySelectorAll(".ju");
let join = document.getElementById("joinu");
let pp = document.querySelectorAll(".pp");
let pivp = document.getElementById("pivp");
let web = document.getElementById("web");
home[0].addEventListener("click", () => {
  window.location.reload();
});
home[1].addEventListener("click", () => {
  window.location.reload();
});
home[2].addEventListener("click", () => {
  window.location.reload();
});
let about = document.querySelectorAll(".au");
about[0].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  au.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
about[1].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  au.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
ju[0].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  join.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
ju[1].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  join.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
pp[0].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  pivp.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
pp[1].addEventListener("click", () => {
  nav.style.display = "none";
  wbod.style.display = "none";
  pivp.style.display = "block";
  web.style.display = "none";
  gallery1.style.display = "none";
  gallery2.style.display = "none";
});
cl[0].addEventListener("click", () => {
  window.location.reload();
});
cl[1].addEventListener("click", () => {
  window.location.reload();
});
cl[2].addEventListener("click", () => {
  window.location.reload();
});
function drop() {
  try {
    if (clicked == 0) {
      dropmenu.style.boxShadow = "inset 0.5px 0px 4px 0px rgba(128, 128, 128, 0.61)";
      for (let i = 1; i < dropli.length; i++) {
        dropli[i].style.display = "block";
      }
      dropmenu.style.backgroundColor = "#DDE6ED";
      clicked = 1;
    } else {
      dropmenu.style.boxShadow = "none";
      for (let i = 1; i < dropli.length; i++) {
        dropli[i].style.display = "none";
      }
      clicked = 0;
      dropmenu.style.backgroundColor = "transparent";
    }
  } catch (error) {
    console.log(error);
  }
}
// weather body
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let wbod = document.querySelector("#wbod");
let ws = document.querySelector("#ws");
let sear = document.querySelector("#sear");
let loca = document.querySelector("#loca");
let temp = document.querySelector("#temp");
let wimp = document.querySelector("#wimg");
let cli = document.querySelectorAll(".cli");
let locate = document.querySelectorAll(".locate");
let data;
let dt;
let city;
//used jquery to feth api json
function fetchinfo() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/weather?city=" + city,
    headers: { "X-Api-Key": "Pxcx8w+ELk3HgAkfi2fsbw==oLHlH1Q166WtgZx7" },
    contentType: "application/json",
    success: function (response) {
      data = response;
      console.log(data);
      changedsiplay();
    },
    error: function ajaxError(jqXHR) {
      locate[0].textContent = "Select Other Location";
      locate[1].textContent = "Select Other Location";
      wimp.src = "Weather/clear.png";
      temp.textContent = "0°c";
      cli[0].textContent = "N/A";
      cli[1].textContent = "N/A";
      humidity.textContent = "N/A\r\n(Humidity)";
  wind.textContent = "N/A\r\n(Wind Speed)";
    },
  });
}
function changedsiplay() {
  dt = data.temp;
  locate[0].textContent = city;
  locate[1].textContent = city;
  humidity.textContent = data.humidity + "\r\n(Humidity)";
  wind.textContent = data.wind_speed + " km/h\r\n(Wind Speed)";
  if (data.cloud_pct <= 40) {
    wimp.src = "Weather/clear.png";
    cli[0].textContent = "Clear";
    cli[1].textContent = "Clear";
  } else if (data.cloud_pct > 40 && data.cloud_pct <= 60) {
    wimp.src = "Weather/cloud.png";
    cli[0].textContent = "Cloudy";
    cli[1].textContent = "Cloudy";
  } else if (data.cloud_pct > 60 && data.cloud_pct <= 90) {
    wimp.src = "Weather/drizzle.png";
    cli[0].textContent = "Drizzle";
    cli[1].textContent = "Drizzle";
  } else if (data.cloud_pct > 90 && data.cloud_pct <= 100) {
    wimp.src = "Weather/rain.png";
    cli[0].textContent = "Rain";
    cli[1].textContent = "Rain";
  }
  temp.textContent = dt + "°c";
}
loca.addEventListener("change", () => {
  ws.value = loca.value;
});
sear.addEventListener("click", () => {
  locate[0].textContent = "Loading...";
  locate[1].textContent = "Loading...";
  if (ws.value == "" || ws.value == "null") {
    setTimeout(() => {
      locate[0].textContent = "Select Location";
      locate[1].textContent = "Select Location";
    }, 1000);
    wimp.src = "Weather/clear.png";
    temp.textContent = "0°c";
    cli[0].textContent = "N/A";
    cli[1].textContent = "N/A";
    humidity.textContent = "N/A\r\n(Humidity)";
    wind.textContent = "N/A\r\n(Wind Speed)";
  } else {
    city = ws.value;
    fetchinfo(city);
  }
});
// Photo gallery 1'
let gallery1=document.querySelector("#gallery");
let photo = document.querySelectorAll(".photo");
let photochange = setInterval(photofunc1, 5000);
let pcount1 = 2;
let pflag1 = 1;
photo[0].style.backgroundImage = `url("Andhra Pradesh/1.jpg")`;
function photofunc1() {
  console.log(pcount1 + "1");
  if (pflag1 == 1 && pcount1 < 11) pcount1 += 1;
  if (pflag1 == 1 && pcount1 == 11) pcount1 = 1;
  pflag1 = 0;
  photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
  if (pcount1 >= 11) {
    pcount1 = 1;
  } else {
    pcount1 += 1;
  }
}
let pbut = document.querySelectorAll(".pbut");
pbut[0].addEventListener("click", () => {
  clearInterval(photochange);
  if (pflag1 == 0) {
    pcount1 -= 1;
  }
  if (pcount1 == 0) {
    pcount1 = 11;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    pflag1 = 1;
    photochange = setInterval(photofunc1, 5000);
  } else if (pcount1 == 1) {
    pcount1 = 11;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    pflag1 = 1;
    photochange = setInterval(photofunc1, 5000);
  } else {
    pcount1 -= 1;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    pflag1 = 1;
    photochange = setInterval(photofunc1, 5000);
  }
  console.log(pcount1 + "2");
});
pbut[1].addEventListener("click", () => {
  clearInterval(photochange);
  if (pflag1 == 0) pcount1 -= 1;
  console.log(pcount1 + "3pre");
  if (pcount1 == 0) {
    pcount1 = 2;
    pflag1 = 1;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    photochange = setInterval(photofunc1, 5000);
  } else if (pcount1 >= 11) {
    pcount1 = 1;
    pflag1 = 1;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    photochange = setInterval(photofunc1, 5000);
  } else {
    pcount1 += 1;
    pflag1 = 1;
    photo[0].style.backgroundImage = `url("Andhra Pradesh/${pcount1}.jpg")`;
    photochange = setInterval(photofunc1, 5000);
  }
  console.log(pcount1 + "3");
});
// gallery2
let gallery2=document.querySelector("#gallery2");
let scenery = document.querySelector("#scenery");
let state="Andhra Pradesh";
let photochange2 = setInterval(photofunc2, 5000);
let pcount2 = 2;
let pflag2 = 1;
function photofunc2() {
  
  console.log(pcount2 + "1");
  if (pflag2 == 1 && pcount2 < 10) pcount2 += 1;
  if (pflag2 == 1 && pcount2 == 10) pcount2 = 1;
  pflag2 = 0;
  photo[1].style.backgroundImage = `url("Andhra Pradesh/${pcount2}.jpg")`;
  if (pcount2 >= 10) {
    pcount2 = 1;
  } else {
    pcount2 += 1;
  }
}
// scenery.addEventListener("change",()=>
// {
//   state=scenery.value;
// });
pbut[2].addEventListener("click", () => {
  clearInterval(photochange2);
  if (pflag2 == 0) {
    pcount2 -= 1;
  }
  if (pcount2 == 0) {
    pcount2 = 10;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    pflag2 = 1;
    photochange2 = setInterval(photofunc2, 5000);
  } else if (pcount2 == 1) {
    pcount2 = 10;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    pflag2 = 1;
    photochange2 = setInterval(photofunc2, 5000);
  } else {
    pcount2 -= 1;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    pflag2 = 1;
    photochange2 = setInterval(photofunc2, 5000);
  }
  console.log(pcount2 + "2");
});
pbut[3].addEventListener("click", () => {
  clearInterval(photochange2);
  if (pflag2 == 0) pcount2 -= 1;
  console.log(pcount2 + "3pre");
  if (pcount2 == 0) {
    pcount2 = 2;
    pflag2 = 1;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    photochange2 = setInterval(photofunc2, 5000);
  } else if (pcount2 >= 10) {
    pcount2 = 1;
    pflag2 = 1;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    photochange2 = setInterval(photofunc2, 5000);
  } else {
    pcount2 += 1;
    pflag2 = 1;
    photo[1].style.backgroundImage = `url("${state}/${pcount2}.jpg")`;
    photochange2 = setInterval(photofunc2, 5000);
  }
  console.log(pcount2 + "3");
});

