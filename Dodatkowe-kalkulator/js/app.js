var companyLi = document.getElementById('menu_company');
var companySubmenu = document.getElementById('sub_container');
// var chairToChooseWindow = document.getElementsByClassName('.chair_dimensions');

//box with chair info
var chairLeft = document.getElementById("chair-left");
var chairRight = document.getElementById("chair-right");
//bars with chair name
var barLeft = document.getElementById("bar-left");
var barRight = document.getElementById("bar-right");



//Show company submenu after hoover on company
companyLi.addEventListener('mouseover', function () {
    companySubmenu.style.display = "block";
});
//Hide submenu after mouseout of submenu div container
companySubmenu.addEventListener('mouseout', function () {
    companySubmenu.style.display = "none";
} );


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

