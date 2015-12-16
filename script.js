var media = document.getElementById('media');

$('.track').bind('click', function() {
  $('#play').html( $(this).html() );
  $("#media").attr("src", $(this).attr("data-url") );
  media.play(); 
});

$('#play').bind('click', function() {
  console.log("play ",media)
  media.currentTime = $("#start").val();
  media.play(); 
});


$('.nudge').bind('click', function() {
  media.currentTime += 1*$(this).attr("data-amount");
});

setInterval(function(){
  $("#current").val( Math.round(media.currentTime) );
}, 200);