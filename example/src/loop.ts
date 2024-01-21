let i = 0;
while(i < 5) {
    const a = () => i;
    a();

    i++;
}

let foo = 0;
const bar = 100;
for (let i = 0; i < 5; i++) {
	// スコープがループ内のためOK
	const a = () => i;
	a();

	const b = () => foo;
	b();

	// 固定値でもOK
	const c = () => bar;
	c();

	foo += i;
}
