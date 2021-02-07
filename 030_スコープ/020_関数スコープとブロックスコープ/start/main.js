function a() {
	let b = 0;
	console.log(b);
}
a();

{
	var c = 1;
	// console.log(c);
	const d = function d() {
		console.log('function  d id called.');
	}
}
console.log(c);
d();