$(function () {
    $('.users').append($("<div class='github'>"))
    var  $github = $('.github')

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
                            var $div = $('<div class="user1">')
                            var $liItem = $("<img>")
                            var $liLogin = $("<p>")
                            var $storage = localStorage.setItem(JSON.stringify(items), JSON.stringify(items.avatar_url))
                            $liItem.attr('src',items.avatar_url) 
                            $liLogin.text(items.login)
                            $div.append($liItem)
                            $div.append($liLogin)
                            $github.append($div)
                        });
                        
                    });

                    request.fail(function (jqXHR, textStatus) {
                        alert("Request failed: " + textStatus);
                    });
                }
)})
        