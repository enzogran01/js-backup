function recursiva(max) {
    if (max >= 256) return;
    console.log(max);
    max++;
    recursiva(max);
}

recursiva(2);