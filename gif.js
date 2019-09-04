$(document).ready(function(){

    //initial array of tv shows
    var myMovies = ["Bleach blade of faith", "hamtaro"];
    GIFArea = "";
    
    
    function makeButtons() {
        //deleting the myMovie buttons prior to adding new myMovie buttons
        $("#myMovies-view").empty();
        
        for (var i=0; i < myMovies.length; i++) {
        
        //     makes buttons for my movies
            
            var a = $('<button>');

            a.text(myMovies[i]);

            a.attr('data-name', myMovies[i]);

            a.addClass('myMovie');

            $("#myMovies-view").append(a);
        }
    
    };
    
    makeButtons();
    
//     on a button click
    $("#add-myMovie").on('click', function() {
    
    //disables auto submit
    event.preventDefault();
    
//     gets text from the input
    var myMovie = $("#myMovie-input").val().trim();
    
//     inserts the data in the input into the array
    myMovies.push(myMovie);
    makeButtons();
    
    });
    
// on click
        $(document).on('click', 'button',  function() {

                $('#movieZone').empty(); 
                var b = $(this).attr('data-name');		
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + b + "&api_key=2lAj4yexlAt2PET5OG0M2Lsx29Kel7ip=12";  
    
                
                $.ajax({
                        url: queryURL,
                        method: 'GET'
                    })
                    .done(function(response) {
                        console.log(response);
                        var results = response.data;
                        for (var i = 0; i < results.length; i++) {
                        var gim = $('<img>');   
                            gim.attr('src', results[i].images.fixed_height_still.url)
                                    .attr('data-still', results[i].images.fixed_height_still.url)
                                    .addClass("showImage");
                            gim.append(r)
                              	                    
    
              
                        }
    
                    })
                });