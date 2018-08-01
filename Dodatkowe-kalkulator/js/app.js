var companyLi = document.getElementById('menu_company');
var companySubmenu = document.getElementById('sub_container');


//Show company submenu after hoover on company
companyLi.addEventListener('mouseover', function () {
    companySubmenu.style.display = "block";
});

companySubmenu.addEventListener('mouseout', function () {
    companySubmenu.style.display = "none";
} );