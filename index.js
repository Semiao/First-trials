$.getJSON('https://api.unsplash.com/users/semiao/likes/?client_id=451263dd0c6e9e47020e2497e24f5488955330ec16eff5cb08ef5b281c0cf9a2', function (data) {

    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
      //  var description = value.description;
        var imageURL = value.urls.regular;

       // $('.name').text(name);
       // $('.image img').attr('src', imageURL);

        $('.output1').append('<h2 class="name1">Photographer: ' + name + '</h2><div class="image1"><img src="' + imageURL + '"/></div>');
        
    });
});

$.getJSON('https://api.unsplash.com/users/semiao/photos/?client_id=451263dd0c6e9e47020e2497e24f5488955330ec16eff5cb08ef5b281c0cf9a2', function (data) {

    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
        var imageURL = value.urls.regular;

       // $('.name').text(name);
       // $('.image img').attr('src', imageURL);

        $('.output2').append('<h2 class="name2">' + name + '</h2><div class="image2"><img src="' + imageURL + '"/></div>');
        
    });
});

// weatherbit key: 6062224adb9c4961bc241e9b13c9e2df

$(document).ready(function(){
    $('#submitWeather').click(function(){
        let city = $('#city').val();
        let country = $('#country').val();

        if (city != '') {

            $.getJSON('http://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&country=' + country + '&key=6062224adb9c4961bc241e9b13c9e2df', function (data) {
                console.log(data);

                let widget = show(data);
                $('#show').html(widget);
                //$('#city').val('');

            });

        } else {
            $('error').html('Field cannot be empty');
        }

    });
        


    function show(data){

        let dia1 = null;
        let dia2 = null;
        let dia3 = null;
        let dia4 = null;
        let dia5 = null;

        for (let i=0; i<5; i++) {

            if (i === 0) {
                dia1 = '<h3><strong>Date</strong>: ' + data.data[i].valid_date + '</h3>' +
                '<img src=https://www.weatherbit.io/static/img/icons/' + data.data[i].weather.icon + '.png>' +
                '<h4><strong>Weather</strong>: ' + data.data[i].weather.description + '</h4>' +
                '<h4><strong>Average Temperature</strong>: ' + data.data[i].temp + ' ºC</h4>' +
                '<h4><strong>Max Temeprature</strong>: ' + data.data[i].max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temperature</strong>: ' + data.data[i].min_temp + ' ºC</h4>' +
                '<h4><strong>Max Temp Feeled</strong>: ' + data.data[i].app_max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temp Feeled</strong>: ' + data.data[i].app_min_temp + ' ºC</h4>' +
                '<h4><strong>Wind Speed</strong>: ' + parseInt((data.data[i].wind_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Gusts</strong>: ' + parseInt((data.data[i].wind_gust_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Direction</strong>: ' + data.data[i].wind_cdir_full + '</h4>' +
                '<h4><strong>Probability of Precipitation</strong>: ' + data.data[i].pop + ' %</h4>' +
                '<h4><strong>Precipitation</strong>: ' + data.data[i].precip + ' mm</h4>'
            
            } else if (i === 1) {
                dia2 = '<h3><strong>Date</strong>: ' + data.data[i].valid_date + '</h3>' +
                '<img src=https://www.weatherbit.io/static/img/icons/' + data.data[i].weather.icon + '.png>' +
                '<h4><strong>Weather</strong>: ' + data.data[i].weather.description + '</h4>' +
                '<h4><strong>Average Temperature</strong>: ' + data.data[i].temp + ' ºC</h4>' +
                '<h4><strong>Max Temeprature</strong>: ' + data.data[i].max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temperature</strong>: ' + data.data[i].min_temp + ' ºC</h4>' +
                '<h4><strong>Max Temp Feeled</strong>: ' + data.data[i].app_max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temp Feeled</strong>: ' + data.data[i].app_min_temp + ' ºC</h4>' +
                '<h4><strong>Wind Speed</strong>: ' + parseInt((data.data[i].wind_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Gusts</strong>: ' + parseInt((data.data[i].wind_gust_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Direction</strong>: ' + data.data[i].wind_cdir_full + '</h4>' +
                '<h4><strong>Probability of Precipitation</strong>: ' + data.data[i].pop + ' %</h4>' +
                '<h4><strong>Precipitation</strong>: ' + data.data[i].precip + ' mm</h4>'

            } else if (i === 2) {
                dia3 = '<h3><strong>Date</strong>: ' + data.data[i].valid_date + '</h3>' +
                '<img src=https://www.weatherbit.io/static/img/icons/' + data.data[i].weather.icon + '.png>' +
                '<h4><strong>Weather</strong>: ' + data.data[i].weather.description + '</h4>' +
                '<h4><strong>Average Temperature</strong>: ' + data.data[i].temp + ' ºC</h4>' +
                '<h4><strong>Max Temeprature</strong>: ' + data.data[i].max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temperature</strong>: ' + data.data[i].min_temp + ' ºC</h4>' +
                '<h4><strong>Max Temp Feeled</strong>: ' + data.data[i].app_max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temp Feeled</strong>: ' + data.data[i].app_min_temp + ' ºC</h4>' +
                '<h4><strong>Wind Speed</strong>: ' + parseInt((data.data[i].wind_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Gusts</strong>: ' + parseInt((data.data[i].wind_gust_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Direction</strong>: ' + data.data[i].wind_cdir_full + '</h4>' +
                '<h4><strong>Probability of Precipitation</strong>: ' + data.data[i].pop + ' %</h4>' +
                '<h4><strong>Precipitation</strong>: ' + data.data[i].precip + ' mm</h4>'

            } else if (i === 3) {
                dia4 = '<h3><strong>Date</strong>: ' + data.data[i].valid_date + '</h3>' +
                '<img src=https://www.weatherbit.io/static/img/icons/' + data.data[i].weather.icon + '.png>' +
                '<h4><strong>Weather</strong>: ' + data.data[i].weather.description + '</h4>' +
                '<h4><strong>Average Temperature</strong>: ' + data.data[i].temp + ' ºC</h4>' +
                '<h4><strong>Max Temeprature</strong>: ' + data.data[i].max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temperature</strong>: ' + data.data[i].min_temp + ' ºC</h4>' +
                '<h4><strong>Max Temp Feeled</strong>: ' + data.data[i].app_max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temp Feeled</strong>: ' + data.data[i].app_min_temp + ' ºC</h4>' +
                '<h4><strong>Wind Speed</strong>: ' + parseInt((data.data[i].wind_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Gusts</strong>: ' + parseInt((data.data[i].wind_gust_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Direction</strong>: ' + data.data[i].wind_cdir_full + '</h4>' +
                '<h4><strong>Probability of Precipitation</strong>: ' + data.data[i].pop + ' %</h4>' +
                '<h4><strong>Precipitation</strong>: ' + data.data[i].precip + ' mm</h4>'

            } else {
                dia5 = '<h3><strong>Date</strong>: ' + data.data[i].valid_date + '</h3>' +
                '<img src=https://www.weatherbit.io/static/img/icons/' + data.data[i].weather.icon + '.png>' +
                '<h4><strong>Weather</strong>: ' + data.data[i].weather.description + '</h4>' +
                '<h4><strong>Average Temperature</strong>: ' + data.data[i].temp + ' ºC</h4>' +
                '<h4><strong>Max Temeprature</strong>: ' + data.data[i].max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temperature</strong>: ' + data.data[i].min_temp + ' ºC</h4>' +
                '<h4><strong>Max Temp Feeled</strong>: ' + data.data[i].app_max_temp + ' ºC</h4>' +
                '<h4><strong>Min Temp Feeled</strong>: ' + data.data[i].app_min_temp + ' ºC</h4>' +
                '<h4><strong>Wind Speed</strong>: ' + parseInt((data.data[i].wind_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Gusts</strong>: ' + parseInt((data.data[i].wind_gust_spd)*3.6) + ' km/h</h4>' +
                '<h4><strong>Wind Direction</strong>: ' + data.data[i].wind_cdir_full + '</h4>' +
                '<h4><strong>Probability of Precipitation</strong>: ' + data.data[i].pop + ' %</h4>' +
                '<h4><strong>Precipitation</strong>: ' + data.data[i].precip + ' mm</h4>'
            }
   
        }

        return '<h2 class="center"> Current Weather for ' + data.city_name + ', ' + data.country_code + '</h2><div class="meteo_data">' 
                + dia1 + dia2 + dia3 + dia4 + dia5 + '</div>';

    }
});