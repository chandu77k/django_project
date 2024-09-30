

var socket = [
  {
    name: "Laxmi electricals",
    rating: "4.5(59)",

    
    image_url:
      "p.png",
    thread1: "+91 7947331601",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",

  },
  {
    name: "Triansh Electricals",
    rating: "4.5(43)",
    image_url:
      "p.png",
    thread1: "+91 8045795570",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Bhagavan Electricals",
    rating: "4.7(38)",


    image_url:
      "p.png",
    thread1: "+91 9849988094",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Narendar Electrician",
    rating: "4.7(29)",


    image_url:
      "p.png",
    thread1: "+91 8045799544",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];

var fan = [
  {
    name: "Varun sai Wood works",
    rating: "4.7(49)",

    image_url:
      "p.png",
    thread1: "+91 7947234549",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Eswar sri Interiors",
    rating: "4.6(35)",

    image_url:
      "p.png",
    thread1: "+91 7947396483",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Rakesh Carpenters",
    rating: "4.7(25)",
    image_url:
      "p.png",
    thread1: "+91 7947292708",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Vijaya Interiors",
    rating: "4.4(15)",

    image_url:
      "p.png",
    thread1: "+91 7947210222",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];
var light = [
  {
      name: "Jay Durga Plumbers",
      rating: "4.7(55)",

      image_url:
      "p.png",
      thread1:"+91 7947173173",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "A to Z Plumbers",
      rating: "4.1(49)",

      image_url:
      "p.png",
      thread1:"+91 7947207561",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Mahesh Plumbers",
      rating: "4.3(44)",

      image_url:
      "p.png",
      thread1:"+91 7947192034",
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
      thread1:"+91 7947313972",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
  

]
var mcb = [
  {
      name: "Sahoo Painters",
      rating: "4.7(62)",

      image_url:
      "p.png",
      thread1:"+91 7947200223",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Jai Ganesh Painter",
      rating: "4.3(42)",

      image_url:
      "p.png",
      thread1:"+91 8045794972",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Saif Paintings",
      rating: "4.2(33)",

      image_url:
      "p.png",
      thread1:"+91 7947160248 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Aishwarya Painting Works",
      rating: "4.6(24)",

      image_url:
      "p.png",
      thread1:"+91 7947200328",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
]
var appliance = [
  {
      name: "Maithri Systems",
      rating: "4.7(58)",
 
      image_url:
      "p.png",
      thread1:"+91 8045794370",
      thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "MSN Technologies",
      rating: "4.6(48)",
 
      image_url:
      "p.png",
      thread1:"+91 7947197993",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Mirs Computers",
      rating: "4.6(28k)",

      image_url:
      "p.png",
      thread1:"+91 7942592161",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Sri Lns Computers",
      rating: "4.1(15)",

      image_url:
      "p.png",
      thread1:"+91 7947207332",
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




