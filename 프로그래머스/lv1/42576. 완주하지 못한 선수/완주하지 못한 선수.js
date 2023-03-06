function solution(participant, completion) {
    const hash = {};
    for (const p of participant) {
        hash[p] = (hash[p] || 0) + 1;
    }
    for (const c of completion) {
        hash[c] = (hash[c] || 2) - 1;
    }
    return Object.keys(hash).find(key=> hash[key] === 1);
}