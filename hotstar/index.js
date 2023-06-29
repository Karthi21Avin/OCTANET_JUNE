let movies = [
  {
    name: "Avengers: Endgame",
    des:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balanc",
    image: "images/slider 2.PNG"
  },
  {
    name: "Avatar: The Way of Water",
    des:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home",
    image: "images/slider 1.PNG"
  },
  {
    name: "Mahabharat",
    des:
      "A dynastic struggle between the collateral branches of the Kuru clan, the Kauravas and Pandavas, for the throne of Hastinapur leads to the Kurukshetra War",
    image: "images/slider 3.PNG"
  },
  {
    name: "Brahmastra",
    des:
      "Shiva and Isha, a young couple, learn about the secrets of the Brahmastra. Together, they must stop the forces of evil from destroying the universe",
    image: "images/slider 4.PNG"
  },
  {
    name: "RRR",
    des:
      "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers",
    image: "images/slider 5.PNG"
  }
];

const caraousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0; //track the current slideIndex

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  // imgElement.appendChild(document.createTextNode(""));
  // h1.appendChild(document.createTextNode(movies[slideIndex].name));
  // p.appendChild(document.createTextNode(movies[slideIndex].des));
  // content.appendChild(h1);
  // content.appendChild(p);
  // slide.appendChild(content);
  // slide.appendChild(imgElement);
  // caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });

  // let cardContainers = [...document.querySelectorAll(".card-container")];
  // let preBtns = [...document.querySelectorAll(".pre-btn")];
  // let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

  // cardContainers.forEach((item, i) => {
  //   let containerDimensions = item.getBoundingClientRect();
  //   let containerWidth = containerDimensions.width;

  // nxtBtns[i].addEventListener("click", () => {
  //   item.scrollLeft += containerWidth - 200;
  // });

  // preBtns[i].addEventListener("click", () => {
  //   item.scrollLeft -= containerWidth + 200;
  // });
});
