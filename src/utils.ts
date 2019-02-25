export function ready(cb: any) {
	document.onreadystatechange = function () {
		if (document.readyState == "interactive") {
			// Initialize your application or run some code.
			cb();
		}
	};
}

export function roundToTwoPlaces(amount: number): string {
	var retval = (Math.round(amount * 100) / 100).toString();
	if (retval.indexOf('.') === -1) {
		retval = retval + '.00';
	}
	return retval;
}