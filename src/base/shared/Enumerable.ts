function Enumerable(...keyPairs: string[]): void;
function Enumerable(keyPairs: { [id: string]: String; }): void;
function Enumerable(keyPairs): void {
	keyPairs = arguments.length === 1 ? keyPairs : Array.prototype.slice.call(arguments);
	if (Array.isArray(keyPairs)) {
		for (let i = 0; i < keyPairs.length; i++) {
			this[keyPairs[i]] = keyPairs[i];
		}
	} else {
		var keys = Object.keys(keyPairs);
		for (let key = 0; key < keys.length; key++) {
			this[keys[key]] = keyPairs[keys[key]];
		}
	}
}

Object.defineProperty(Enumerable.prototype, 'enum', {
	get: function () {
		var values = [];
		var keys = Object.keys(this);
		for (var key = 0; key < keys.length; key++) {
			if (this.hasOwnProperty(keys[key])) {
				values.push(this[keys[key]]);
			}
		}
		return values;
	},
	enumerable: true,
	configurable: false
});

Enumerable.prototype.findKey = function (val) {
	var keys = Object.keys(this);
	for (var i = 0; i < keys.length; i++) {
		if (this[keys[i]] === val) {
			return keys[i];
		}
	}
};

export default Enumerable;