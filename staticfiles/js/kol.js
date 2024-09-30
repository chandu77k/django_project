

var socket = [
  {
    name: "Star Delta Electric",
    rating: "4.8(67)",

    
    image_url:
      "p.png",
    thread1: "+91 79471188721",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",

  },
  {
    name: "Bapi Electricals",
    rating: "4.0(53)",
    image_url:
      "p.png",
    thread1: "+91 7947372171",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Biraj Electricals",
    rating: "4.7(29)",


    image_url:
      "p.png",
    thread1: "+91 7947209285",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "T R Electricals",
    rating: "3.7(25)",


    image_url:
      "p.png",
    thread1: "+91 7947264975",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];

var fan = [
  {
    name: "Mondal Furniture",
    rating: "4.7(59)",

    image_url:
      "p.png",
    thread1: "+91 7947338156",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Karukaj Interiors",
    rating: "4.6(45)",

    image_url:
      "p.png",
    thread1: "+91 7947408072",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Rimpi Furniture",
    rating: "4.7(20)",
    image_url:
      "p.png",
    thread1: "+91 7947073377",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Biswas Interiors",
    rating: "4.4(18)",

    image_url:
      "p.png",
    thread1: "+91 7947212793",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];
var light = [
  {
      name: "Tapan Plumber",
      rating: "4.7(67)",

      image_url:
      "p.png",
      thread1:"+91 7942600315",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Mitra Quick Plumbing",
      rating: "4.1(58)",

      image_url:
      "p.png",
      thread1:"+91 7947299330",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "GR Plumbers",
      rating: "4.3(47)",

      image_url:
      "p.png",
      thread1:"+91 7947349303",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Azad Plumbing services",
      rating: "4.72(33)",

      image_url:
      "p.png",
      thread1:"+91 8045785619",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
  

]
var mcb = [
  {
      name: "Paint Sutra",
      rating: "4.7(55)",

      image_url:
      "p.png",
      thread1:"+91 7947263175",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Sunny's Arts",
      rating: "4.3(43)",

      image_url:
      "p.png",
      thread1:"+91 7947200767 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Angel Paints",
      rating: "4.2(34)",

      image_url:
      "p.png",
      thread1:"+91 7947266331",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Ansari Designer",
      rating: "4.6(27)",

      image_url:
      "p.png",
      thread1:"+91 7947347366",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
]
var appliance = [
  {
      name: "Infotoolz",
      rating: "4.7(53)",
 
      image_url:
      "p.png",
      thread1:"+91 7947404364",
      thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Sayan Technologies",
      rating: "4.6(48)",
 
      image_url:
      "p.png",
      thread1:"+91 7947164509",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Rudhra Services",
      rating: "4.6(28)",

      image_url:
      "p.png",
      thread1:"+91 7947217603",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Techno Track",
      rating: "4.1(15)",

      image_url:
      "p.png",
      thread1:"+91 7947410065",
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




