var api_url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=659655399fe447078d65a6983bfe8e9d';

const Http = new XMLHttpRequest();
const url = api_url;
Http.open("GET", url);
Http.send();


Http.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        var data = JSON.parse(Http.responseText);

        console.log(data);

        for (article of data.articles) {


            $('#mainContent').append('<a href="' + article.url + '">' +
                '<div class="col s12"><div class="card"><div class="card-image waves-effect waves-block waves-light">' +
                '<img class="activator" src="' + article.urlToImage + '">' +
                '</div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + article.title + '</span></div></div></div></a>');


        }


    }
}


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/live?timezone=London",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "dffbece87bmshe3e1d7524115d95p12b070jsnb41e6e4dd86e"
  }
}

$.ajax(settings).done(function (response) {
  console.log("hell this is the", response);

 response.summaries.forEach(function (obj) {

                    $('#sports').append(
                        '<h2>' + obj.sport_event.sport_event_context.sport.name + ' ' +
                         obj.sport_event.competitors[0].name + ' Vs ' +
                         obj.sport_event.competitors[1].name + ' ' +
                        '</h2>' +
                        '<h3>' + obj.sport_event.start_time + '</h3>' +
                        '<br>' +
                        '<h3>' + obj.sport_event.start_time_status + '</h3>' +
                        '<br>'

                    );

                });
      

                });



$.ajax({
  headers: { 'X-Auth-Token': 'f6dacb4f2b9c4d6eaf82dab338cac133' },
  url: 'http://api.football-data.org/v2/matches?status='LIVE',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource   
  console.log(response);
});