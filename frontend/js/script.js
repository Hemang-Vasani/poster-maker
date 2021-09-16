var formData2 = {}, uploadImgSrc, imageName, uploadedImg, imageList, imageName, empList;

var formData = new FormData();


function loadBody() {
  // $.get('http://localhost/projects/eid_wockhardt/js/data.json', (response) => {
  $.get('http://65.0.77.129:4001/getfram', (response) => {
    imageList = response.data;
    let frameListDiv = byId("frameListPage");
    frameListDiv.innerHTML = "";
    frameListDiv.innerHTML = `<p class="col-sm-12 col-lg-12 frameHeading">Choose a frame:</p>`
    let classList;
    if (window.matchMedia("(max-width: 1024px)").matches)
      classList = 'col-sm-6';
    else
      classList = 'col-sm-6 col-lg-2';

    imageList.map((el) => {
      frameListDiv.innerHTML += `<span class="${classList}" style="text-align: center;">
              <img class="thumbnail" src="http://65.0.77.129/web_app/demo/demo_brand_reminder/backend/public/frame/${el.ev_image}" onclick="selectFrame('http://65.0.77.129/web_app/demo/demo_brand_reminder/backend/public/frame/${el.ev_image}')">
        </span>`
    });
    frameListDiv.style.display = 'none';
  });


}

/*$(window).on('load', function () { 



    $.get('http://wockhardt.parinfotech.com/posterrakshabandhan/index.php/api/index/getemplist', (response) => {
    let empList = response.data;
    console.log(empList);
  
    let empListDiv = document.getElementById("emp_code");
    empListDiv.innerHTML = "";
    //console.log(imageList);
   empListDiv.innerHTML+= `<option value="">Select Emp Code</option>`;
    empList.map((el)=>{
      empListDiv.innerHTML+=`</option><option  value="${el.emp_code}" >${el.emp_code}</option>`
    });

     $('.selectpicker').selectpicker('refresh'); 
     $('.selectpicker').selectpicker('render');

 


  });

});*/

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

// toDataURL('http://localhost/projects/eid_wockhardt/image/default.png', function(dataUrl) {
toDataURL('image/default.png', function (dataUrl) {
  uploadImgSrc = dataUrl;
})


function byId(id) {
  return document.getElementById(id);
}
function byClass(className) {
  return document.querySelector(`.${className}`);
}

/*$("#emp_code").change(function() {

    var emp_code = $("#emp_code").val().trim();


    var person = {
            emp_code: emp_code
        }

      
    $.ajax({
      type: "POST",
      url: "http://wockhardt.parinfotech.com/posterrakshabandhan/index.php/api/index/getempdata",
      data: JSON.stringify(person),
      dataType: 'json',
      contentType: "application/json",
    
      success:function(response){

          console.log(response.data.mobile);

          $("#name").val(response.data.mr_name);
          $("#phone").val(response.data.mobile);
          $("#hq").val(response.data.hq);
          $("#zone").val(response.data.zone);
      }
  });

  });*/

function submitForm(ev) {
  ev.preventDefault();
  let formElements = byId("userForm").elements;

  /*formData.mr_name = formElements[0].value;
  formData.mobile = formElements[1].value;
  formData.hq = formElements[2].value;*/
  // formData.emp_code = formElements[0].value;
  // formData.mr_name = formElements[1].value;
  // formData.mobile = formElements[2].value;
  // formData.hq = formElements[3].value;
  // formData.zone = formElements[4].value;

  formData.set('division', formElements[0].value)
  formData.set('zsm', formElements[1].value)
  formData.set('rm', formElements[2].value)
  formData.set('tm', formElements[3].value)
  formData.set('hq', formElements[4].value);

  byId("userFormDiv").style.display = 'none';
  byId("frameListPage").style.display = 'none';
  //byId("imageFormDiv").style.display = 'flex';
  byId("userSelection").style.display = 'flex';
  idx++;
}
var uploadedImg = 'default.jpg';
function readImgURL(input) {

  if (input.files && input.files[0]) {
    uploadedImg = input.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      uploadImgSrc = e.target.result;
    }

    reader.readAsDataURL(input.files[0]);
  }
}
$("#myfile").change(function () {
  readImgURL(this);
});

var checked = [];

function brandForm(ev) {

  ev.preventDefault();
  /*let formElements = byId("userSelectionForm").elements;

  console.log(formElements); */

  //  var form = document.getElementById('userSelectionForm');
  //   var chks = form.querySelectorAll('input[type="checkbox"]');
  //   var checked = [];
  //   for(var i = 0; i < chks.length; i++){
  //       if(chks[i].checked){
  //           checked.push(chks[i].value)
  //       }
  //   }
  //   console.log(checked);

  formData2.address = brandName = checked;
  formData.set('address', checked);

  byId("userSelection").style.display = 'none';
  byId("frameListPage").style.display = 'none';
  byId("imageFormDiv").style.display = 'flex';

}
// --------------------------------------------------------------------------------------------------------------------------------------
var numdiv;
// var checked = [];

function numbox(num, ckb) {
  numdiv = document.getElementById(num);
  var form = document.getElementById('userSelectionForm');
  var chks = form.querySelectorAll('input[type="checkbox"]');
  var ckbox = document.getElementById(ckb)
  var ckboxval = ckbox.value;

  if (checked.includes(ckboxval)) {

    checked.splice(checked.indexOf(ckboxval), 1)

    numdiv.innerHTML = '';
    numdiv.style.backgroundColor = 'rgba(204, 204, 204, 0.562)';
  }

  else {
    for (var i = 0; i < 6; i++) {
      if (chks[i].checked) {
        if (!checked.includes(chks[i].value)) {
          checked.push(chks[i].value)
        }
      }
    }

  }

  var b1 = document.getElementById("brand11").value
  var b2 = document.getElementById("brand22").value
  var b3 = document.getElementById("brand33").value
  var b4 = document.getElementById("brand44").value
  var b5 = document.getElementById("brand55").value
  var b6 = document.getElementById("brand66").value

  if (checked.includes(b1)) {
    document.getElementById("num1").innerHTML = checked.indexOf(b1) + 1
    document.getElementById("num1").style.backgroundColor = 'rgb(33 150 243)'
  }

  if (checked.includes(b2)) {
    document.getElementById("num2").innerHTML = checked.indexOf(b2) + 1
    document.getElementById("num2").style.backgroundColor = 'rgb(33 150 243)'

  }

  if (checked.includes(b3)) {
    document.getElementById("num3").innerHTML = checked.indexOf(b3) + 1
    document.getElementById("num3").style.backgroundColor = 'rgb(33 150 243)'

  }

  if (checked.includes(b4)) {
    document.getElementById("num4").innerHTML = checked.indexOf(b4) + 1
    document.getElementById("num4").style.backgroundColor = 'rgb(33 150 243)'

  }

  if (checked.includes(b5)) {
    document.getElementById("num5").innerHTML = checked.indexOf(b5) + 1
    document.getElementById("num5").style.backgroundColor = 'rgb(33 150 243)'

  }

  if (checked.includes(b6)) {
    document.getElementById("num6").innerHTML = checked.indexOf(b6) + 1
    document.getElementById("num6").style.backgroundColor = 'rgb(33 150 243)'

  }

}

// function imageFormSubmit(ev) {
//   ev.preventDefault();
//   $("body").removeClass("container");

//   byId("imageFormDiv").style.display = 'none';
//   byId("frameListPage").style.display = 'flex';
//   idx++;
//   let formElements = byId("imageForm").elements;
//   formData.doctor_name = imageName = formElements[0].value;
//   //formData.address = addressName = formElements[1].value;
//   //alert(uploadImgSrc);
//   if (uploadImgSrc == undefined) {

//     formData.user_image = 'default.jpg';

//   } else {
//     formData.user_image = uploadImgSrc.split("base64,")[1];
//   }
//   console.log(formData);

//   $.ajax({
//     type: "POST",
//     url: "http://65.0.77.129/eid_wockhardt_admin/index.php/api/index/adduserdata",
//     data: JSON.stringify(formData),
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     success: function (data) {
//       console.log(data);
//     }
//   });
// }

function imageFormSubmit(ev) {
  ev.preventDefault();
  $("body").removeClass("container");

  byId("imageFormDiv").style.display = 'none';
  byId("frameListPage").style.display = 'flex';
  idx++;
  // ------------------------------------------------------------------
  let formElements = byId("imageForm").elements;

  formData.set('doctor_name', formElements[0].value);
  imageName = formElements[0].value;

  // formData.set('language', formElements[0].value);


  addressName = formElements[1].value;
  formData.set('address', formElements[2].value)
  var myfile = $("#myfile").val();

  //alert(uploadImgSrc);
  // s3://mywockhardwebapp/wallpaperflare.com_wallpaper.jpg
  console.log("type of : " + $("input[type=file]")[0].files[0])
  if (uploadImgSrc == undefined) {
    // formData.user_image = 'default.jpg';
    formData.set("user_image", 'image/default.png');
  } else {
    // formData.user_image = uploadImgSrc.split("base64,")[1];
    formData.set("user_image", $("input[type=file]")[0].files[0]);
  }
  console.log("formdata " , formData);
  // Display the key/value pairs
  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }
  $.ajax({
    type: "POST",
    url: "http://65.0.77.129:4001/adduserdata",
    data: formData,
    dataType: "json",
    processData: false,
    contentType: false,
    success: function (data) {
      console.log(data);
    }
  });
}

function checkLengthdrName() {
  var textbox = document.getElementById("drName");
  if (textbox.value.length <= 25) {
    $("#dr_name_vali").html('');
    $("#dr_name_vali").css("color", "");
    $("#address").css({
      "border-color": "",
      "border-width": "",
      "border-style": ""
    });
    $('#registerbtn').removeAttr("disabled");
  }
  else {
    $("#dr_name_vali").html('max 25 characters Limit');
    $("#dr_name_vali").css("color", "red");
    $("#drName").css({
      "border-color": "red",
      "border-width": "1px",
      "border-style": "solid"
    });
    $('#registerbtn').prop('disabled', true);
  }
}

function checkLengthadd() {
  var textbox = document.getElementById("address");
  if (textbox.value.length <= 50) {
    $("#dr_address_vali").html('');
    $("#dr_address_vali").css("color", "");
    $("#address").css({
      "border-color": "",
      "border-width": "",
      "border-style": ""
    });
    $('#registerbtn').removeAttr("disabled");
  }
  else {

    $("#dr_address_vali").html('max 50 characters Limit');
    $("#dr_address_vali").css("color", "red");
    $("#address").css({
      "border-color": "red",
      "border-width": "1px",
      "border-style": "solid"
    });
    $('#registerbtn').prop('disabled', true);
  }
}


var divisionData = {};

function getzsm() {
  console.log("hello10");

  var divisionval = byId("division").value;
  console.log(divisionval);
  divisionData.division = division = divisionval;
  $.ajax("http://65.0.77.129:4001/getzsm", {
    method: "POST",
    //   url: "http://65.0.77.129/videocreat/index.php/api/index/adduserdatasingle",
    // url: "http://localhost:3000/addData/",
    data: { division: divisionval },
    dataType: "json",
    //   processData: false,
    //   contentType: false,
    success: function (data) {
      console.log("in success: -> " + data.data);
      let empList = data.data;
      console.log(empList);

      let empListDiv = document.getElementById("zsm");
      empListDiv.innerHTML = "";
      //console.log(imageList);
      empListDiv.innerHTML += `<option value="">Select ZSM</option>`;
      empList.map((el) => {
        empListDiv.innerHTML += `</option><option  value="${el}" >${el}</option>`;
      });
    },
    error: function (error) {
      console.log("error in " + error);
    },
  });
}

function getrm() {
  console.log("hello11");

  var zsmval = byId("zsm").value;

  divisionData.zsm = zsm = zsmval;

  $.ajax("http://65.0.77.129:4001/getrm", {
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(divisionData),
    success: function (data) {
      //console.log(response);

      let empList = data.data;
      // console.log(empList);

      let empListDiv = document.getElementById("rm");
      empListDiv.innerHTML = "";
      //console.log(imageList);
      empListDiv.innerHTML += `<option value="">Select RM</option>`;
      empList.map((el) => {
        empListDiv.innerHTML += `</option><option  value="${el}" >${el}</option>`;
      });
    },
  });
}

function gettm() {
  console.log("hello12");

  var rmval = byId("rm").value;

  divisionData.rm = rm = rmval;

  //console.log(divisionData);

  $.ajax("http://65.0.77.129:4001/gettm", {
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(divisionData),
    success: function (data) {
      let empList = data.data;

      let empListDiv = document.getElementById("tm");
      empListDiv.innerHTML = "";
      //console.log(imageList);
      empListDiv.innerHTML += `<option value="">Select TM</option>`;
      empList.map((el) => {
        empListDiv.innerHTML += `</option><option  value="${el}" >${el}</option>`;
      });
    },
  });
}

function gethq() {
  console.log("hello13");

  var tmval = byId("tm").value;

  divisionData.tm = tm = tmval;
  $.ajax("http://65.0.77.129:4001/gethq", {
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(divisionData),
    success: function (result) {
      let empList = result.data;

      // data.append("HQ", empList[0]);
      let empListDiv = document.getElementById("hq");
      empListDiv.innerHTML = "";
      //console.log(imageList);
      empListDiv.innerHTML += `<option value="">Select HQ</option>`;
      empList.map((el) => {
        empListDiv.innerHTML += `</option><option  value="${el}" >${el}</option>`;
      });
    },
  });
}

// function getzsm() {

//   var divisionData = {};

//   var divisionval = byId("division").value;

//   divisionData.division = division = divisionval;

//   //console.log(divisionData);

//   $.ajax({
//     type: "POST",
//     url: "http://65.0.77.129/wockhardt_dp_admin/index.php/api/index/getzsm",
//     data: JSON.stringify(divisionData),
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       //console.log(response);

//       let empList = response.data;
//       //console.log(empList);

//       let empListDiv = document.getElementById("zsm");
//       empListDiv.innerHTML = "";
//       //console.log(imageList);
//       empListDiv.innerHTML += `<option value="">Select ZSM</option>`;
//       empList.map((el) => {
//         empListDiv.innerHTML += `</option><option  value="${el.zsm}" >${el.zsm}</option>`
//       });

//     }
//   });

// }

// function getrm() {

//   var divisionData = {};

//   var zsmval = byId("zsm").value;

//   divisionData.zsm = zsm = zsmval;

//   //console.log(divisionData);

//   $.ajax({
//     type: "POST",
//     url: "http://65.0.77.129/wockhardt_dp_admin/index.php/api/index/getrm",
//     data: JSON.stringify(divisionData),
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       //console.log(response);

//       let empList = response.data;
//       console.log(empList.length);

//       if (empList.length == 1) {

//         document.getElementById("rm").removeAttribute("required");
//         document.getElementById("tm").removeAttribute("required");
//         document.getElementById("hq").removeAttribute("required");

//       } else {

//         document.getElementById("rm").setAttribute("required", "required");
//         document.getElementById("tm").setAttribute("required", "required");
//         document.getElementById("hq").setAttribute("required", "required");

//       }

//       let empListDiv = document.getElementById("rm");
//       empListDiv.innerHTML = "";
//       //console.log(imageList);
//       empListDiv.innerHTML += `<option value="">Select RM</option>`;
//       empList.map((el) => {
//         empListDiv.innerHTML += `</option><option  value="${el.rm}" >${el.rm}</option>`
//       });

//       let tm = document.getElementById("tm");
//       tm.innerHTML = `<option value="">Select TM</option>`;

//       let hq = document.getElementById("hq");
//       hq.innerHTML = `<option value="">Select HQ</option>`;


//     }
//   });

// }

// function gettm() {

//   var divisionData = {};

//   var rmval = byId("rm").value;

//   divisionData.rm = rm = rmval;

//   //console.log(divisionData);

//   $.ajax({
//     type: "POST",
//     url: "http://65.0.77.129/wockhardt_dp_admin/index.php/api/index/gettm",
//     data: JSON.stringify(divisionData),
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       let empList = response.data;

//       let empListDiv = document.getElementById("tm");
//       empListDiv.innerHTML = "";
//       //console.log(imageList);
//       empListDiv.innerHTML += `<option value="">Select TM</option>`;
//       empList.map((el) => {
//         empListDiv.innerHTML += `</option><option  value="${el.tm}" >${el.tm}</option>`
//       });
//     }
//   });

// }


// function gethq() {

//   var divisionData = {};

//   var tmval = byId("tm").value;

//   divisionData.tm = tm = tmval;

//   //console.log(divisionData);

//   $.ajax({
//     type: "POST",
//     url: "http://65.0.77.129/wockhardt_dp_admin/index.php/api/index/gethq",
//     data: JSON.stringify(divisionData),
//     dataType: 'json',
//     processData: false,
//     contentType: false,
//     success: function (response) {
//       let empList = response.data;
//       let empListDiv = document.getElementById("hq");
//       empListDiv.innerHTML = "";
//       //console.log(imageList);
//       empListDiv.innerHTML += `<option value="">Select HQ</option>`;
//       empList.map((el) => {
//         empListDiv.innerHTML += `</option><option  value="${el.hq}" >${el.hq}</option>`
//       });
//     }
//   });

// }