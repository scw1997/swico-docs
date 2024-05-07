"use strict";(self.webpackChunksecywo_docs=self.webpackChunksecywo_docs||[]).push([[819],{521:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>r});var e=a(641);const t=(0,e.Fv)('<h1 id="git-hooks" tabindex="-1"><a class="header-anchor" href="#git-hooks"><span>Git Hooks</span></a></h1><p>Swico模板内置了Git Hooks流程，用于处理每次代码提交时的额外操作和Git注释校验，旨在规范和完善开发流程。</p><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky"><span>.husky</span></a></h2><p>husky 配置文件路径，提供 git 提交前的操作钩子。</p><ul><li><p><code>pre-commit</code></p><p>用于配置git提交前的操作处理。</p><p>默认配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title=".husky/pre-commit"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">test</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="package.json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n        \n<span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;src/**/*.{js,ts,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;eslint --fix&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;src/**/*.{css,less,json,html,md}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上述默认配置为例，在git提交前，husky会在命令行执行<code>.husky/pre-commit</code>文件里定义的终端命令即<code>npm test</code>进而调用<code>lint-staged</code>脚本命令， 该命令通过ESLint + Prettier进行代码格式校验和一键修复，若校验不通过或者一键修复后仍存在问题则禁止提交。</p></li><li><p><code>commit-msg</code></p><p>用于规范git提交时输入的注释信息。</p><p>详见下面<a href="#commitlint-config-js">commitlint.config.js</a></p></li></ul>',5),i={href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Fv)('<blockquote><p>为防止开发者误删husky配置文件，该文件会在每次项目启动后重新生成。</p></blockquote><h2 id="commitlint-config-js" tabindex="-1"><a class="header-anchor" href="#commitlint-config-js"><span>commitlint.config.js</span></a></h2><p>git 提交格式规范校验规则配置文件。</p><p>用于配合<code>husky</code>的<code>commit-msg</code>操作钩子进行<code>git commit</code>的提交信息的格式校验。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title=".husky/commit-msg"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>\n<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>\n\nnpx <span class="token parameter variable">--no</span> -- commitlint <span class="token parameter variable">--edit</span> <span class="token variable">$1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认配置：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="commitlint.config.js"><pre class="language-javascript"><code><span class="token comment">//默认配置</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 继承的规则</span>\n    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// 定义规则类型</span>\n    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// type 类型定义，表示 git 提交的 type 必须在以下类型范围内</span>\n        <span class="token string-property property">&#39;type-enum&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token number">2</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n                <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 新功能 feature</span>\n                <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 修复 bug</span>\n                <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 文档注释</span>\n                <span class="token string">&#39;config&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 架构配置修改</span>\n                <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 性能优化</span>\n                <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 增加测试</span>\n                <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 回退</span>\n                <span class="token string">&#39;others&#39;</span> <span class="token comment">// 其他</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token comment">// subject 大小写不做校验</span>\n        <span class="token string-property property">&#39;subject-case&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于上述默认配置，git 提交时填写提交内容的说明信息需遵循以下格式，否则会校验不通过报错而提交失败：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token operator">:</span> 说明信息  <span class="token comment">// 注意中间是英文冒号+空格</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>type</code>的可选值如下：</p><ul><li><code>config</code>: 项目构建配置的变动</li><li><code>docs</code>: 仅仅修改了文档等（不是指文案类的改动，而是指项目文档、代码注释等）</li><li><code>fix</code>: 修复 bug</li><li><code>add</code>: 增加新功能</li><li><code>perf</code>: 各种业务代码的修改，优化</li><li><code>revert</code>: 代码回滚</li><li><code>test</code>: 测试用例代码</li><li><code>others</code>:其他类型的更改（非即以上类型的改动）</li></ul><p>提交示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fix: 修复部分bug\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',13),o={href:"https://commitlint.js.org/#/guides-local-setup",target:"_blank",rel:"noopener noreferrer"},c={},l=(0,a(262).A)(c,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[t,(0,e.Lk)("blockquote",null,[(0,e.Lk)("p",null,[(0,e.eW)("配置文档："),(0,e.Lk)("a",i,[(0,e.eW)("husky 官方文档"),(0,e.bF)(a)])])]),p,(0,e.Lk)("p",null,[(0,e.eW)("参考文档："),(0,e.Lk)("a",o,[(0,e.eW)("commitlint 官方文档"),(0,e.bF)(a)])])])}]]),r=JSON.parse('{"path":"/git-hooks.html","title":"Git Hooks","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":".husky","slug":"husky","link":"#husky","children":[]},{"level":2,"title":"commitlint.config.js","slug":"commitlint-config-js","link":"#commitlint-config-js","children":[]}],"git":{"updatedTime":1712738129000},"filePathRelative":"git-hooks.md"}')}}]);