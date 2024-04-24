$("#submit").on('click',function(){
event.preventDefault();// Prevent the default form submission behavior
const uName = $("#name").val().trim();

const uPhone = $('#phone').val().trim();

const uEmail = $("#email").val().trim();

if(uName==='' || uPhone=== '' | uEmail===''){
	
	$(".alert").slideDown();
	//alert('Fill the form to proceed')
}

else {
	$(".alert").hide();
	
const newRow = `<tr><td>${uName}</td> <td>${uPhone}</td> <td>${uEmail}</td> </tr>`

$("#table tbody").append(newRow);

alert("Info Added Successfully");
}
})