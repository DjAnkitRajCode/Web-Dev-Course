var movies =[
    {
        title :"3 idiot",
        hasWatched :true,
        rating : 5
    },
    {
        title :"malang",
        hasWatched :false,
        rating : 4.5
    },
    {
        title :"addy NH",
        hasWatched :true,
        rating : 3
    }
]
movies.forEach(function(movie){
    var result = "you have ";
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not seen ";
    }
    result += "\"" + movie.title +"\"";
    result += " " +movie.rating + " stars";
    console.log(result)
})