$("a").on("click", function (event) { 
     $(this).css("background-color", "red")

     event.preventDefault()
})


$("p").on("click", function () { 
     $(this).css("background-color", "#fff182")
})


// $("header").hide()
// $("a.show-menu").on("click", function (event) { 
//      $("header").fadeToggle(500)
// event.preventDefault() })
