var media = document.getElementById('media');

$('#play').bind('click', function() {
  $("#media").attr("src", "trip.mp3" );
  media.currentTime = $("#start").val();
  media.play(); 
});
$('#stop').bind('click', function() {
  $("#media").attr("src", "" );
});

$('.nudge').bind('click', function() {
  media.currentTime += 1*$(this).attr("data-amount");
});

setInterval(function(){
  $("#current").val( Math.round(media.currentTime*10)/10 );
}, 100);