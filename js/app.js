'use strict';

let cookieSection = document.getElementById('cookie-profiles');
// console.log(cookieSection);
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//console.log(hours);



// ////////////////////* seattle  *//////////////////////

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  randomCookie: [],
  randomGen: function(maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },

  render: function() {
    let buyCookies = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
      this.randomCookie.push(Math.floor(total));
    }
    for (let i = 0; i < this.randomCookie.length; i++) {
      buyCookies += this.randomCookie[i];
    }
    this.randomCookie.push(buyCookies);

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1]; 
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);
  },
};

// console.log(seattle);


//////////////////////* tokyo  *//////////////////////
const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  randomCookie: [],
  randomGen: function(maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },


  render: function() {
    let buyCookies = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
      this.randomCookie.push(Math.floor(total));
    }
    for (let i = 0; i < this.randomCookie.length; i++) {
      buyCookies += this.randomCookie[i];
    }
    this.randomCookie.push(buyCookies);

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1]; 
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);
  },

};


// ////////////////////* dubai  *//////////////////////
const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  randomCookie: [],
  randomGen: function(maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },


  render: function() {
    let buyCookies = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
      this.randomCookie.push(Math.floor(total));
    }
    for (let i = 0; i < this.randomCookie.length; i++) {
      buyCookies += this.randomCookie[i];
    }
    this.randomCookie.push(buyCookies);

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1]; 
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);
  },
};


// ////////////////////* paris  *//////////////////////
const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  randomCookie: [],
  randomGen: function(maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },


  render: function() {
    let buyCookies = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
      this.randomCookie.push(Math.floor(total));
    }
    for (let i = 0; i < this.randomCookie.length; i++) {
      buyCookies += this.randomCookie[i];
    }
    this.randomCookie.push(buyCookies);

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1]; 
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);
  },
};


// ////////////////////* lima  *//////////////////////
const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  randomCookie: [],
  randomGen: function(maxCust, minCust) {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  },


  render: function() {
    let buyCookies = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
      this.randomCookie.push(Math.floor(total));
    }
    for (let i = 0; i < this.randomCookie.length; i++) {
      buyCookies += this.randomCookie[i];
    }
    this.randomCookie.push(buyCookies);

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}: ${this.randomCookie[i]}`;
      cookieUL.appendChild(hoursLI);
    }

    let cookieTotal = document.createElement('li');
    let cookieTotalTwo = this.randomCookie[this.randomCookie.length - 1]; 
    cookieTotal.innerText = `Total: ${cookieTotalTwo}`;
    cookieUL.appendChild(cookieTotal);
  },
};


//Seattle
seattle.render();
console.log(seattle.randomGen);
//tokyo
tokyo.render();
console.log(tokyo.randomGen);
//dubai
dubai.render();
console.log(dubai.randomGen);
//paris
paris.render();
console.log(paris.randomGen);
//lima
lima.render();
console.log(lima.randomGen);





