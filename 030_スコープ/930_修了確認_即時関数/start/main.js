const calc = (function(val) {

	function plus(target) {
        let newVal = val + target;
		console.log(`${val} + ${target} = ${newVal}`);
        val = newVal;
	}
	function minus(target) {
        let newVal = val - target;
		console.log(`${val} - ${target} = ${newVal}`);
        val = newVal;
	}
    function multiply(target) {
        let newVal = val * target;
		console.log(`${val} * ${target} = ${newVal}`);
        val = newVal;
	}
	function divide(target) {
        let newVal = val / target;
		console.log(`${val} / ${target} = ${newVal}`);
        val = newVal;
	}

	return {
		plus,
		minus,
		multiply,
		divide,
	};
})(10)

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);