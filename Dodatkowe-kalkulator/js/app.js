var companyLi = document.getElementById('menu_company');
var companySubmenu = document.getElementById('sub_container');
// var chairToChooseWindow = document.getElementsByClassName('.chair_dimensions');

//box with chair info
var chairLeft = document.getElementById("chair-left");
var chairRight = document.getElementById("chair-right");
//bars with chair name
var barLeft = document.getElementById("bar-left");
var barRight = document.getElementById("bar-right");

//pictures slider - Node List
var sliderPic = document.querySelectorAll(".slider img");
//arrows
var arrows = document.querySelectorAll(".arrow"),

    previousArr = document.getElementById("previousArr"),
    nextArr = document.getElementById("nextArr");


console.log(sliderPic);


//Show company submenu after hoover on company
companyLi.addEventListener('mouseover', function () {
    companySubmenu.style.display = "block";
});
//Hide submenu after mouseout of submenu div container
companySubmenu.addEventListener('mouseout', function () {
    companySubmenu.style.display = "none";
});


//Hide & show again block with chair name (LEFT)
chairLeft.addEventListener('mouseover', function () {
    barLeft.style.display = "none";
});
//show right again
chairLeft.addEventListener('mouseout', function () {
    barLeft.style.display = "block";
});

//Hide & show again block with chair name (RIGHT)
chairRight.addEventListener('mouseover', function () {
    barRight.style.display = "none";
});
//show left again
chairRight.addEventListener('mouseout', function () {
    barRight.style.display = "block";
});

// ONLY FOR 2 PICTURES
//changing showing next/previous
// arrows.forEach(function (arrow) {
//     arrow.addEventListener('click', function () {
//         sliderPic.forEach(function (pic) {
//             if(pic.style.display === "block"){
//                 pic.style.display = "none";
//             } else {
//                 pic.style.display = "block";
//             }
//         });
//     });
// });



var sliderPicArray = [];
sliderPic.forEach(function (pic) {
    sliderPicArray.push(pic);
}) ;

//sets necessery style display value for each img (DOES NOT WORK WITH CSS STYLE ONLY! WHY?)
for(var i = 0; i < sliderPicArray.length; i++) {
    if(i === 0) sliderPicArray[i].style.display = 'block';
    else sliderPicArray[i].style.display = "none";
}

console.log(sliderPicArray);


previousArr.addEventListener('click', function () {
    debugger;
    for (var i = 0; i < sliderPicArray.length; i++) {
        // console.log(sliderPicArray[i]);
        if(sliderPicArray[i].style.display === "block") {
            sliderPicArray[i].style.display = "none";
            if (i === 0) {
                sliderPicArray[sliderPicArray.length - 1].style.display = "block";
                break;
            } else {
                sliderPicArray[i - 1].style.display = "block";
                break;
            }
        }
    }
});

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
    summaryTransport.innerText = this.checked? "transport" : "";
    //add transport price
    transportValue.innerText = this.dataset.price;
    //print sum of all values - after each change-refreshed
    sumValue.innerText = sumAll();
});


// Sum all cost of checked items - panel right summary
function sumAll(){
    var sum = 0;
    var priceValues = document.querySelectorAll('.price_values');
    priceValues.forEach(function (value) {
        sum += Number(value.innerText);
    });


    return sum+" zl";
}

console.log(sumAll());




