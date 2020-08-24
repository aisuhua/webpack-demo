const arr = ['foo.js', 'bar.js'];

arr.forEach(item => {
    require(`./${item}`);
});