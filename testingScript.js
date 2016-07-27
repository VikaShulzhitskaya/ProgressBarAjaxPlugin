$(function(){
	var progressBar = $('#progressbar1').progressbarPlugin({
		buttonId: '#get',
		successFunction: success


	});
/* A function to be called if the request succeeds. 
The function gets passed three arguments: 
 - The data returned from the server, formatted 
according to the dataType parameter 
or the dataFilter callback function, if specified; 
 - a string describing the status; 
 - and the jqXHR */
	function success(data, textStatus, jqXHR){
		alert('hey');
	}
});
