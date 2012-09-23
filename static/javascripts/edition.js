/*
 *
 * @fileOverview Javascript files for edition general
 * @watchIt: Just a rough draft - Needs massive restructuring
 *
 * @author Ego!
 */
/*
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    csrfmiddlewaretoken : csrftoken
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
*/

/*
  - Add edition input
*/
$("#editionAdd").live('click', function(e){
	// Check if editions already exist
	if ($("#editionList").length > 0){
  		// If exists append input for new
  		$("#editionList").append('<li><input type="newEdition" id="newEdition" name="newEdition"/><button id="saveEdition">Save</button></li>');
  	}else{
		// Else add list with input for new
		$("#edition").append('<ul class="editionList"><li><input type="newEdition" id="newEdition" name="newEdition"/><button id="saveEdition">Save</button></li></ul>')
	}
});

/*
 - Save edition added
*/
$("#saveEdition").live('click', function(e){
	MAIN.post("/editions/add/",
			  {
			  	title : $("#newEdition").val(), 
			  }, 
			  true, 
			  function(response){
			  	console.log(response)
			  }
			 );
});
