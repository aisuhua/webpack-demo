module.exports = function (content) {
    let useStrictPrefix = '\'use strict\';\n\n';
    useStrictPrefix = useStrictPrefix + 'console.log(\'suhua\')\n\n';
    return useStrictPrefix + content;
};