$(function() {

var currentElement = -1;

function getCurrentElement() {
  var currentPosition = $('html').scrollTop();
  var elementHeight = $('#thumbnailNavigation').height() + 50;
  console.log(currentPosition + "; " + (currentPosition + elementHeight * 0.5) + " / " + elementHeight + " = " + Math.floor((currentPosition + elementHeight * 0.5) / elementHeight));
  return Math.floor((currentPosition) / elementHeight); // add one to acommodate for the intro
}

function getElementY(index) {
  var elementHeight = $('#thumbnailNavigation').height() + 50;
  return index * elementHeight;
}

$(window).scroll(function(e) {
  var newElement = getCurrentElement();
  if (newElement != currentElement)
  {
    currentElement = newElement;
    var elementParent = $( '#thumbnailNavigation>ul>li').eq(newElement);
    elementParent.stop().fadeOut(300).fadeIn(300);
    setTimeout(function() {
      elementParent.css('background: red;');
    }, 300);
  }
});

function scrollToElement(href) {
  console.log(href);
  $('html, body').stop().animate({
      scrollTop: $( href ).offset().top
  }, 600, function () {
    window.location.hash = href;
  });
}

$('.previous').click(function(e){
  e.preventDefault();
  var id = getCurrentElement() - 1;
  if (id < 0)
    return;
  var thumb = $( '#thumbnailNavigation>ul>li').eq(id);
  var link = thumb.find('a');
  var href = link.attr('href');
  scrollToElement(href);
  return false;
});

$('.next').click(function(e){
  e.preventDefault();
  var id = getCurrentElement() + 1;
  if (id >= $( '#thumbnailNavigation>ul>li').length)
    id = 0;
  var thumb = $( '#thumbnailNavigation>ul>li').eq(id);
  var link = thumb.find('a');
  var href = link.attr('href');
  scrollToElement(href);
  return false;
});

$('#thumbnailNavigation a').click(function(e){
  e.preventDefault();
  var href = $.attr(this, 'href');
  scrollToElement(href);
  return false;
});

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-33130950-1', 'auto');
ga('send', 'pageview');