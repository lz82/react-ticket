# 初始化

1. 使用`yarn create react-app react-ticket`创建项目

2. 增加`.editorconfig`配置

3. 使用`react-app-rewired`来替换`react-scripts`
   使用以下命令安装：`$ yarn add react-app-rewired customize-cra@next -D`

   配置`config-overrides.js`

   ```javascript
   const { override, addWebpackAlias, addLessLoader } = require('customize-cra');

   const path = require('path');

   function resolve(dir) {
     return path.join(__dirname, '.', dir);
   }

   const config = override(
     // 增加别名
     addWebpackAlias({
       '@': resolve('src')
     }),
     // 增加less支持
     addLessLoader({
       strictMath: true,
       noIeCompat: true,
       modules: true
     })
   );

   module.exports = config;
   ```

   同时要使用`yarn add less less-loader -D`安装所需依赖

4. 配置`Eslint`,将`eslintconfig`从`package.json`中移出,在根目录添加`.eslintrc.js`
   安装 alloy 团队的规则:`yarn add eslint-config-alloy -D`

   `.eslintrc.js`配置内容如下：

   ```javascript
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
         version: 'detect'
       }
     }
   };
   ```

5. 增加`.prettierrc.js`来使用`prettier`格式化代码
   语法使用`eslint`、格式使用`prettier`，关注点分离

6. 使用`husky`来自动在 commit 时进行代码语法检查和格式检查
   使用`yarn add husky -D`安装

在`package.json`中增加两条命令:

```json
  "lint": "eslint --ext .js --ext .jsx src/  --fix",
  "prettier": "prettier -c --write src"
```

在根目录增加`.huskyrc.js`

```javascript
module.exports = {
  hooks: {
    'pre-commit': 'yarn lint & yarn prettier'
  }
};
```

这样在`git commit`的时候，会自动执行`lint`和`prettier`两条命令

7. 使用`dotenv`环境变量
   cra 默认已经安装使用了`dotenv`,可以直接在根目录添加以下文件:
   通用配置：`.env`
   开发配置：`.env.development`
   生产环境: `.env.production`
   测试环境：`.env.qa`

同时修改`package.json`中的命令,由于`start`和`build`默认已经是开发环境和生产环境了，因此只需要增加一个测试环境打包的命令:`"build:qa": "dotenv -e .env.qa react-app-rewired build",`

注意: 需要先使用`yarn add dotenv-cli -D`安装依赖

# 项目初始化

1. 安装 react 全家桶以及必须库
   `yarn add axios immutable normalize.css react-redux react-router-dom redux redux-immutable redux-logger redux-thunk @loadable/component`

2. 在`src`下增加`config`文件夹，同时增加`index.js`文件

```javascript
const env = process.env;

const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env;
const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return 'http://101.132.40.63:7099/rest';
    case 'qa':
      return 'http://101.132.40.63:7099/rest';
    case 'prod':
      return 'http://101.132.40.63:7099/rest';
    default:
      return 'http://101.132.40.63:7099/rest';
  }
};

export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl()
};
```

用于根据当前环境变量返回不同的配置内容

3. 封装异步请求方法
   在`src`下增加`utils\axios.js`和`utils\request.js`

4. 添加全局样式`src\styles\index.less`

5. 创建路由

6. 创建 store

7. 关于使用`less.module`的 bug:[issues](https://github.com/arackaf/customize-cra/issues/242)

# tips

- 滚动到某个 dom 元素
  e.g: `/src/components/city-selector/index.jsx`

```javascript
const dom = document.querySelector(`[data-cate="${index}"]`);
if (dom) {
  dom.scrollIntoView();
}
```

- 自动吸附
  e.g: `/src/components/city-selector/city-section`

```less
position: sticky;
top: -1px;
```


- 手写日历组件
  e.g: `/src/components/date-selector`
  思路：
  1. 找到当前日期所在月的第一天的0时0分0秒
  2. 分别+1、+2个月，得出未来两个月的第一天
  3. 每个月的第一天依次+1天，直到月份发生变化
  4. 每个月的月头和月尾分别补齐（用null）
  5. 把日期分配到week

  - useMemo
  `bindActionCreators`每次都会产生一个新的句柄，因此需要用`useMemo`来包裹起来,同时`connect`的第二个参数也不要
  ```
    const queryActions = useMemo(() => {
    return bindActionCreators(queryActionCreators, dispatch);
  }, []);

  const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};
```

- useState
给useState赋值初始值时，如果只希望在页面初始化时赋值一次，可以传入一个函数，而不是一个对象。

