var form = document.getElementById("form-contact");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Message Sent! Enjoy your day! :)";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! Failed to send message. Maybe Trying again will work?"
  });
}
form.addEventListener("submit", handleSubmit)