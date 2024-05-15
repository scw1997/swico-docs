import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.D7g5xyU9.js";const g=JSON.parse('{"title":"Git Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"git-hooks.md","filePath":"git-hooks.md","lastUpdated":1712738129000}'),t={name:"git-hooks.md"},p=n(`<h1 id="git-hooks" tabindex="-1">Git Hooks <a class="header-anchor" href="#git-hooks" aria-label="Permalink to &quot;Git Hooks&quot;">​</a></h1><p>Swico模板内置了Git Hooks流程，用于处理每次代码提交时的额外操作和Git注释校验，旨在规范和完善开发流程。</p><h2 id="husky" tabindex="-1">.husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;.husky&quot;">​</a></h2><p>husky 配置文件路径，提供 git 提交前的操作钩子。</p><ul><li><p><code>pre-commit</code></p><p>用于配置git提交前的操作处理。</p><p>默认配置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;src/**/*.{js,ts,vue}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;prettier --write&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;eslint --fix&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;src/**/*.{css,less,json,html,md}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p>以上述默认配置为例，在git提交前，husky会在命令行执行<code>.husky/pre-commit</code>文件里定义的终端命令即<code>npm test</code>进而调用<code>lint-staged</code>脚本命令， 该命令通过ESLint + Prettier进行代码格式校验和一键修复，若校验不通过或者一键修复后仍存在问题则禁止提交。</p></li><li><p><code>commit-msg</code></p><p>用于规范git提交时输入的注释信息。</p><p>详见下面<a href="#commitlint-config-js">commitlint.config.js</a></p></li></ul><blockquote><p>配置文档：<a href="https://typicode.github.io/husky/#/" target="_blank" rel="noreferrer">husky 官方文档</a></p></blockquote><blockquote><p>为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成。</p></blockquote><h2 id="commitlint-config-js" tabindex="-1">commitlint.config.js <a class="header-anchor" href="#commitlint-config-js" aria-label="Permalink to &quot;commitlint.config.js&quot;">​</a></h2><p>git 提交格式规范校验规则配置文件。</p><p>用于配合<code>husky</code>的<code>commit-msg</code>操作钩子进行<code>git commit</code>的提交信息的格式校验。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)/_/husky.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --no</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitlint</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --edit</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $1</span></span></code></pre></div><p>默认配置：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//默认配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 继承的规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义规则类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rules: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;type-enum&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;always&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 新功能 feature</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;fix&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修复 bug</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;docs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文档注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;config&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 架构配置修改</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;perf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 性能优化</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 增加测试</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;revert&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回退</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &#39;others&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 其他</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // subject 大小写不做校验</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;subject-case&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>基于上述默认配置，git 提交时填写提交内容的说明信息需遵循以下格式，否则会校验不通过报错而提交失败：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[type]: 说明信息  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意中间是英文冒号+空格</span></span></code></pre></div><p><code>type</code>的可选值如下：</p><ul><li><code>config</code>: 项目构建配置的变动</li><li><code>docs</code>: 仅仅修改了文档等（不是指文案类的改动，而是指项目文档、代码注释等）</li><li><code>fix</code>: 修复 bug</li><li><code>add</code>: 增加新功能</li><li><code>perf</code>: 各种业务代码的修改，优化</li><li><code>revert</code>: 代码回滚</li><li><code>test</code>: 测试用例代码</li><li><code>others</code>:其他类型的更改（非即以上类型的改动）</li></ul><p>提交示例：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fix: 修复部分bug</span></span></code></pre></div><p>参考文档：<a href="https://commitlint.js.org/#/guides-local-setup" target="_blank" rel="noreferrer">commitlint 官方文档</a></p>`,20),l=[p];function e(h,k,d,o,c,r){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
