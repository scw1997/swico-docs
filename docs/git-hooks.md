# Git Hooks

Swico模板内置了Git Hooks流程，用于处理每次代码提交时的额外操作和Git注释校验，旨在规范和完善开发流程。

## .husky

husky 配置文件路径，提供 git 提交前的操作钩子。

- `pre-commit`

  用于配置git提交前的操作处理。

  默认配置：

    ```bash title=".husky/pre-commit"
    npm test
    ```

    ```json title="package.json"
    "scripts": {
      "test": "lint-staged",
    },
            
    "lint-staged": {
      "src/**/*.{js,ts,vue}": [
          "prettier --write",
          "eslint --fix"
      ],
      "src/**/*.{css,less,json,html,md}": "prettier --write"
    },
    ```

  以上述默认配置为例，在git提交前，husky会在命令行执行`.husky/pre-commit`文件里定义的终端命令即`npm test`进而调用`lint-staged`脚本命令， 该命令通过ESLint + Prettier进行代码格式校验和一键修复，若校验不通过或者一键修复后仍存在问题则禁止提交。

- `commit-msg`

  用于规范git提交时输入的注释信息。

  详见下面[commitlint.config.js](#commitlint-config-js)


> 配置文档：[husky 官方文档](https://typicode.github.io/husky/#/)

> 为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成。



## commitlint.config.js

git 提交格式规范校验规则配置文件。

用于配合`husky`的`commit-msg`操作钩子进行`git commit`的提交信息的格式校验。

```bash title=".husky/commit-msg"
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit $1
```

默认配置：

```javascript title="commitlint.config.js"
//默认配置
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // 定义规则类型
    rules: {
        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
        'type-enum': [
            2,
            'always',
            [
                'add', // 新功能 feature
                'fix', // 修复 bug
                'docs', // 文档注释
                'config', // 架构配置修改
                'perf', // 性能优化
                'test', // 增加测试
                'revert', // 回退
                'others' // 其他
            ]
        ],
        // subject 大小写不做校验
        'subject-case': [0]
    }
};
```

基于上述默认配置，git 提交时填写提交内容的说明信息需遵循以下格式，否则会校验不通过报错而提交失败：

```ts
[type]: 说明信息  // 注意中间是英文冒号+空格
```

`type`的可选值如下：

- `config`: 项目构建配置的变动
- `docs`: 仅仅修改了文档等（不是指文案类的改动，而是指项目文档、代码注释等）
- `fix`: 修复 bug
- `add`: 增加新功能
- `perf`: 各种业务代码的修改，优化
- `revert`: 代码回滚
- `test`: 测试用例代码
- `others`:其他类型的更改（非即以上类型的改动）

提交示例：
```text
fix: 修复部分bug
```

参考文档：[commitlint 官方文档](https://commitlint.js.org/#/guides-local-setup)
