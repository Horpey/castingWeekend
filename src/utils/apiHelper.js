const token = 'id_token';

export function getUserID(tk) {

	const token = 'id_token';
	this.token = JSON.parse(localStorage.getItem('token'));
	console.log(this.token);
  return localStorage.getItem(token);
}