





document.getElementById('submit').onclick=function()
{
    var ratings = document.getElementsByName('rating');
    for (var radio of ratings)
    {
       
        if (radio.checked)
        {    
            var rating = radio.value;
            

            document.getElementById("rating-page1").style.display = "none";
            document.getElementById("thankyou-container").style.display = "grid";
            document.getElementById("dynamic-text").getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerHTML = rating;
        }
    }
}




