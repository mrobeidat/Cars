var name = prompt("What is your name?")


alert("welcome to our super cars website " + name)

var favCar = prompt("Tell us what is your fav car from these list so we can help you (Mercedes-AMG GT R Pro,Nissan GT-R,Lamborghini Huracan EVO)?")

var carnum = prompt ("How many times you would like to see this car name?")

while (favCar != "Mercedes-AMG GT R Pro" && favCar != "Nissan GT-R" && favCar != "Lamborghini Huracan EVO" )
{
favCar = prompt ("bad request")
}
console.log(favCar)

if (favCar == "Mercedes-AMG GT R Pro") {
  document.write("<p>" + " Perfect choice this is a great choice because this is the fastest car here" + "</p>")
  document.write('<img src="https://media.evo.co.uk/image/private/s--OQCqwTZs--/f_auto,t_content-image-full-desktop@1/v1561030337/evo/2019/06/19c0236_001.jpg">')
}
else if (favCar == "Nissan GT-R")
 {
  document.write("<p>" + " It should aslo be a good choice because it has the greatest Aerodynamics " + "</p>")
  document.write('<img src="https://www.hdcarwallpapers.com/thumbs/2020/nissan_gt_r_4k_8k-t2.jpg">')
}
else if (favCar == "Lamborghini Huracan EVO") {
  document.write("<p>" + "this car is less faster than other cars but still has the best features " + "</p>")
  document.write('<img src="https://www.hdcarwallpapers.com/thumbs/2019/lamborghini_huracan_evo_2019_4k_5-t2.jpg">')
}
else {
  alert("Sorry this car name does not exist in our database")
}


for ( var x = 1 ; x < carnum ; x++) 
{
 document.write("<img src='https://media.evo.co.uk/image/private/s--OQCqwTZs--/f_auto,t_content-image-full-desktop@1/v1561030337/evo/2019/06/19c0236_001.jpg'>")
}