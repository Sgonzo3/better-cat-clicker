// MODEL
let allCats = [];

class Cat {
  constructor(name, imgURL, count) {

    this.name = name;

// fix for repeated name bug?
// Warns against use of repeated Cat name
    // for (let cat of allCats) {
    //     if (cat.name === this.name) {
    //       alert(`${this.name} already exist, submit a unique name.`);
    //       // popup admin menu for that cat?
    //     }
    //   }

    this.imgURL = imgURL;

    this.count = count;

    this.divHTML = `<div id="${this.name}" class="${this.name} cat-page"><div>`;

    this.asideLiHTML = `<li class="${this.name}"><a href="#${this.name}">${this.name}</a></li>`;

    this.nameHTML = `<h2 class="${this.name}">${this.name}</h2>`;

    this.imgHTML = `<img class="${this.name}" src="${this.imgURL}" alt="a picture of ${this.name}">`;

    this.clickCounterHTML = `<div>
      <span class="${this.name} counter">${this.count}</span>
    </div>`;

    this.adminMenuHTML =
      `<section class="admin-menu ${this.name}">
          <button class="admin-button ${this.name}">Admin</button>
          <form action="" class="${this.name} hidden">
            <input type="text" name="Cat Name" value="${this.name}">
            <input type="text" name="Cat Image Source" value="${this.imgURL}">
            <input type="text" name="Clicks Count" value="${this.count}" class="${this.name} counter">
            <input type="button" name="cancel" value="Cancel" class="${this.name}">
            <input type="button" name="save" value="Save" class="${this.name}">
          </form>
        </section>`

    // adds this cat to array allCats
    allCats.push(this);
  }

  createDiv() {
    document.querySelector('main').innerHTML += this.divHTML;
  }

  createAside() {
    document.querySelector('ul.available-cats').innerHTML += this.asideLiHTML;
  }

  createName() {
    document.querySelector(`div.${this.name}`).innerHTML += this.nameHTML;
    //admin html
  }

  createImg() {
    document.querySelector(`div.${this.name}`).innerHTML += this.imgHTML;
    //admin html
  }

  createClickCounterHTML() {
    document.querySelector(`div.${this.name}`).innerHTML += this.clickCounterHTML;
    // admin html
  }

  createAdminMenu() {
    document.querySelector(`div.${this.name}`).innerHTML += this.adminMenuHTML
  }

  clickCounter() {
    this.count++;
    document.querySelector(`span.${this.name}`).innerText = this.count;
    document.querySelector(`form.${this.name}`).querySelector(`input.counter`).value = this.count;
  }

  adminSave() {
     let adminName = document.querySelector(`input[value="${this.name}"]`).value;
     let adminImgURL = document.querySelector(`input[value="${this.imgURL}"]`).value;
     let adminCount = document.querySelector(`form.${this.name} input.counter`).value;

     let adminCat = new Cat(adminName, adminImgURL, adminCount);

     for (let i = 0; i < allCats.length; i++) {
         if (allCats[i].name === this.name) {
           allCats.pop();
           allCats.splice(i, 1, adminCat);
         }
       }

// removes particular cat div
     // document.getElementById(`${this.name}`).remove();
//removes particular cat li
     // document.querySelector(`li.${this.name}`).remove();

  }
}

// VIEW
new Cat("Otto", "images/otto.jpg", 0);
new Cat("Niko", "images/niko.jpg", 0);
new Cat("Derp", "images/derp.jpg", 0);
new Cat("Misty", "images/misty.jpg", 0);
new Cat("Dirtbags", "images/dirtbags.jpg", 0);

// insert HTML for Cat data
function initHTML() {
  for (let cat of allCats) {
  cat.createDiv();
  cat.createAside();
  cat.createAdminMenu();
  cat.createName();
  cat.createImg();
  cat.createClickCounterHTML();
  }
}
initHTML();

// unique counter on each picture
function initEvents() {
  for (let cat of allCats) {
    document.querySelector(`img.${cat.name}`).addEventListener('click', function() {
      cat.clickCounter();
    });

    document.querySelector(`button.${cat.name}`).addEventListener('click', function() {
      document.querySelector(`form.${cat.name}`).classList.remove('hidden');
      document.querySelector(`button.${cat.name}`).classList.add('hidden');
    });

    document.querySelector(`input[value="Cancel"].${cat.name}`).addEventListener('click', function() {
      document.querySelector(`form.${cat.name}`).classList.add('hidden');
      document.querySelector(`button.${cat.name}`).classList.remove('hidden');
    });

    document.querySelector(`input[value="Save"].${cat.name}`).addEventListener('click', function() {
      cat.adminSave();
      document.querySelector('main').innerHTML = "";
      document.querySelector(`ul.available-cats`).innerHTML = "";
      initHTML();
      initEvents();
    });
  }
}
initEvents();
// inputs should edit the cat div display
// cancel hides the menu again
//  one function to toggle hidden classes on form and admin-button, use here and submit
// submit redraws the page
// * function div.admin qureyselector admin-form cat name
// * cat.name, div.name, list name = admin form input
// * cat.img src = admin form input
// * cat. count = admin inoput form
// * run all display methods again except create div, and aside just rename those to keep position
//submit needs a function to redraw the area
