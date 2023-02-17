var socket = io();

socket.on("SEND_DATA",function(data) // Listen data from route "SEND_DATA"
{ 
	var str = "";
	for (var i = 0 ; i < data.length; i++)
	{
		str += data.charCodeAt(i).toString() + " ";
	}
	document.getElementById('displayTTNData').innerHTML = str; // Display data
});

socket.on("SEND_LATITUDE", function(data) {
    document.getElementById('latitude').innerHTML = data;
});

socket.on("SEND_LONGITUDE", function(data) {
    document.getElementById('longitude').innerHTML = data;
});

function requestGetDataAfterATime()
{
	socket.emit("REQUEST_GET_DATA");
}