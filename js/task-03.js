const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];





const listGalery = document.querySelector(".gallery");



const galleryTest = images.reduce(
  (acc, { alt, url }) =>
    (acc += `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`),
  ""
);

gallery.insertAdjacentHTML("beforeend", galleryTest);



// console.log(images.url); // https://picsum.photos/id/9/320/240
// console.log(images.alt); // A laptop

// (images.url =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"),
//   (images.alt = "White and Black Long Fur Cat");






