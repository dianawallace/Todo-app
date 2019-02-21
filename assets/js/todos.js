
// check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
  });
  




$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});