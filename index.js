const msgBody = document.querySelector(".message-body");
const userMsg = document.querySelector("input[type='text']");
const sendButton = document.querySelector("input[type='button']");

//bot

const botMessage = (message) => {
	if(message.toLowerCase() == "hello" || message.toLowerCase() == "hi" || message.toLowerCase() == "haffa"){
        
        let answer = ["Hi.. How are you doing?","Hello...","How are you doing"];
        let select = Math.floor(Math.random() * answer.length);

		let addMessage = `
		   <div class="sender">
		     <p>${answer[select]}</p>
		   </div>
		`;
		
		msgBody.innerHTML += addMessage;
	    msgBody.scrollTop = msgBody.scrollHeight;
	    // userMsg.value = "";
	} else 
	  if(message.toLowerCase() == "fine" || message.toLowerCase() == "cool you" || message.toLowerCase() == "great"){
        
        let answer = ["How was your day","How was the weather","How enjoyments"];
        let select = Math.floor(Math.random() * answer.length);

		let addMessage = `
		   <div class="sender">
		     <p>${answer[select]}</p>
		   </div>
		`;
		
		msgBody.innerHTML += addMessage;
	    msgBody.scrollTop = msgBody.scrollHeight;
	    // userMsg.value = "";
	} else {
		// if(message.toLowerCase() == "hello" || message.toLowerCase() == "hi" || message.toLowerCase() == "haffa"){
        
        let answer = ["I don't understand","How about we chat later","I can't get you"];
        let select = Math.floor(Math.random() * answer.length);

		let addMessage = `
		   <div class="sender">
		     <p>${answer[select]}</p>
		   </div>
		`;
		
		msgBody.innerHTML += addMessage;
	    msgBody.scrollTop = msgBody.scrollHeight;
	    // userMsg.value = "";
	}
}

//user
sendButton.addEventListener("click",(event) => {
	event.preventDefault();

	const userMessage = userMsg.value;

	let addMessage = `
      <div class="reciever">
		<p>${userMessage}</p>
	 </div>
	`;


	msgBody.innerHTML += addMessage;
	msgBody.scrollTop = msgBody.scrollHeight;
	userMsg.value = "";
    
    setTimeout(() => {
    	botMessage(userMessage);
    }, 3000);
});