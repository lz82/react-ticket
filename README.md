# 初始化

1. 使用`yarn create react-app react-ticket`创建项目

2. 使用`react-app-rewired`来替换`react-scripts`
   使用以下命令安装：`$ yarn add react-app-rewired customize-cra@next -D`

3. 配置`Eslint`,将`eslintconfig`从`package.json`中移出,在根目录添加`.eslintrc.js`
   安装 alloy 团队的规则:`yarn add eslint-config-alloy -D`

   `.eslintrc.js`配置内容如下：
   ``` javascript
    module.exports = {
      extends: ['alloy', 'alloy/react'],
      env: {
        browser: true
      },
      globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // React: false,
        // ReactDOM: false
        // document: true
      },
      rules: {},
      settings: {
        react: {
          version:  'detect'
        }
      }
    }
   ```

  4. 