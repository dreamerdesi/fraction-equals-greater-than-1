function divideFraction(frac) {
	let fracSplit = frac.split('/');
	let dividedFraction = fracSplit[0] / fracSplit[1];
	if(dividedFraction > 1 ) {
		return true;
	} else {
		return false;
	}
}
