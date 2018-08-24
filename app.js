class Cat {
  constructor(name, imgURL) {
    this.name = name;

    this.imgURL = imgURL;

    this.count = 0;

    this.divHTML = `<div id="${this.name}" class="${this.name} cat-page"><div>`;

    this.asideLiHTML = `<li class="${this.name}"><a href="#${this.name}">${this.name}</a></li>`;

    this.nameHTML = `<h2 class="${this.name}">${this.name}</h2>`;

    this.imgHTML = `<img class="${this.name}" src="${this.imgURL}" alt="a picture of ${this.name}">`;

    this.clickCounterHTML = `<div>
      <span>Clicks: </span>
      <span class="${this.name} counter">${this.count}</span>
    </div>`;
  }

  createDiv() {
    document.querySelector('main').innerHTML += this.divHTML;
  }

  createAside() {
    document.querySelector('ul.available-cats').innerHTML += this.asideLiHTML;
  }

  createName() {
    document.querySelector(`div.${this.name}`).innerHTML += this.nameHTML;
  }

  createImg() {
    document.querySelector(`div.${this.name}`).innerHTML += this.imgHTML;
  }

  createClickCounterHTMl() {
    document.querySelector(`div.${this.name}`).innerHTML += this.clickCounterHTML;
  }

  clickCounter() {
    this.count++;
    document.querySelector(`span.${this.name}`).innerText = this.count;
  }
}

// if expanding to same name instances of cats remove this.name from id class declarations in Cat class
let allCats = [];

const cat1 = new Cat("Otto", "images/otto.jpg");
const cat2 = new Cat("Niko", "images/niko.jpg");
const cat3 = new Cat("Derp", "images/derp.jpg");
const cat4 = new Cat("Misty", "images/misty.jpg");
const cat5 = new Cat("Dirtbags", "images/dirtbags.jpg")

allCats.push(cat1, cat2, cat3, cat4, cat5);

// insert HTML for Cat data
for (let cat of allCats) {
  cat.createDiv();
  cat.createAside();
  cat.createName();
  cat.createImg();
  cat.createClickCounterHTMl();
}

// unique counter on each picture
for (let cat of allCats) {
  cat.img = document.querySelector(`img.${cat.name}`);
  cat.img.addEventListener('click', function() {
    cat.clickCounter();
  });
}

// single uiversal counter for whicever cat is showing
// will need way to ignore hidden cat elements
// let count =  document.querySelector('span.counter').innerText;
// document.querySelector(`img`).addEventListener('click', function() {
//   count++;
//   document.querySelector('span.counter').innerText = count;
// });
