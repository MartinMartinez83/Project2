$(document).ready(() =>{
    //function for viewing all sales, this might just be a simple function to pull everything
    $.get("api/items").then(data =>{
        $(".itmes").text(data.items)
    })





})