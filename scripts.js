console.log("Hello");
// function menuOnClick() {
//     console.log("hellopr rrrr rrrr");
//     $(document).ready(function () {
//         $(".navbar-nav").click(function () {
//             $("li").hide();
//         });
//         console.log("hellopp pppppppp");
//     }
//     )}
//   $(".navbar-nav").click(function(){
//     $("li").show();
//   });
// });
// $(document).on('click', function () {
//     console.log("Hello2");
//     $('#n_bar').collapse('hide');
//     console.log("Hello3");
// });
function menuOnClick() {
    $(n_bar).on('click', function () {
        console.log("Hello2");
        $('#n_bar').collapse('hide');
        console.log("Hello3");

    });
}


// var close_button = document.querySelector(".close-button");
// var social_buttons = document.querySelectorAll(".social");

// close_button.addEventListener('click',()=>{
//    social_buttons.forEach(function(buttons){
//        buttons.classList.toggle('hide');
//    });
// });
    // console.log("Hellodddsssssssss");
    // console.log(document.getElementsByClassName("navbar-nav")).innerHtml;
    // document.getElementsByClassName("navbar-nav").classList.toggle("change");
    // document.getElementById("navbar-nav").classList.toggle("change");
    // document.getElementById("menu-bg").classList.toggle("change-bg");
