// Set Eid date (example: 31 March 2026)
// const eidDate = new Date("March 20, 2026 00:00:00").getTime();

// setInterval(() => {
//   const now = new Date().getTime();
//   let diff = eidDate - now;

//   if (diff < 0) return;

//   const seconds = Math.floor((diff / 1000) % 60);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

//   const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const months = Math.floor(totalDays / 30);
//   const days = totalDays % 30;

//   document.getElementById("months").innerText = months;
//   document.getElementById("days").innerText = days;
//   document.getElementById("hours").innerText = hours;
//   document.getElementById("minutes").innerText = minutes;
//   document.getElementById("seconds").innerText = seconds;
// }, 1000);

let eidDate = new Date("March 20, 2026 18:20:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = eidDate - now;
    let day = document.getElementById("days");
    let hour = document.getElementById("hours");
    let minute = document.getElementById("minutes");
    let second = document.getElementById("seconds");

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));

    let h = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    let m = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    let s = Math.floor(
        (diff / 1000) % 60
    );






    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
})