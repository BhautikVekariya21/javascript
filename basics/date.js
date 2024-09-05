let dte = new Date();
console.log(dte.getDate());
console.log(dte.getHours());
console.log(dte.getFullYear());
console.log(dte.getTime());
console.log(dte.getUTCDate());
console.log(dte.toLocaleDateString());
console.log(dte.toISOString());
console.log(dte.toJSON());
console.log(dte.toLocaleString());
console.log(dte.toLocaleTimeString());

let utcd = new Date("2031-11-23");
console.log(utcd.toLocaleString());

let timestamp = Date.now();
console.log(timestamp);
console.log(utcd.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()+1);