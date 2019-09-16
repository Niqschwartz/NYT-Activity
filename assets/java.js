$(document).ready(function(){
    
console.log('helloooo!!')

function doSearch () {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $('#searchTerm').val() +" &begin_date=" + $('#startYear').val()+ "0101&end_date="+$('#endYear').val() +"1231&api-key=zeDGXML8ZxCkr6AXUq6HJj00s2cVMxKa"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(whatWeGotBack){
        console.log('did we get anything back ?', whatWeGotBack.response.docs[0].byline.original);
        for(var i = 0; i < whatWeGotBack.response.docs.length; i++) {
            console.log('i ??', i)

            var div = $('<div>')
            var title = whatWeGotBack.response.docs[i].headline.main
            var articleURL = whatWeGotBack.response.docs[i].web_url
            var authorName = whatWeGotBack.response.docs[i].byline.original

        
            var articleLink = $('<a>')
            articleLink.attr('href', articleURL )
            articleLink.text(title)

            var authorPTag = $('<p>')
            authorPTag.text(authorName)

            div.append(articleLink, authorPTag)
        
            $('#topArticlessDisplay').append(div)
        }
    })
}
    $("#submitBtn").on("click", function(event) {
        // event.preventDefault();
        console.log("submit clicked");

        doSearch()
    });

});
