"use strict";
document.addEventListener("DOMContentLoaded", start);

/* Variables */

const maxNumberCustomers = 35;
const maxNumberQueues = 40;
const dest = document.querySelector("#barchart");
let customerArray = new Array(maxNumberQueues);

/* Helping functions */

function getNumberOfCustomers() {
  return Math.floor(Math.random() * maxNumberCustomers + 1);
}

/* The rest */

function start() {
  dest.style.height = maxNumberCustomers * 5 + 20 + "px";
  dest.style.width = maxNumberQueues * 16 + "px";
  addQueue();
}

function addQueue() {
  dest.innerHTML = "";
  const queueSize = getNumberOfCustomers();

  customerArray.push(queueSize);
  customerArray.shift();

  console.log(customerArray);

  customerArray.forEach(queue => {
    let height = queue * 5;
    let template = `
        <li style="height: ${height}px"></li>
        `;
    dest.insertAdjacentHTML("beforeend", template);
  });

  setTimeout(addQueue, 1000);
}
