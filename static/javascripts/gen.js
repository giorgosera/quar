/**
 * @fileOverview Javascript files for qrcode generator view
 * @watchIt: Just a rough draft - Needs massive restructuring
 *
 * @author Ego!
 */

 // Variables
var form =	'<div class="article"><button class="delete"> X </button><input type="text" name="title" class="title"/><input type="text" name="author" class="author" /><input type="text" name="pub_date class="pub_date" /><input type="text" name="url" class="url" /> <div class="qrcode"></div></div>',
	code, title, author, pub_date, genCode, last;

// Add form - first time run
$('.generator').append(form);

// Set initial focus
$('.article').find(".title").focus();

// When in URL text
$(".url").live("keypress", function(e){
	code = (e.keyCode ? e.keyCode : e.which);
		
		// If ENTER is pressed
		if (code==13) {
			title = $(this).parent().find(".title"),
			author = $(this).parent().find(".author"),
			pub_date = $(this).parent().find(".pub_date"),
			genCode = $(this).parent().find(".qrcode");

			genCode.qrcode({
			width: 100,
			height: 100,
			color: '#3a3',
			text: $(this).val()
		});

		// Add new form
		$('.generator').append(form);
		
		// Set focus 
		last = $('.article').last();
		$(last).find(".title").focus();
	}

	$(".delete").live("click", function(e){
		$(this).parent().remove();
	});
});
