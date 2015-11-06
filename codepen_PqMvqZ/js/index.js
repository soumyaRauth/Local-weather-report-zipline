	$(document).ready(function() {
    var lati;
    var long;
    var tempCelsius;
    var tempFahrenheit;
    
	$.getJSON("http://www.telize.com/geoip?callback=?",
		function(json) {
        lati=json.latitude;
        long=json.longitude;
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+long+ "&units="+ 'metric',
		function(weather) {
     
     $('#temperature_celcius').text(weather.main.temp+" C");
$("#target1").text(weather.name);
    
$("#target2").text(weather.weather[0].description);  
$("#target3").text("SE "+weather.wind.speed+" Knots");  
$('#image').attr("src"," http://openweathermap.org/img/w/"+weather.weather[0].icon+".png" );  
   //toggle temp
    $('#fahrenheit').click(function(){
      $('#temperature_celcius').text(((weather.main.temp)*(9/5)+32).toFixed(2)+" F");
    });
    
    $('#celsius').click(function(){
      $('#temperature_celcius').text(weather.main.temp+" C");
      });
    
    //-----background wallpaper----
   
if((weather.main.temp)>32){
 $('body').css('background-image', 'url(http://bit.ly/1KSc2Qo)');
}else if((weather.main.temp)>20 || (weather.main.temp)<32){
  $('body').css('background-image', 'url(http://bit.ly/1NEiT65)');
}else if((weather.main.temp)>0 || (weather.main.temp)<20){
  $('body').css('background-image', 'url(http://bit.ly/1WWGkdG)');
}else if((weather.main.temp)>-30 || (weather.main.temp)<0){
  $('body').css('background-image', 'url(http://bit.ly/1JqkiJt)');
}
 //-------     
}
);
//------
   	
}
); 	
    //------
});