webpack 支持 ES Modules 和 CommonJS 两种模块标准，都支持对它们进行打包

nodejs 默认支持 CommonJS 模块标准，可以通过修改 package.json 支持 ES Modules 模块标准

```
{
  "type": "module"
}

node index.js
``` 

- [package.json "type" field](https://nodejs.org/api/esm.html#esm_package_json_type_field)