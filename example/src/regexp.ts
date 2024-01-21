(() => {
	const foo = /(ba[rz])/;
	foo.exec('bar')[1];
})();

(() => {
	new RegExp('abc');
	/abc/;

	RegExp('abc', 'u');
	/abc/u;

	new RegExp(/abc/);

	const flag = 'g';
	RegExp('abc', flag);
})();

'something'.match(/thing/);
/thing/.exec('something');
