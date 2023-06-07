# 插件页面
介绍：工具域名地址，拦截修改页面请求头参数，存在即修改没有会添加。
背景：有时候需要做参数测试，且市面上的工具只有单一的域名修改规则，该插件支持同时修改多域名请求规则。
## 安装

chrome 选择扩展程序， 选择加载已解压的的扩展程序， 选择当前文件夹。

## 开发

node >= 18.0.0


```sh

# 安装依赖
pnpm i

#启动popup项目
pnpm start:popup

#启动options项目
pnpm start:options

#打包所有项目
pnpm build:all

#打包popup项目
pnpm build:popup

#打包options项目
pnpm build:options
```

## 项目结构

```text
| background              # 背景
| devtools                # devtools
| manifest.json                # 插件配置
|- packages/                # 项目包
|  |- options/                # 插件options页
|  |- popup/             # 插件popup页
|- src/                # 插件主入口 可做脚本注入等

```

## pnpm dlx create-react-app packages/app2 --template typescript 基于react创建子包
