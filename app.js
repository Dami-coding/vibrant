$(document).ready(function(){
  initialize();
});


function initialize() {
 // $('#myModal').modal('');


 (function ($) {
  "use strict";
     
     $( document ).on( "mousemove", function( event ) {
         $(".circle" ).animate({
             top: event.pageY-($(".circle").height()/2),
             left: event.pageX-($(".circle").width()/2)
         }, 0, "linear");
     });
     
 })(jQuery)

 $('#belvita').popover('toggle')


 jQuery(document).ready(function ($) {

   $('#checkbox').change(function(){
     setInterval(function () {
         moveRight();
     }, 3000);
   });
   
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
     $('#slider ul li:last-child').prependTo('#slider ul');

     function moveLeft() {
         $('#slider ul').animate({
             left: + slideWidth
         }, 200, function () {
             $('#slider ul li:last-child').prependTo('#slider ul');
             $('#slider ul').css('left', '');
         });
     };

     function moveRight() {
         $('#slider ul').animate({
             left: - slideWidth
         }, 200, function () {
             $('#slider ul li:first-child').appendTo('#slider ul');
             $('#slider ul').css('left', '');
         });
     };

     $('a.control_prev').click(function () {
         moveLeft();
     });

     $('a.control_next').click(function () {
         moveRight();
     });

 });    


  }