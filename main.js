'use strict';

function connect() {
	let options = {
		filters: [
			{name: 'echo'}
		]
	};

	navigator.bluetooth.requestDevice(options).then(function(device) {
			console.log('Name: ' + device.name);
		})
		.catch(function(error) {
			console.log("Something went wrong. " + error);
		});
}
