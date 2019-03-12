$.getJSON('https://api.unsplash.com/users/semiao/likes/?client_id=451263dd0c6e9e47020e2497e24f5488955330ec16eff5cb08ef5b281c0cf9a2', function (data) {
    console.log(data);

    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
        var description = value.description;
        var imageURL = value.urls.regular;

       // $('.name').text(name);
       // $('.image img').attr('src', imageURL);

        $('.output1').append('<h2 class="name1">' + name + '</h2><h3 class="description1">' + description + '</h3><div class="image1"><img src="' + imageURL + '"/></div>');
        
    });
});

$.getJSON('https://api.unsplash.com/users/semiao/photos/?client_id=451263dd0c6e9e47020e2497e24f5488955330ec16eff5cb08ef5b281c0cf9a2', function (data) {
    console.log(data);

    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
        var imageURL = value.urls.regular;

       // $('.name').text(name);
       // $('.image img').attr('src', imageURL);

        $('.output2').append('<h2 class="name2">' + name + '</h2><div class="image2"><img src="' + imageURL + '"/></div>');
        
    });
});