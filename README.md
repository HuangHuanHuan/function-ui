## pnpm如何实现monorepo
为了我们各个项目之间能够互相引用我们要新建一个pnpm-workspace.yaml文件将我们的包关联起来
packages:
    - 'packages/**'
    - 'examples'
这样就能将我们项目下的packages目录和examples目录关联起来了，当然如果你想关联更多目录你只需要往里面添加即可。根据上面的目录结构很显然你在根目录下新packages和examples文件夹，packages文件夹存放我们开发的包，examples用来调试我们的组件。

## 包之间调试
进入components文件夹执行 pnpm install @kitty-ui/utils
你会发现pnpm会自动创建个软链接直接指向我们的utils包；此时components下的packages：
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@kitty-ui/utils": "workspace:^1.0.1"
  }
}
你会发现它的依赖@kitty-ui/utils对应的版本为：workspace:^1.0.0；因为pnpm是由workspace管理的，所以有一个前缀workspace可以指向utils下的工作空间从而方便本地调试各个包直接的关联引用。

## 安装 pnpm

npm i pnpm -g

## 安装所有依赖

pnpm install

## 本地测试

pnpm run exm:dev

## 打包

pnpm run build:kitty

## 发布

pnpm run publish:kitty

## 启动文档

pnpm run docs:dev

## 打包文档

pnpm run docs:build

## 启动打包后文档服务

pnpm run docs:serve

## 执行组件库测试

pnpm run test

## 查看测试覆盖率

pnpm run coverage
