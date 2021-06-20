var name = prompt("What is your name?")


alert("welcome to our super cars website " + name)


var favCar = prompt("Tell us what is your fav car from these list so we can help you (Mercedes,Nissan,Lamborghini)?")

var carnum = prompt ("How many times you would like to see this car?")

function favcar (){


while (favCar != "Mercedes" && favCar != "Nissan" && favCar != "Lamborghini" )
{
favCar = prompt ("bad request")
}
console.log(favCar)

if (favCar == "Mercedes") {
  document.write("<p>" + " Perfect choice this is a great choice because this is the fastest car here" + "</p>")
  document.write('<img src="https://media.evo.co.uk/image/private/s--OQCqwTZs--/f_auto,t_content-image-full-desktop@1/v1561030337/evo/2019/06/19c0236_001.jpg">')
}
else if (favCar == "Nissan")
 {
  document.write("<p>" + " It should aslo be a good choice because it has the greatest Aerodynamics " + "</p>")
  document.write('<img src="https://www.hdcarwallpapers.com/thumbs/2020/nissan_gt_r_4k_8k-t2.jpg">')
}
else if (favCar == "Lamborghini") {
  document.write("<p>" + "this car is less faster than other cars but still has the best features " + "</p>")
  document.write('<img src="https://www.hdcarwallpapers.com/thumbs/2019/lamborghini_huracan_evo_2019_4k_5-t2.jpg">')
}
else {
  alert("Sorry this car name does not exist in our database")


}

}

favcar();


var numofcars;
for ( var x = 1 ; x < numofcars ; x++) 
{
 document.write("<img src='https://media.evo.co.uk/image/private/s--OQCqwTZs--/f_auto,t_content-image-full-desktop@1/v1561030337/evo/2019/06/19c0236_001.jpg'>")
}




function rating(){
var starnum = prompt('what would you rate this website?')



for ( x = 0; x < starnum ; x++){

document.write("<img src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13515.png'>")
}
}
rating();