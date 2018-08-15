var companyLi = document.getElementById('menu_company');
var companySubmenu = document.getElementById('sub_container');
// var chairToChooseWindow = document.getElementsByClassName('.chair_dimensions');

//pictures slider - Node List
var sliderPic = document.querySelectorAll(".slider img");



console.log(sliderPic);

// SUBMENU COMPANY (Show/Slide Down) after mouseenter
$('#menu_company').on('mouseenter',()=>{
    $('#sub_container').slideDown();
});
//SUBMENU COMPANY Hide after mouseleave
$('#sub_container').on('mouseleave', event =>{
    $(event.currentTarget).slideUp();
});


//CHAIR TO CHOOSE - hide/show chair bar on mouse enter/leave (LEFT)
$('#chair-left').on('mouseenter mouseleave', ()=>{
    $('#bar-left').fadeToggle();
});

//CHAIR TO CHOOSE - hide/show chair bar on mouse enter/leave (RIGHT)
$('#chair-right').on('mouseenter mouseleave', ()=>{
    $('#bar-right').fadeToggle();
});



const picArr =[...$('.slider_pic_container img')];
picArr.hide();
$(picArr[1]).show();


$('#previousArr').on('click', ()=>{
    for (var i = 0; i < picArr.length; i++) {
        // console.log(sliderPicArray[i]);
        if(picArr[i].style.display === "block") {
            // sliderPicArray[i].style.display = "none";
            $(picArr[i]).hide();
            if (i === 0) {
                // sliderPicArray[sliderPicArray.length - 1].style.display = "block";
                $(picArr[picArr.length - 1]).show();
                break;
            } else {
                // sliderPicArray[i - 1].style.display = "block";
                $(picArr[i - 1]).show();
                break;
            }
        }
    }
})


//----------Dropdown list show / hide

var dropdownLists = document.querySelectorAll(".drop_down_list"),
    panelLists = document.querySelector(".list_panel");

// add listener to each dropdown list, show/hide sublist on click
dropdownLists.forEach(function (list) {
    var panelList = list.querySelector("ul");
    panelList.style.display = 'none';
    list.addEventListener('click', function () {
        if (panelList.style.display === "none") {
            panelList.style.display = "block";
        } else {
            panelList.style.display = "none";
        }
    });
});

//---------- Costs / Summary

var chairPanelList = document.querySelectorAll(".chair_panel li"),
    colorPanelList = document.querySelectorAll(".color_panel li"),
    fabric_panel = document.querySelectorAll(".fabric_panel li"),
    //fields right panel
    summaryTitle = document.getElementById('title'),
    summaryColor = document.getElementById('color'),
    summaryPattern = document.getElementById('pattern'),
    summaryTransport = document.getElementById('transportN'),
    //value fields right panel
     titleValue = document.getElementById('title value'),
     colorValue = document.getElementById('color value'),
     patternValue = document.getElementById('pattern value'),
     transportValue = document.getElementById('transport value'),
     sumValue = document.getElementById('sum');



// for (var i = 0; i < chairPanelList.length; i++) {
//     chairPanelList[i].addEventListener('click', function () {
//         switch (i){
//             case 0:
//                 document.
//         }
//     })
// }


//for choosen item from Chair-Kind-Sublist, add its inner tekst to the summary left panel
chairPanelList.forEach(function (li) {
    li.addEventListener('click', function () {
        //summary Chair name equals chosen chair form sublist
        summaryTitle.innerText = "Chair " +  this.innerText;
        //price of chair equals this assigned in dataset data-price
        titleValue.innerText = this.dataset.price;
        //print sum of all values - after each change refreshed
        sumValue.innerText = sumAll();

    });


});

//for choosen item from Color-sublist, add its inner tekst to the summary left panel
colorPanelList.forEach(function (li) {
    li.addEventListener('click', function () {
        summaryColor.innerText =  this.innerText;
        //price of chair equals one thats assigned to this li in dataset
        colorValue.innerText = this.dataset.price;
        //print sum of all values - after each change refreshed
        sumValue.innerText = sumAll();
    });

});

//for choosen item from Fabric-sublist, add its inner tekst to the summary left panel
fabric_panel.forEach(function (li) {
    li.addEventListener('click', function () {
        summaryPattern.innerText = "Chair " +  this.innerText;
        //price of chair equals this assigned in dataset data-price
        patternValue.innerText = this.dataset.price;
        //print sum of all values - after each change refreshed
        sumValue.innerText = sumAll();
    });
});


//checkbox - while checked, add "transport" to the summary left panel
document.getElementById('transport').addEventListener('change', function () {
    // summaryTransport.innerText = this.checked? "transport" : "";
    // //add transport price
    // transportValue.innerText = this.checked? this.dataset.price : "";
    // //print sum of all values - after each change-refreshed
    if(this.checked){
        summaryTransport.innerText = "transport";
        transportValue.innerText = this.dataset.price;
    } else {
        summaryTransport.innerText = '';
        transportValue.innerText = '';
    }


    sumValue.innerText = sumAll();
});


// Sum all cost of checked items - panel right summary
function sumAll(){
    var sum = 0;
    var priceValues = document.querySelectorAll('.price_values');
    priceValues.forEach(function (value) {
        sum += Number(value.innerText);
    });
    if (sum === 0){
        return "";
    } else return sum+" zl";
}

console.log(sumAll());




