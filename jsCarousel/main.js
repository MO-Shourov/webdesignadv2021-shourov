changeImage(0);
function changeImage(num) {

  const images = [
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/27/16/rexfeatures_Zhangye-2.jpg?width=1368&auto=webp&quality=75',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/27/16/rexfeatures_LakeHillier.jpg?width=640&auto=webp&quality=75',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/27/16/rexfeatures_Dallol.jpg?width=640&auto=webp&quality=75',
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/27/16/133019289Natron.jpg?width=640&auto=webp&quality=75'
  ];
  const titles = [
    'Zhangye Danxia Landform, China',
    'Lake Hillier, Australia',
    'Dallol, Ethiopia',
    'Lake Natron, Tanzania'
  ];
  const texts = [
    'This landscape of surreal, psychedelic colours and shapes has to be seen to be believed. Known as the “eye candy” of Zhangye, the 400 square kilometre geological park can be found in the Gansu Province in central north China. Danxia landform, a type of geomorphology unique to China, is formed of coloured sandstones and conglomerates largely from the Cretaceous age 66 million years ago. Geologists believe it is a result of movement in the Earth’s crust, which makes rock layers appear in different colours, sizes and patterns.',
    'This violently pink saline lake can be found on Middle Island in the Recherché Archipelago, off the coast of Western Australia. While only 600 metres long, the startlingly-coloured lake resembles a piece of Pop Art on the otherwise uniformly green island. The cause of its pink hue continues to baffle scientists. Some experts think it is caused by the low nutrient concentrations and different types of bacteria and algae, while others suggest the pink colouration comes from a sea salt and nahcolite deposit reaction.',
    'Resembling the scenery of a video game or sci-fi film, Dallol’s volcanic landscape in the Danakil Depression is a geological phenomenon. Its luminous, otherworldly appearance is a result of acidic hot springs, sulphur, gas geysers and spectacular salt formations. However, a note of caution to those planning a visit to this extraordinary crater: the climate in Dallol registers the hottest temperatures of any inhabited area on earth, with average summer highs of 46C. The colourful lakes are, in many cases, toxic and the sulphurous vapours make it difficult to breathe.',
    'This salt and soda lake in the Arusha Region of northern Tanzania evaporates completely in the summer, leaving an astonishingly blood-red lake floor, thriving with salt-loving organisms and algae. On top of the dramatic scenery, the dry lake is an important breeding area for more than a million flamingos. However, when full, the highly caustic lake is deadly to any animals not adapted to it. One of the most inhospitable environments on earth, Lake Natron is best viewed from the air.'
  ];
  const carousel = document.getElementById('theImage');
  const carouselTitle = document.getElementById('carousel-title');
  const carouselText = document.getElementById('carousel-text');

  if (num > (images.length - 1)) {
    num = 0;
  }
  
  if (num < 0) {
    num = images.length - 1;
  }

  carousel.src = images[num];
  carouselText.innerHTML = texts[num];
  carouselTitle.innerHTML = titles[num];
  carousel.setAttribute('data-showing', [num]);
}
function nextImage() {
  let num = parseInt(document.getElementById('theImage').getAttribute('data-showing'));
  num = num + 1;
  changeImage(num);
}
function lastImage() {
  let num = parseInt(document.getElementById('theImage').getAttribute('data-showing'));
  num = num - 1;
  changeImage(num);
}