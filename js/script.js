

var gen = {

	head : function(){
		var h = document.createElement("h4");
		h.className = "header";
		h.innerHTML = "Тест по программированию";
		document.body.appendChild(h);
		h.style.cssText = "position: relative; top: 50%; left: 50%;";
	},

	questionsArr : ["1. Вопрос №1","2. Вопрос №2","3. Вопрос №3","4. Вопрос №4"],
	answersArr : ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],

	answers : function() {
		var form = document.createElement("form");

		for (var i = 0; i < this.questionsArr.length; i++) {
			var block = document.createElement("h4");
			block.innerHTML = this.questionsArr[i];
			form.appendChild(block);
			var p = document.createElement("p");	

			for (var j = 0; j < this.answersArr.length; j++) {										
				var input = document.createElement("input");	
				input.type = "checkbox";
				input.name = "name"		
				p.appendChild(input);
				var text = document.createElement("span");
				text.innerHTML = this.answersArr[j] + "<br>";
				p.appendChild(text);		
			}

			form.appendChild(p);
			document.body.appendChild(form);	
		}

		var submit = document.createElement("input");
		submit.type = "submit";
		submit.value = "Проверить мои результаты";

		submit.onclick = function() {
			alert("test");
		};
		
		submit.style.cssText = "background-color: #cce6ff; padding: 5px; position: relative; top: 50%; left: 50%;";
		document.body.appendChild(submit);
	}

}

 document.body.style.padding = "0 70px";

gen.head();
gen.answers();