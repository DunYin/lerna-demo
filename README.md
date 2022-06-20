# lerna-demo

```

yarn init -y
lerna init
lerna create @shiled/u-button
lerna create @shiled/u-sense
yarn add -W -D 
yarn workspace packageA add js-base64
lerna add axios --scope=shiled/u-button --dev
lerna run script
lerna run build --scope=
lerna exex
lerna version
lerna publish from-package
lerna run --parallel test 
lerna run test --scope=shiled-sense
lerna version patch --no-push
lerna publish patch
lerna publish prerelease --preid r220608
lerna add shiled-utag --scope=shiled-sense
lerna publish from-git  
```



pc_monorepo
├─README.md
├─lerna.json                                  // lerna配置文件(<https://github.com/lerna/lerna#lernajson>)
├─package.json
├─yarn.lock
├─.gitignore
├─node_modules
├─packages                                    // 组件仓库
|  ├─package                                  // 组件名
|  | ├─__tests__                              // 测试目录
|  | ├─lib                                    // 默认代码目录
|  | ├─dist                                   // 默认编译代码目录
|  | ├─package.json
├─config                                      // 脚本配置文件
|  ├─test.js                                  // 测试包
|  ├─prod.js                                  // 现网配置文件
