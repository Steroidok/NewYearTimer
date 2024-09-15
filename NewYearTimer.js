const now = new Date();
const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

const duration = newYear - now;

const days = Math.floor(duration / (1000 * 60 * 60 * 24));
const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((duration / (1000 * 60)) % 60);
const seconds = Math.floor((duration / 1000) % 60);

console.log("New Year soon:");
console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);
