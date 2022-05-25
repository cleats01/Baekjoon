process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = '';
    let result2 = '';
    for (let i = 0; i < a; i++) {
        result += '*';
    }
    for (let i = 0; i < b; i++) {
        result2 += result + '\n';
    }
    
    console.log(result2);
});