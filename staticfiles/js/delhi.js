

var socket = [
  {
    name: "Varis Electricals",
    rating: "4.6(64)",

    
    image_url:
      "p.png",
    thread1: "+91 7947394636",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",

  },
  {
    name: "Khushboo Electricals",
    rating: "4.5(43)",
    image_url:
      "p.png",
    thread1: "+91 7947215739",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Honey Electricals",
    rating: "4.3(28)",


    image_url:
      "p.png",
    thread1: "+91 7947271520",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "D S Electricals",
    rating: "4.0(19)",


    image_url:
      "p.png",
    thread1: "+91 7947216468",
    thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];

var fan = [
  {
    name: "Blue pearl Woodworks",
    rating: "4.7(59)",

    image_url:
      "p.png",
    thread1: "+91 8045799844",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Avrish Woodworks",
    rating: "4.6(45)",

    image_url:
      "p.png",
    thread1: "+91 8045797451",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "Anshu Carpenter Service",
    rating: "4.5(20)",
    image_url:
      "p.png",
    thread1: "+91 7947277361",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
    name: "S S Furniture",
    rating: "4.4(12)",

    image_url:
      "p.png",
    thread1: "+91 7947233573",
    thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
];
var light = [
  {
      name: "Raj Kumar Plumber",
      rating: "4.8(65)",

      image_url:
      "p.png",
      thread1:"+91 7942609003",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "B L Plumbing Contractor",
      rating: "4.6(58)",

      image_url:
      "p.png",
      thread1:"+91 7947321620",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Vijay Plumber",
      rating: "4.3(44)",

      image_url:
      "p.png",
      thread1:"+91 7947202206",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Fazil Plumber",
      rating: "4.7(35)",

      image_url:
      "p.png",
      thread1:"+91 7947167550",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
  

]
var mcb = [
  {
      name: "Firoz Painters",
      rating: "4.8(55)",

      image_url:
      "p.png",
      thread1:"+91 7942601853",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Creative Interiors",
      rating: "4.5(47)",

      image_url:
      "p.png",
      thread1:"+91 7947070408 ",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Paint Flips",
      rating: "4.2(35)",

      image_url:
      "p.png",
      thread1:"+91 7947417550",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Nandlal Painter",
      rating: "4.6(26)",

      image_url:
      "p.png",
      thread1:"+91 7947172053",
      thread2:"",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  }
]
var appliance = [
  {
      name: "Lappy Phix",
      rating: "4.7(69)",
 
      image_url:
      "p.png",
      thread1:"+91 7947078762",
      thread2: "",
    thread3: "",
    thread4: "",
    thread5: "",
    thread6: "",
  },
  {
      name: "Kartik Computer",
      rating: "4.6(58)",
 
      image_url:
      "p.png",
      thread1:"+91 7947307662",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Jsr Infotech",
      rating: "4.6(35)",

      image_url:
      "p.png",
      thread1:"+91 9899412026",
      thread2: "",
      thread3: "",
      thread4: "",
      thread5: "",
      thread6: "",
  },
  {
      name: "Sky IT Computers",
      rating: "4.1(15)",

      image_url:
      "p.png",
      thread1:"+91 7947235666",
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




