

var socket = [
  {
    name: "Deepak Electricals",
    rating: "4.8(68)",

    
    image_url:
      "p.png",
    thread1: "+91 7947269015",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",

  },
  {
    name: "Pramod Electricals",
    rating: "4.0(23)",
    image_url:
      "p.png",
    thread1: "+91 7947188439",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Manoj Electricals",
    rating: "4.7(18)",


    image_url:
      "p.png",
    thread1: "+91 7947194734",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Om Electricals",
    rating: "3.7(29)",


    image_url:
      "p.png",
    thread1: "+91 7947267615",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];

var fan = [
  {
    name: "Shah Furnitures",
    rating: "4.7(49)",

    image_url:
      "p.png",
    thread1: "+91 7947219304",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Indian Furnitures",
    rating: "4.6(25)",

    image_url:
      "p.png",
    thread1: "+91 7947458423",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Khan Furnitures",
    rating: "4.7(20)",
    image_url:
      "p.png",
    thread1: "+91 7947479252",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Kiran Interiors",
    rating: "4.4(12)",

    image_url:
      "p.png",
    thread1: "+91 7947310653",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];
var light = [
  {
      name: "Akbar Plumbing",
      rating: "4.7(65)",

      image_url:
      "p.png",
      thread1:"+91 7947228290",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Jitu Plumber",
      rating: "4.1(59)",

      image_url:
      "p.png",
      thread1:"+91 7947072718",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Plumbershub",
      rating: "4.3(44)",

      image_url:
      "p.png",
      thread1:"+91 7947203349",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Modern Plumber",
      rating: "4.72(37)",

      image_url:
      "p.png",
      thread1:"+91 7947359656",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
  

]
var mcb = [
  {
      name: "Diamond Painters",
      rating: "4.7(52)",

      image_url:
      "p.png",
      thread1:"+91 7947327256",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Abhiman Painters",
      rating: "4.3(42)",

      image_url:
      "p.png",
      thread1:"+91 7947365907 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Home Decor",
      rating: "4.2(33)",

      image_url:
      "p.png",
      thread1:"+91 7947258918 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Pradeep Contractor",
      rating: "4.6(24)",

      image_url:
      "p.png",
      thread1:"+91 7947225268",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
]
var appliance = [
  {
      name: "My Laptop Zone",
      rating: "4.7(80)",
 
      image_url:
      "p.png",
      thread1:"+91 7947178803",
      thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Virtual Systems",
      rating: "4.6(68)",
 
      image_url:
      "p.png",
      thread1:"+91 7947202770",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Royal Computers",
      rating: "4.6(50)",

      image_url:
      "p.png",
      thread1:"+91 7947175726",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Swansoft",
      rating: "4.1(45)",

      image_url:
      "p.png",
      thread1:"+91 7947445835",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  }
  
]




socketdisplay();
fandisplay();
lightdisplay();
mcbdisplay();
appliancedisplay();

//event & localStorage
var cartpage=JSON.parse(localStorage.getItem("items"))||[];
var total=(localStorage.getItem("totalvalue"))||0;

 



function socketdisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "socket");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Electricians";
  section.append(head);
  socket.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerText = elem.price;
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "contact";

   
    add.addEventListener("click",function(){addToCart(elem);} );

    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "waxingflex");
    firstdiv.append(seconddiv, thirddiv);
    var thread1p = document.createElement("p");
    thread1p.innerText = elem.thread1;

    var thread2p = document.createElement("p");
    thread2p.innerText = elem.thread2;
    var fourdiv = document.createElement("div");

    
    fourdiv.append(thread1p, thread2p);
    fourdiv.setAttribute("id", "desdiv");
    parentdiv.append(firstdiv, fourdiv);
    section.append(parentdiv);
    document.getElementById("productcart").append(section);
  });
}
function fandisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "fan");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Carpenters";
  section.append(head);
  fan.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerText = elem.price;
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "contact";
    
    add.addEventListener("click",function(){addToCart(elem);} );
    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "waxingflex");
    firstdiv.append(seconddiv, thirddiv);
    var thread1p = document.createElement("p");
    thread1p.innerText = elem.thread1;

    var fourdiv = document.createElement("div");
    var viewdetils = document.createElement("h3");
    
    fourdiv.append(thread1p, viewdetils);
    fourdiv.setAttribute("id", "desdiv");
    parentdiv.append(firstdiv, fourdiv);
    section.append(parentdiv);
    document.getElementById("productcart").append(section);
  });
}

function lightdisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "light");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Plumbers";
  section.append(head);
  light.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerText = elem.price;
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "contact";

   
    add.addEventListener("click",function(){addToCart(elem);} );

    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "waxingflex");
    firstdiv.append(seconddiv, thirddiv);
    var thread1p = document.createElement("p");
    thread1p.innerText = elem.thread1;
    var fourdiv = document.createElement("div");
    var viewdetils = document.createElement("h3");
    
    fourdiv.append(thread1p,  viewdetils);
    fourdiv.setAttribute("id", "desdiv");
    parentdiv.append(firstdiv, fourdiv);
    section.append(parentdiv);
    document.getElementById("productcart").append(section);
  });
}

function mcbdisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "mcb");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Painters";
  section.append(head);
  mcb.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerHTML = elem.price+"&nbsp  &nbsp &nbsp &nbsp &nbsp ";
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "contact";
    
    add.addEventListener("click",function(){addToCart(elem)} );
    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "waxingflex");
    firstdiv.append(seconddiv, thirddiv);
    var thread1p = document.createElement("p");
    thread1p.innerText = elem.thread1;


    var fourdiv = document.createElement("div");
    var viewdetils = document.createElement("h3");
    
    fourdiv.append(thread1p,  viewdetils);
    fourdiv.setAttribute("id", "desdiv");
    parentdiv.append(firstdiv, fourdiv);
    section.append(parentdiv);
    document.getElementById("productcart").append(section);
  });
}
function appliancedisplay() {
  var section = document.createElement("section");
  section.setAttribute("id", "appliance");
  var head = document.createElement("h1");
  head.setAttribute("id", "heading");
  head.innerText = "Laptop Repair";
  section.append(head);
  appliance.map(function (elem, index) {
    var parentdiv = document.createElement("div");

    var namep = document.createElement("h3");
    namep.innerText = elem.name;

    var ratingp = document.createElement("p");
    ratingp.innerHTML = '<i class="fa-solid fa-star"></i> ' + elem.rating;

    var pricep = document.createElement("p");
    pricep.innerHTML = elem.price;
    var seconddiv = document.createElement("dvi");
    seconddiv.append(namep, ratingp);
    var image = document.createElement("img");
    image.setAttribute("id", "smallimage");
    var thirddiv = document.createElement("div");

    image.setAttribute("src", elem.image_url);
    image.setAttribute("alt", index);
    var add = document.createElement("p");
    add.innerText = "contact";
   
    add.addEventListener("click",function(){addToCart(elem);} );
    thirddiv.append(image, add);
    var firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "waxingflex");
    firstdiv.append(seconddiv, thirddiv);
    var thread1p = document.createElement("p");
    thread1p.innerText = elem.thread1;


    var fourdiv = document.createElement("div");
    var viewdetils = document.createElement("h3");
    
    fourdiv.append(thread1p,  viewdetils);
    fourdiv.setAttribute("id", "desdiv");
    parentdiv.append(firstdiv, fourdiv);
    section.append(parentdiv);
    document.getElementById("productcart").append(section);
  });
}

//product scroll

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => { 
    const sectionHeight = current.offsetHeight;
    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document
        .querySelector("#productfilterbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}




