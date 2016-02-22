	var link = document.querySelector(".write-us");
	var popup = document.querySelector(".modal-content");
	var close = document.querySelector(".modal-content-close");
	var login = document.querySelector("[name=your-login]");
	var form = popup.querySelector("form");
	var mail = document.querySelector("[name=your-mail]");
	var letter = document.querySelector("[name=text-letter]");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-show");
	})
	
	
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
	})
	
	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		login.focus();
	})
	form.addEventListener("submint", function(event) {
		if (!login.value || !mail.value || !letter.value) {
			event.preventDefault();
			console.log("Нужно ввести имя,маил и письмо")
		}
		
	});