let dte = new Date(); // Creates a new Date object with the current date and time.

console.log(dte.getDate());        // Outputs the current day of the month (1-31), e.g., 5.
console.log(dte.getHours());       // Outputs the current hour (0-23), e.g., 14 for 2 PM.
console.log(dte.getFullYear());    // Outputs the full year, e.g., 2024.
console.log(dte.getTime());        // Outputs the time in milliseconds since January 1, 1970, e.g., 1715787243000.
console.log(dte.getUTCDate());     // Outputs the current UTC day of the month, e.g., 5.
console.log(dte.toLocaleDateString()); // Outputs the current date in the local format, e.g., "10/5/2024".
console.log(dte.toISOString());    // Outputs the date in ISO 8601 format, e.g., "2024-10-05T11:30:00.000Z".
console.log(dte.toJSON());         // Outputs the ISO date string, same as `toISOString()`, e.g., "2024-10-05T11:30:00.000Z".
console.log(dte.toLocaleString()); // Outputs the date and time in local format, e.g., "10/5/2024, 1:30:00 PM".
console.log(dte.toLocaleTimeString()); // Outputs the time in local format, e.g., "1:30:00 PM".

let utcd = new Date("2031-11-23"); // Creates a new Date object set to November 23, 2031.
console.log(utcd.toLocaleString()); // Outputs the specific date and time in local format, e.g., "11/23/2031, 12:00:00 AM".

let timestamp = Date.now(); // Gets the current timestamp (milliseconds since January 1, 1970).
console.log(timestamp);     // Outputs the current timestamp in milliseconds, e.g., 1715787243000.
console.log(utcd.getTime()); // Outputs the timestamp for November 23, 2031, e.g., 1948108800000.

console.log(Math.floor(Date.now() / 1000)); // Outputs the current timestamp in seconds (Unix time), e.g., 1715787243.

let newDate = new Date(); // Creates a new Date object with the current date and time.
console.log(newDate);     // Outputs the current date object, e.g., "2024-10-05T11:30:00.000Z".
console.log(newDate.getMonth() + 1); // Outputs the current month (1-12), e.g., 10 (October).
console.log(newDate.getDay() + 1);   // Outputs the day of the week (1-7), e.g., 6 for Saturday (since 0 is Sunday).
