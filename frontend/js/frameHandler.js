var imgSrc;
function selectFrame(src) {
  imgSrc = imageList.filter((el) => src === "http://65.0.77.129/web_app/demo/demo_brand_reminder/backend/public/frame/" + el.ev_image);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;

  byId("frameListPage").style.display = 'none';
  byId("downloadFramePage").style.display = 'inherit';
  byId("frameDiv").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
  byClass("frameImg").style.opacity = 0.9;

  $(".frameImg").attr('src', src);
  $('#uploadImg').attr('src', uploadImgSrc);
  idx++;
  imageUpload();
}

// function imageUpload(){
//   let uploadImg = byId("uploadImg");
//   let slider = byId("mySlider");
//   let frameImg = byClass("frameImg");
//   let imgTxt = byId("imgTxt");
//   let addTxt = byId("addTxt");
//   let draggableimage1 = byId("draggableimage1");
//   let width = frameImg.offsetWidth;


//  var col =brandName.length;
//  if(col > 2){
//   col =4;
//  }else{
//   col = 12/brandName.length;
//  }
// $("#draggableimage1 div").remove(); 
// brandName.forEach(function (item, index) {
//   console.log(item, index);
// //  $("#draggableimage1").append('<div class="col-'+col+'" id="image1"><img id="brand'+item+'" width="100%" src="http://localhost/projects/eid_wockhardt/image/image'+item+'.png" ></div>');
//  $("#draggableimage1").append('<div class="col-'+col+'" id="image1"><img id="brand'+item+'" width="100%" src="http://65.0.77.129/poster_web_app/eid_wockhardt/frontend/image/image'+item+'.png" ></div>');
// });

//   if(window.matchMedia("(max-width: 768px)").matches){
//     byId("sliderDiv").style.display = 'none';    
//   }
//   else{
//     byClass("container").style.padding = '0px';
//     byId("sliderDiv").style.display = 'flex';
//     slider.style.width = width + 'px';
//     slider.style.bottom = (width - (window.outerHeight - width)/2 - 5) + 'px';
//   } 

//   let maxLetters = Math.ceil(width/(parseInt(imgSrc[0]['font-size'].replace('px', ''))/2));
//   if(imageName.length < maxLetters) {
//     imgTxt.innerHTML = imageName;
//   }    
//   else {       
//     imgTxt.innerHTML = wordWrap(imageName, maxLetters);        
//   }

//   // let maxLettersadd = Math.ceil(width/(parseInt(imgSrc[0]['add-font-size'].replace('px', ''))/2));
//   // if(addressName.length < maxLetters) {
//   //   addTxt.innerHTML = addressName;
//   // }    
//   // else {       
//   //   addTxt.innerHTML = wordWrap(addressName, maxLettersadd);        
//   // }

//   imgTxt.style.color = imgSrc[0]['font-color'];
//   imgTxt.style['font-size'] = imgSrc[0]['font-size'];
//   imgTxt.style['font-family'] = imgSrc[0]['font-type'];  
//   imgTxt.style['max-width'] = (width) + 'px';

//   // draggableimage1.style['top'] = imgSrc[0]['logo-top'];
//   draggableimage1.style['align-items'] = imgSrc[0]['logo-align'];   
//   draggableimage1.style['height'] = imgSrc[0]['logo-height'];   
//   draggableimage1.style['top'] = imgSrc[0]['l-top'];   


//   addTxt.style.color = imgSrc[0]['add-font-color'];
//   addTxt.style['font-size'] = imgSrc[0]['add-font-size'];
//   addTxt.style['font-family'] = imgSrc[0]['add-font-type'];  
//   addTxt.style['max-width'] = (width) + 'px';


//   let textPos = imgSrc[0]['other-css'].split(",");
//   imgTxt.style.left = (frameImg.offsetLeft) + (frameImg.offsetWidth*(parseInt(textPos[0])/100)) + 'px';
//   imgTxt.style.top = (frameImg.offsetTop) + (frameImg.offsetHeight*(parseInt(textPos[1])/100)) + 'px'; 

//   let logoPos = imgSrc[0]['logo-top'].split(",");
//   draggableimage1.style.top = (frameImg.offsetTop) + (frameImg.offsetHeight*(parseInt(logoPos[1])/100)) + 'px'; 

//   // draggableimage1.style['top'] = imgSrc[0]['logo-top'];



//   let textPosAdd = imgSrc[0]['add-other-css'].split(",");
//   addTxt.style.left = (frameImg.offsetLeft) + (frameImg.offsetWidth*(parseInt(textPosAdd[0])/100)) + 'px';
//   addTxt.style.top = (frameImg.offsetTop) + (frameImg.offsetHeight*(parseInt(textPosAdd[1])/100)) + 'px'; 

//   let initScale = 0;
//   var handleTouchyPinch = function (e, $target, data) {
//     if(initScale !== 0)
//       initScale+=data.scale - data.previousScale;
//     else
//       initScale = data.scale;
//     setTimeout(()=>{
//       $('#uploadImg').css({'webkitTransform':'scale(' + initScale + ',' + initScale + ')'});
//     }, 50);
//   };
//   $('#frameImg').bind('touchy-pinch', handleTouchyPinch);

//   dragElement(uploadImg, byId("draggableDiv"));
//   dragElement(imgTxt, byId("draggableText"));  
//   dragElement(addTxt, byId("draggableadd"));  
// }
function imageUpload() {
  let uploadImg = byId("uploadImg");
  let slider = byId("mySlider");
  let frameImg = byClass("frameImg");
  let imgTxt = byId("imgTxt");
  let addTxt = byId("addTxt");
  let width = frameImg.offsetWidth;
  console.log("widthL " + width);
  console.log("widthL " + frameImg.offsetWidth);
  console.log("widthL " + frameImg.offsetHeight);


  var col = brandName.length;
  if (col > 2) {
    col = 4;
  } else {
    col = 12 / brandName.length;
  }
  $("#draggableimage1 div").remove();
  brandName.forEach(function (item, index) {
    console.log(item, index);
    //  $("#draggableimage1").append('<div class="col-'+col+'" id="image1"><img id="brand'+item+'" width="100%" src="http://localhost/projects/eid_wockhardt/image/image'+item+'.png" ></div>');
    $("#draggableimage1").append('<div class="col-' + col + '" id="image1"><img id="brand' + item + '" width="100%" src="http://65.0.77.129/web_app/demo/demo_brand_reminder/frontend/image/image' + item + '.png" ></div>');
  });

  
  if (window.matchMedia("(max-width: 768px)").matches) {
    byId("sliderDiv").style.display = 'none';
  }
  else {
    byClass("container").style.padding = '0px';
    byId("sliderDiv").style.display = 'flex';
    slider.style.width = width + 'px';
    slider.style.bottom = (width - (window.outerHeight - width) / 2 - 5) + 'px';
  }

  let maxLetters = Math.ceil(width / (parseInt(imgSrc[0].fontsize.replace('px', '')) / 2));
  if (imageName.length < maxLetters) {
    imgTxt.innerHTML = imageName;
  }
  else {
    imgTxt.innerHTML = wordWrap(imageName, maxLetters);
  }

  let maxLettersadd = Math.ceil(width / (parseInt(imgSrc[0].addfontsize.replace('px', '')) / 2));
  if (addressName.length < maxLetters) {
    addTxt.innerHTML = addressName;
  }
  else {
    addTxt.innerHTML = wordWrap(addressName, maxLettersadd);
  }

  imgTxt.style.color = imgSrc[0].fontcolor;
  imgTxt.style['font-size'] = imgSrc[0].fontsize;
  imgTxt.style['font-family'] = imgSrc[0].fonttype;
  imgTxt.style['max-width'] = (width) + 'px';


  addTxt.style.color = imgSrc[0].addfontcolor;
  addTxt.style['font-size'] = imgSrc[0].addfontsize;
  addTxt.style['font-family'] = imgSrc[0].addfonttype;
  addTxt.style['max-width'] = (width) + 'px';


  let textPos = imgSrc[0].othercss.split(",");
  console.log("textPos: " + textPos);
  imgTxt.style.left = (frameImg.offsetLeft) + (frameImg.offsetWidth * (parseInt(textPos[0]) / 100)) + 'px';
  console.log("img left side:  " + frameImg.offsetLeft + ": :" + parseInt(textPos[0]) / 100 + ": :" + frameImg.offsetWidth + ": :" + (frameImg.offsetWidth * (parseInt(textPos[0]) / 100)) + ": :" + imgTxt.style.left);
  imgTxt.style.top = (frameImg.offsetTop) + (frameImg.offsetHeight * (parseInt(textPos[1]) / 100)) + 'px';
  console.log("img left top:  " + frameImg.offsetTop + ": :" + parseInt(textPos[1]) / 100 + ": : " + frameImg.offsetHeight + ": :" + (frameImg.offsetHeight * (parseInt(textPos[1]) / 100)) + ": :" + imgTxt.style.top);


  let textPosAdd = imgSrc[0].addothercss.split(",");
  addTxt.style.left = (frameImg.offsetLeft) + (frameImg.offsetWidth * (parseInt(textPosAdd[0]) / 100)) + 'px';
  addTxt.style.top = (frameImg.offsetTop) + (frameImg.offsetHeight * (parseInt(textPosAdd[1]) / 100)) + 'px';

  let initScale = 0;
  var handleTouchyPinch = function (e, $target, data) {
    if (initScale !== 0)
      initScale += data.scale - data.previousScale;
    else
      initScale = data.scale;
    setTimeout(() => {
      $('#uploadImg').css({ 'webkitTransform': 'scale(' + initScale + ',' + initScale + ')' });
    }, 50);
  };
  $('#frameImg').bind('touchy-pinch', handleTouchyPinch);

  dragElement(uploadImg, byId("draggableDiv"));
  dragElement(imgTxt, byId("draggableText"));
  dragElement(addTxt, byId("draggableadd"));
}

function wordWrap(text, maxLetters) {
  var strArr = text.split(' ');
  var str = ''
  if (strArr.length === 1) {
    var i = 0;
    while (i < text.length) {
      if (i > 0 && i % (maxLetters) === 0) {
        str += '<br/>';
      }
      str += text.charAt(i);
      i++;
    }
  }
  else {
    var temp = '';
    for (var x = 0; x < strArr.length; x++) {
      temp += strArr[x] + ' ';
      if (temp.length > maxLetters) {
        str += '<br/>' + strArr[x] + ' ';
        temp = '';
      }
      else {
        str += strArr[x] + ' ';
      }
    }
  }
  return str;
}

function resizeImage() {
  var ranger = byId('mySlider');
  $('#uploadImg').css({ 'webkitTransform': 'scale(' + ranger.value / 2 + ',' + ranger.value / 2 + ')' });
}

function dragElement(elmnt, dragContainer) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  dragContainer.addEventListener("mousedown", dragMouseDown, false);
  dragContainer.addEventListener("touchstart", dragMouseDown, false);

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === "touchstart") {
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    dragContainer.addEventListener("mouseup", closeDragElement, false);
    dragContainer.addEventListener("touchend", closeDragElement, false);
    dragContainer.addEventListener("mousemove", elementDrag, false);
    dragContainer.addEventListener("touchmove", elementDrag, false);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.type === "touchmove") {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    dragContainer.removeEventListener("mouseup", closeDragElement);
    dragContainer.removeEventListener("touchend", closeDragElement);
    dragContainer.removeEventListener("mousemove", elementDrag);
    dragContainer.removeEventListener("touchmove", elementDrag);
  }
}

function isStylePresent(elem, property) {
  return elem.style[property] && elem.style[property] !== "auto"
}

function mergeImgs() {
  let imgResolution = {
    width: 1080,
    height: 1920
  }
  byId("mergedImage").style.display = 'block';
  var canvas = byId('canvas');
  var context = canvas.getContext('2d');

  var img1, img1Ht, img1Wdth, img1Top, img1Left, posLeftImg1, posTopImg1;
  var img2, img2Ht, img2Wdth, img2Top, img2Left;
  var brand2, brand2Ht, brand2Wdth, brand2Top, brand2Left;
  var imgTxt, imgTxtHt, imgTxtWdth, imgTxtTop, imgTxtLeft, posLeftImgTxt, posTopImgTxt;
  var addTxt, addTxtHt, addTxtWdth, addTxtTop, addTxtLeft, posLeftAddTxt, posTopAddTxt;

  img1 = byId('uploadImg');
  img1Ht = img1.getBoundingClientRect().height;
  img1Wdth = img1.getBoundingClientRect().width;
  img1Top = img1.getBoundingClientRect().top;
  img1Left = img1.getBoundingClientRect().left;

  img2 = byId('frameImg');
  img2Ht = img2.getBoundingClientRect().height;
  img2Wdth = img2.getBoundingClientRect().width;
  img2Top = img2.getBoundingClientRect().top;
  img2Left = img2.getBoundingClientRect().left;

  brand1 = byId('brand1');
  if (brand1 != null) {
    brand1Ht = brand1.getBoundingClientRect().height;
    brand1Wdth = brand1.getBoundingClientRect().width;
    brand1Top = brand1.getBoundingClientRect().top;
    brand1Left = brand1.getBoundingClientRect().left;
  }

  brand2 = byId('brand2');
  if (brand2 != null) {
    brand2Ht = brand2.getBoundingClientRect().height;
    brand2Wdth = brand2.getBoundingClientRect().width;
    brand2Top = brand2.getBoundingClientRect().top;
    brand2Left = brand2.getBoundingClientRect().left;
  }

  brand3 = byId('brand3');
  if (brand3 != null) {
    brand3Ht = brand3.getBoundingClientRect().height;
    brand3Wdth = brand3.getBoundingClientRect().width;
    brand3Top = brand3.getBoundingClientRect().top;
    brand3Left = brand3.getBoundingClientRect().left;
  }


  brand4 = byId('brand4');
  if (brand4 != null) {
    brand4Ht = brand4.getBoundingClientRect().height;
    brand4Wdth = brand4.getBoundingClientRect().width;
    brand4Top = brand4.getBoundingClientRect().top;
    brand4Left = brand4.getBoundingClientRect().left;
  }

  brand5 = byId('brand5');
  if (brand5 != null) {
    brand5Ht = brand5.getBoundingClientRect().height;
    brand5Wdth = brand5.getBoundingClientRect().width;
    brand5Top = brand5.getBoundingClientRect().top;
    brand5Left = brand5.getBoundingClientRect().left;
  }

  brand6 = byId('brand6');
  if (brand6 != null) {
    brand6Ht = brand6.getBoundingClientRect().height;
    brand6Wdth = brand6.getBoundingClientRect().width;
    brand6Top = brand6.getBoundingClientRect().top;
    brand6Left = brand6.getBoundingClientRect().left;
  }


  imgTxt = byId("imgTxt");
  imgTxtHt = imgTxt.getBoundingClientRect().height;
  imgTxtWdth = imgTxt.getBoundingClientRect().width;
  imgTxtTop = imgTxt.getBoundingClientRect().top;
  imgTxtLeft = imgTxt.getBoundingClientRect().left;



  addTxt = byId("addTxt");
  addTxtHt = addTxt.getBoundingClientRect().height;
  addTxtWdth = addTxt.getBoundingClientRect().width;
  addTxtTop = addTxt.getBoundingClientRect().top;
  addTxtLeft = addTxt.getBoundingClientRect().left;

  img2.style.opacity = 1;
  canvas.width = imgResolution.width;
  canvas.height = imgResolution.height;
  let fontSize = parseInt(imgSrc[0].fontsize);
  let fontSizesadd = parseInt(imgSrc[0].addfontsize);
  posLeftImg1 = img1Left - img2Left;
  posTopImg1 = img1Top - img2Top;
  if (brand1 != null) {

    posLeftBrand1 = brand1Left - img2Left;
    posTopBrand1 = brand1Top - img2Top;
  }
  if (brand2 != null) {
    posLeftBrand2 = brand2Left - img2Left;
    posTopBrand2 = brand2Top - img2Top;
  }

  if (brand3 != null) {
    posLeftBrand3 = brand3Left - img2Left;
    posTopBrand3 = brand3Top - img2Top;
  }

  if (brand4 != null) {
    posLeftBrand4 = brand4Left - img2Left;
    posTopBrand4 = brand4Top - img2Top;
  }

  if (brand5 != null) {
    posLeftBrand5 = brand5Left - img2Left;
    posTopBrand5 = brand5Top - img2Top;
  }

  if (brand6 != null) {
    posLeftBrand6 = brand6Left - img2Left;
    posTopBrand6 = brand6Top - img2Top;
  }
  //posLeftImgTxt = imgTxtLeft - img2Left + 105;
  posLeftImgTxt = imgTxtLeft - img2Left;
  posLeftAddTxt = addTxtLeft - img2Left;
  posTopImgTxt = imgTxtTop - img2Top + fontSize + 1;
  posTopAddTxt = addTxtTop - img2Top + fontSizesadd + 1;


  let horizontalResFactor = (imgResolution.width / img2Wdth);
  let verticalResFactor = (imgResolution.height / img2Ht);


  let centerX = (canvas.width / 2);
  let centerY = (canvas.height / 2);


  context.drawImage(img1, posLeftImg1 * horizontalResFactor, posTopImg1 * verticalResFactor, img1Wdth * horizontalResFactor, img1Ht * verticalResFactor);
  context.drawImage(img2, 0, 0, imgResolution.width, imgResolution.height);
  if (brand1 != null) {

    context.drawImage(brand1, posLeftBrand1 * horizontalResFactor, posTopBrand1 * verticalResFactor, brand1Wdth * horizontalResFactor, brand1Ht * verticalResFactor);
  }

  if (brand2 != null) {
    context.drawImage(brand2, posLeftBrand2 * horizontalResFactor, posTopBrand2 * verticalResFactor, brand2Wdth * horizontalResFactor, brand2Ht * verticalResFactor);
  }

  if (brand3 != null) {
    context.drawImage(brand3, posLeftBrand3 * horizontalResFactor, posTopBrand3 * verticalResFactor, brand3Wdth * horizontalResFactor, brand3Ht * verticalResFactor);
  }

  if (brand4 != null) {
    context.drawImage(brand4, posLeftBrand4 * horizontalResFactor, posTopBrand4 * verticalResFactor, brand4Wdth * horizontalResFactor, brand4Ht * verticalResFactor);
  }

  if (brand5 != null) {
    context.drawImage(brand5, posLeftBrand5 * horizontalResFactor, posTopBrand5 * verticalResFactor, brand5Wdth * horizontalResFactor, brand5Ht * verticalResFactor);
  }

  if (brand6 != null) {
    context.drawImage(brand6, posLeftBrand6 * horizontalResFactor, posTopBrand6 * verticalResFactor, brand6Wdth * horizontalResFactor, brand6Ht * verticalResFactor);
  }

  context.font = 'bold ' + parseInt(fontSize * horizontalResFactor) + 'px ' + imgSrc[0]['font-type'];
  context.fillStyle = imgSrc[0].fontcolor;
  context.textAlign = "center";

  var lines = imgTxt.innerHTML.split('<br>');
  var lineBrkFactor = imgTxt.offsetHeight / lines.length;
  //var lineBrkFactoraddtWidth = addTxt.offsetWidth/linesadd.length;

  var approxFontHeight = parseInt(context.font);

  //alert(posLeftAddTxt*horizontalResFactor);
  for (var j = 0; j < lines.length; j++) {
    /*context.fillText(lines[j], posLeftImgTxt*horizontalResFactor, (posTopImgTxt + (j*(lineBrkFactor)))*verticalResFactor, imgTxt.offsetWidth*horizontalResFactor, 
    imgTxt.offsetHeight*verticalResFactor);*/
    context.fillText(lines[j], centerX, (posTopImgTxt + (j * (lineBrkFactor))) * verticalResFactor, imgTxt.offsetWidth * horizontalResFactor,
      imgTxt.offsetHeight * verticalResFactor);
  }

  context.font = 'bold ' + parseInt(fontSizesadd * horizontalResFactor) + 'px ' + imgSrc[0]['add-font-type'];
  context.fillStyle = imgSrc[0]['add-font-color'];
  context.textAlign = "left";

  var linesadd = addTxt.innerHTML.split('<br>');
  var lineBrkFactoradd = addTxt.offsetHeight / linesadd.length;




  for (var j = 0; j < linesadd.length; j++) {
    context.fillText(linesadd[j], posLeftAddTxt * horizontalResFactor, (posTopAddTxt + (j * (lineBrkFactoradd))) * verticalResFactor, addTxt.offsetWidth * horizontalResFactor,
      addTxt.offsetHeight * verticalResFactor);
  }

  var button = byId('generateImg');
  var dataURL = canvas.toDataURL('image/png');
  button.href = dataURL;
  button.click();

  byId("mergedImage").style.display = 'none';
  document.querySelector("body").style.overflow = 'auto';
  removeListeners(byId("draggableDiv"));
  removeListeners(byId("draggableText"));
  removeListeners(byId("draggableadd"));
  idx = 1;
  pages[routeArray[idx]]();
}
function removeListeners(elem) {
  var old_element = elem;
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
}

