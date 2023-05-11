'use strict';

//global//

let cookieSection = document.getElementById('cookie-profiles');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const cityArray = [];

function renderAllCities() {
  for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}


// HEADER ROW FUNCTION//
function headerFunction() {
  let table = document.createElement('table');
  cookieSection.appendChild(table);

  let headRow = document.createElement('tr');
  table.appendChild(headRow);

  let cell = document.createElement('th');
  headRow.appendChild(cell);

  for (let i = 0; i < hours.length; i++) {
    let headCell = document.createElement('th');
    headCell.textContent = hours[i];
    headRow.appendChild(headCell);
  }

  let totalHeaderCell = document.createElement('th');
  totalHeaderCell.textContent = 'Daily Location Total';
  headRow.appendChild(totalHeaderCell);
}


// FOOTER ROW FUNCTION //
function footerFunction() {
  let table = document.querySelector('table');
  let footRow = document.createElement('tr');
  table.appendChild(footRow);

  let cell = document.createElement('td');
  cell.textContent = 'Totals';
  footRow.appendChild(cell);

  let perHourTotals = []; 

  ////* class *////
  for (let i = 0; i < hours.length; i++) {
    let total = 0;

    for (let j = 0; j < cityArray.length; j++) {
      total += cityArray[j].randomCookie[i];
    }

    perHourTotals.push(total);

    let cell = document.createElement('td');
    cell.textContent = total;
    footRow.appendChild(cell);
  }

  let total = 0;
  for (let i = 0; i < perHourTotals.length; i++) {
    total += perHourTotals[i];
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = total;
  footRow.appendChild(totalCell);
}



// **** CONSTRUCTOR FUNCTION ****
function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCookie = [];
  this.totalCookies = 0;
}

// **** PROTOTYPE METHODS ****
Store.prototype.randomGen = function(maxCust, minCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
};


// **** PROTOTYPE METHODS ****
Store.prototype.render = function() {
  let chRow = document.createElement('tr');

  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  chRow.appendChild(cityName);

  for (let i = 0; i < hours.length; i++) {
    let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
    let cookiesSold = Math.floor(total);
    this.randomCookie.push(cookiesSold);
    this.totalCookies += cookiesSold;

    let cookiesSoldPerHour = document.createElement('td');
    cookiesSoldPerHour.textContent = cookiesSold;
    chRow.appendChild(cookiesSoldPerHour);
  }

  let totalChart = document.createElement('td');
  totalChart.textContent = this.totalCookies;
  chRow.appendChild(totalChart);

  let table = document.querySelector('table');
  table.appendChild(chRow);

}



// *** EXECUTABLE (executes on page load) CODE ***
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

cityArray.push(seattle, tokyo, dubai, paris, lima);

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

headerFunction();
renderAllCities();
footerFunction();


