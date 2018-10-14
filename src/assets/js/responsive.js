// $("#close-img").click(function() {
//   //   alert("Hello World");
//   $("#navbarResponsive").removeClass("show");
// });

// $('#close-img').click(function() {
//   $("#navbarResponsive").toggleClass('hidee');
// //   $("#navbarResponsive").removeClass('show');
// });

$('.navbar-collapse').click(function() {
  $("#navbarResponsive").toggleClass('hidee');
  $("#navbarResponsive").removeClass('show');
});

$(".navbar-toggler").click(function() {
  $("#navbarResponsive").removeClass('hidee');
//   $("#navbarResponsive").addClass('show');
});