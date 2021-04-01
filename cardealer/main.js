function replaceImage(num) {
  var element = document.getElementsByTagName('img')[num];
  var originalImage = element.getAttribute('src');
  var newImage = element.getAttribute("data-image2");

  element.setAttribute('src', newImage);
  element.setAttribute('data-image2', originalImage); 
  // alert(originalImage);
}