$(document).on('ready', function() {

	// display the form when 'show form' is clicked

	$('.show-form').on('click', function() {

		$('.form-container').slideToggle(250);
		$(this).text(function(i, text) {
			return text === 'SHOW FORM' ? 'HIDE FORM' : 'SHOW FORM';
		})
		

	});

	$('.user-info-submit').on('click', function(e) {

		

		var userName = $(this).closest('form-container').find('textarea#user-name').val();
		var userBio = $(this).closest('form-container').find('textarea#user-bio').val();
		var userBooks = $(this).closest('form-container').find('textarea#user-books').val();
		var userLibs = $(this).closest('form-container').find('textarea#user-js-libraries').val();

		$('.user-name-header').text($(this).closest('form-container').find('textarea#user-name').val());
		$('#user-bio-output').append('<p>' + userBio + '</p>');
		$('user-books-output').append();

		console.log($('#user-bio-output').append('<p>' + userBio + '</p>'));

		$('#user-name').val('');
		$('#user-bio').val('');
		$('#user-books').val('');
		$('#user-js-libraries').val('');

		e.preventDefault();
	});

});