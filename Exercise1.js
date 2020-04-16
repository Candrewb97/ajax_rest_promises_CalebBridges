const site = 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'
//Get all posts
$('.button1').click(function(){
    $.get(site, function(content){
        for(var i = 0; i < content.length; i++){
        console.log(content[i]);
        }
    })
        
})
//Get post with id of 10
$('.button2').click(function(){
    $.get(site, function(content){
        for(var i = 0; i < content.length; i++){
        if(content[i].id === 10)
        {console.log(content[i])
        }
    }
    })
        
})
//Get the comments from post with id of 14
$('.button3').click(function(){
    $.get(site, function(content){
    for (var i = 0; i < content.length; i++){
    if(content[i].)
    })
})


//Get all the posts from user with id of 2
$('.button4').click(function(){
    $.get(site, function(content){
        for (var i = 0; i < content.length; i++){
        if(content[i].userID === 2)
        {console.log(content[i])}
        }
    })
})