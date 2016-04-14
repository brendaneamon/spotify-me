// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(document).ready(function(){
  var url = "https://api.spotify.com/v1/search?q=Rush&type=artist";
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response);
  }).fail(function(err){
    console.log(err);
  });

});

function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}
