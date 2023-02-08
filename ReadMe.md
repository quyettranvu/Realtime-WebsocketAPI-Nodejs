1/In case want to show the message from client sent to the server and show for other clients then enable this line of code:
console.log('Message from server: ', reader.result);

2/Logically we can also use the action "on" or use addEventListener:
ws.onopen = () => {
   console.log('Connection opened!');
}

Alternatively(the rest for other actions(events)):
ws.addEventListener('open', function (event) {
   console.log('Connected to WS Server')
});

