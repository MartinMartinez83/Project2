$(document).ready(()=>{
//variables
    const searchForm = $("")

//function for posting a sale, this s
function postSale() {
$("#landingpost").on("click");{
    window.location.href="postSale.html"
}
postSale();

//function for searching a sale
function searchSale() {
$("#landingSearch").on("click"); {
    window.location.href="viewSale.html"
}
}
searchSale();
//function for loggining in
function loginPage() {
    $("landinglogin").on("click");
    window.location.href="/login.html";

}
loginPage();
//function for non navbar search, this should pull up all sales
function searchSales(){

}
searchSales();



//function for non navbar post , this should direct to login
// function loginPages(){}





















}
})