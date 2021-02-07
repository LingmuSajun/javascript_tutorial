function addNumberFactory(num) {
	function addNumber(value) {
		console.log(num);
		return num + value;
	}
	return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);