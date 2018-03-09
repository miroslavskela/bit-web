$(function () {

        $('.users').append($("<ul>"))

            var buttonSearch = $('#button-search');
            buttonSearch.on('click', function (event) {
                    event.preventDefault();
                    var username = $('#search').val();
                    console.log(username);

                    var request = $.ajax({
                        url: "https://api.github.com/search/users?q=" + username,
                        method: "GET",
                    });

                    request.done(function (response) {
                        console.log( response);
                        response.items.forEach(function(items){
                            var $liItem = $("<img>")
                            var $liLogin = $("<p>")
                            $liItem.attr('src',items.avatar_url) 
                            $liLogin.text(items.login)
                            $liItem.append($liLogin)
                            $('ul').append($liLogin)
                        });
                        
                    });

                    request.fail(function (jqXHR, textStatus) {
                        alert("Request failed: " + textStatus);
                    });
                }
)})
        