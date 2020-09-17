const loaderUtils = require('loader-utils');
const SourceNode = require('source-map').SourceNode;
const SourceMapConsumer = require('source-map').SourceMapConsumer;

module.exports = function (content, sourceMap) {
    let useStrictPrefix = '\'use strict\';\n\n';
    useStrictPrefix = useStrictPrefix + 'console.log(\'suhua\')\n\n';

    if (this.cacheable) {
        this.cacheable();
    }

    let options = loaderUtils.getOptions(this) || {};
    console.log(options);

    if (options.sourceMap && sourceMap) {
        let currentRequest = loaderUtils.getCurrentRequest(this);
        let node = SourceNode.fromStringWithSourceMap(
            content,
            new SourceMapConsumer(sourceMap)
        );
        node.prepend(useStrictPrefix);
        let result = node.toStringWithSourceMap({file: currentRequest});
        let callback = this.async();
        callback(null, result.code, result.map.toJSON());
    }

    // 不支持 sourceMap 时
    return useStrictPrefix + content;
};