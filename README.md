# web 前端技术大作业

## 接口支持

- [The Cat API](https://thecatapi.com/)

## 测试链接

<http://101.37.80.152/>

## 布局方式

瀑布流布局，具体实现为先为每张图片设定相对固定（百分比）的宽度，并设置好列数，通过接口返回的图片宽高进行计算图片的显示宽高，之后遍历储存列数高度的数组，将图片位置设置为对应列的对应高度，计算完之后更新对应列数的高度，然后循环，直到所有图片被遍历完毕

## 技术栈

[react](https://react.docschina.org/tutorial/tutorial.html)  + [antd](https://ant.design/docs/react/getting-started-cn)

推荐使用 vscode 或者 webstorm 进行开发 ，缩进一律采用两格缩进，如下

~~~html
<div>
  <p></p>
</div>
~~~

项目本地启动方式如下

~~~cmd

//第一次运行
yarn
yarn start

//非第一次运行
yarn start

~~~

## 开发规范

对应功能文件要放在对应目录下，主要工作区为 src 目录；

子组件及对应样式表放在 src/components 下；

引入的图片，音乐，视频等静态资源放在 src/assets 目录下；

http 请求一律使用 [axios](https://www.axios-http.cn/) 进行发送,使用方法自行参考文档；

不要随意改动其他目录下的文件；

不要随意添加新的依赖；

开发环境统一为 [Node.js](http://nodejs.cn/)，请自行安装并配置环境；

包管理统一使用 yarn 进行，请自行参考文档或教程进行配置；

## 命名规范

文件，变量与函数一律采用驼峰命名法，如 one person 命名为onePerson；

组件名称一律采用双驼峰命名，如 search tab 命名为 SearchTab；

不同的函数之间请隔开一个空行；

样式表文件（css）中，不同的样式之间也要隔一个空行；

## 协作与提交规范

统一使用 git 进行协作，请安装好 git 并注册 github 账号；

禁止直接提交到 master 分支，提交前请在本地新建分支并 push 到对应分支上；

每次提交的 commit 依照简洁明了的原则，请不要随意编写 commit 信息；

在确认功能本地运行确保无误后，请提交 pr 申请合并分支到 master 上；

[git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)；
