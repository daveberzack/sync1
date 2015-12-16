var media = document.getElementById('media');

var isPlaying = false;

$('#play').bind('click', function() {
  if (isPlaying) doStop();
  else doPlay();
});

function doStop() {
  isPlaying=false;
  $("#play").attr("src", "play.png");
  $("#media").attr("src", "" );
  media.currentTime = 0;
  clearInterval(playInterval);
  $("#current").val( "0.0" );
}

function doPlay(){
  isPlaying=true;
  $("#play").attr("src", "stop.png");
  $("#media").attr("src", "test.mp3" );
  media.currentTime = $("#current").val();
  media.play();
  
  playInterval = setInterval(function(){
    $("#current").val( media.currentTime.toFixed(1) );
  }, 100); 
}

$('.nudge').bind('click', function() {
  media.currentTime += 1*$(this).attr("data-amount");
});

var playInterval = 0;

