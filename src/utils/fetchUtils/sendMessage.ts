const url = '';
function sendMessage(phoneNumber:string): Promise<any> { 
	return new Promise(function ( resolve, reject ){
		resolve('I returned a string type promise');
	})
}
