var socket = [
  {
    name: "Raj Singh",
    rating: "4.8(69)",

    
    image_url:
      "p.png",
    thread1: "+91 7947082304",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",

  },
  {
    name: "Star Electricals",
    rating: "4.0(23)",
    image_url:
      "p.png",
    thread1: "+91 7947210745",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Ahmed Electricals",
    rating: "4.7(8)",


    image_url:
      "p.png",
    thread1: "+91 7947211522",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "A R Electricals",
    rating: "3.7(29)",


    image_url:
      "p.png",
    thread1: "+91 7947214900",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];

var fan = [
  {
    name: "Dinesh carpentary works",
    rating: "4.7(49)",

    image_url:
      "p.png",
    thread1: "+91 7947160175",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "M M Interiors",
    rating: "4.6(25)",

    image_url:
      "p.png",
    thread1: "+91 7947231756",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Sunil Carpentary",
    rating: "4.7(20)",
    image_url:
      "p.png",
    thread1: "+91 7947324227",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Avon Interiors",
    rating: "4.4(12)",

    image_url:
      "p.png",
    thread1: "+91 8045797191",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];
var light = [
  {
      name: "Beereshwara Plumbing Work",
      rating: "4.7(65)",

      image_url:
      "p.png",
      thread1:"+91 7947159298",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Pooja Plumbing work",
      rating: "4.1(59)",

      image_url:
      "p.png",
      thread1:"+91 7947216213",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "MBK Plumber works",
      rating: "4.3(44)",

      image_url:
      "p.png",
      thread1:"+91 7947307567",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Plumber services",
      rating: "4.72(37)",

      image_url:
      "p.png",
      thread1:"+91 7947168433",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
  

]
var mcb = [
  {
      name: "Painter Pradeep",
      rating: "4.7(52)",

      image_url:
      "p.png",
      thread1:"+91 7947207470",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Amrutha Painters",
      rating: "4.3(42)",

      image_url:
      "p.png",
      thread1:"+91 7947234854 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Elshada Home Painting",
      rating: "4.2(33)",

      image_url:
      "p.png",
      thread1:"+91 7947218697 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Ajay Painting Contractor",
      rating: "4.6(24)",

      image_url:
      "p.png",
      thread1:"+91 7947244965",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
]
var appliance = [
  {
      name: "Avishi IT Solutions",
      rating: "4.7(59)",
 
      image_url:
      "p.png",
      thread1:"+91 7947181712",
      thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Katze Technologies",
      rating: "4.6(48)",
 
      image_url:
      "p.png",
      thread1:"+91 7947160901",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "A S Computers",
      rating: "4.6(28)",

      image_url:
      "p.png",
      thread1:"+91 7947163753",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Smart Computers",
      rating: "4.1(15)",

      image_url:
      "p.png",
      thread1:"+91 7406992930",
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




