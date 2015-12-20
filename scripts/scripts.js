$(function() {

var currentElement = -1;

function getCurrentElement() {
  var currentPosition = $('html').scrollTop();
  if (currentPosition == 0) // this seems to happen in chrome
  	currentPosition = $('body').scrollTop();
  var pageHeight = $('#thumbnailNavigation').height() + 50;
  var introHeight = $('#introduction').height();
  var calculatedElement = Math.floor((currentPosition - introHeight + pageHeight*0.2) / pageHeight);
  if (calculatedElement < 0)
  	calculatedElement = 0;
  //console.log(currentPosition + "; ( " + currentPosition + " - " + introHeight + " - " + pageHeight*0.2 + " ) / " + pageHeight + " = " + calculatedElement);
  if (calculatedElement > $( '#thumbnailNavigation>ul>li').length)
  	calculatedElement = $( '#thumbnailNavigation>ul>li').length;
  return calculatedElement;
}

$(window).scroll(function(e) {
  var newElement = getCurrentElement();
  if (newElement != currentElement)
  {
  	var oldElementParent = $( '#thumbnailNavigation>ul>li').eq(currentElement);
    currentElement = newElement;
    var elementParent = $( '#thumbnailNavigation>ul>li').eq(currentElement);

    oldElementParent.removeClass("active");
    elementParent.addClass("active");

    // Update the address
  	var link = elementParent.find('a');
  	var href = link.attr('href');
  	history.replaceState(null, null, href)
    moveSidebar();
  }
});

function moveSidebar(elementId) {
  var constSidebarOffset = 50;
  var thumbSize = 50;

  var pageLength = $('html').height();
  if (pageLength == 0) // this seems to happen in chrome
    pageLength = $('body').height();

  var pageHeight = $(window).height();
  var sidebarLength = $('#thumbnailNavigation>ul').height();

  console.log("Sidebar L: " + sidebarLength + "; Page H: " + pageHeight + "; Page L: " + pageLength);
  if (sidebarLength <= pageHeight)
    return;


  var maxPageScroll = pageLength - pageHeight;
  var maxSidebarOffset = sidebarLength - pageHeight + constSidebarOffset;

  // Using thumb ID
  var allThumbs = $('#thumbnailNavigation>ul>li').length;
  var maxVisibleThumbs = (pageHeight - constSidebarOffset) / thumbSize;
  var maxScrollThumb = allThumbs - maxVisibleThumbs;
  var currentVisibleThumb = maxScrollThumb * currentScrollPosition / maxPageScroll;
  var roundedCurrentVisibleThumb = Math.round(currentVisibleThumb);
  console.log("Tn: " + allThumbs + "; Tm: " + maxVisibleThumbs + "; Ts: " + maxScrollThumb + "; Tc = " + currentVisibleThumb + " ~" + roundedCurrentVisibleThumb);
  var currentOffset = -constSidebarOffset + thumbSize * roundedCurrentVisibleThumb;

  // Using scroll position:
  /*
  var currentScrollPosition = $('html').scrollTop();
  if (currentScrollPosition == 0) // this seems to happen in chrome
    currentScrollPosition = $('body').scrollTop();
  var currentOffset = -constSidebarOffset + maxSidebarOffset * currentScrollPosition / maxPageScroll;
  console.log("Max sidebar offset: " + maxSidebarOffset + "; Max page scroll: " + maxPageScroll + "; Current scroll: " + currentScrollPosition + "; Result = " + currentOffset);
*/

  $('#thumbnailNavigation').css('top', -currentOffset);

}

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