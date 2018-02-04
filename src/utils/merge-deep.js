function mergeDeep(target, ...sources) {
	function isObject(item) {
		return (item && typeof item === 'object' && !Array.isArray(item));
	}

	if (sources.length < 1) {
		return target;
	}
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) {
					Object.assign(target, {[key]: {}});
				}
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, {[key]: source[key]});
			}
		}
	}

	return mergeDeep(target, ...sources);
}

module.exports = mergeDeep;
