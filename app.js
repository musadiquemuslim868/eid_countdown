

let eidDate = new Date("March 20, 2026 18:20:00").getTime();
setInterval(() => {
    let day = document.getElementById("days");
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");

    let now = new Date().getTime();
    let diff = eidDate - now
    console.log(diff);

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h =Math.floor(diff/(1000*60*60)%24);
    let m = Math.floor((diff / (1000 * 60)) % 60);
    let s = Math.floor((diff / 1000) % 60);


    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

})