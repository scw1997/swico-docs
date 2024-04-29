"use strict";(self.webpackChunksecywo_docs=self.webpackChunksecywo_docs||[]).push([[24],{674:(a,s,n)=>{n.r(s),n.d(s,{comp:()=>c,data:()=>r});var e=n(641);const p=(0,e.Fv)('<h1 id="脚手架" tabindex="-1"><a class="header-anchor" href="#脚手架"><span>脚手架</span></a></h1><p><code>swico-cli</code> 是Swico的官方脚手架工具，通过它可以轻松创建swico项目。</p><h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用"><span>安装使用</span></a></h2><p>全局安装此脚手架：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i swico-cli <span class="token parameter variable">-g</span>\n</code></pre></div><p>在当前路径下创建项目：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swico create <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>\n</code></pre></div><p>如果当前路径下已存在同名项目，则会提示选择是否覆盖：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>? The destination folder already exists, please select: \n<span class="token operator">&gt;</span> Overwritten\nCancel\n</code></pre></div><p>创建命令执行后，会提供两个创建选项：</p><ul><li>选择模板类型：</li></ul><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>? Please <span class="token keyword">select</span> the template type:\n<span class="token operator">&gt;</span> React18.2 + Typescript5\nVue3.4 + Typescript5\n</code></pre></div><ul><li>选择依赖包管理工具，暂且只支持<code>npm</code>和<code>pnpm</code>：</li></ul><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>? Please <span class="token keyword">select</span> the <span class="token function">npm</span> type: \n<span class="token operator">&gt;</span> <span class="token function">npm</span>\n<span class="token function">pnpm</span>\n</code></pre></div><p>然后等待脚手架远程拉取模板并自动安装依赖后，项目即创建完成：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>- pulling the built-in template<span class="token punctuation">..</span>.\n\n√ Successfully pulled<span class="token operator">!</span>\n\nInstalling dependencies<span class="token punctuation">..</span>.\n\nadded <span class="token number">967</span> packages, and audited <span class="token number">968</span> packages <span class="token keyword">in</span> 8s\n\n<span class="token number">290</span> packages are looking <span class="token keyword">for</span> funding\nrun <span class="token variable"><span class="token variable">`</span><span class="token function">npm</span> fund<span class="token variable">`</span></span> <span class="token keyword">for</span> details\n\nfound <span class="token number">0</span> vulnerabilities\n√ Install finished<span class="token operator">!</span>\n\nSuccessfully Created<span class="token operator">!</span>\n\n\n.-<span class="token string">&#39;)     (`\\ .-&#39;</span><span class="token punctuation">)</span> /<span class="token variable"><span class="token variable">`</span>\n<span class="token punctuation">(</span> OO <span class="token punctuation">)</span>.    <span class="token variable">`</span></span>.<span class="token punctuation">(</span> OO <span class="token punctuation">)</span>,<span class="token string">&#39;\n(_)---\\_),--./  .--.  ,-.-&#39;</span><span class="token punctuation">)</span>   .-----.  .-<span class="token string">&#39;),-----.\n/    _ | |      |  |  |  |OO) &#39;</span>  .--./ <span class="token punctuation">(</span> OO<span class="token string">&#39;  .-.  &#39;</span>\n<span class="token punctuation">\\</span>  <span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">`</span> <span class="token variable">`</span></span><span class="token builtin class-name">.</span> <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>, <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token punctuation">\\</span> <span class="token operator">|</span>  <span class="token operator">|</span><span class="token punctuation">(</span><span class="token string">&#39;-. /   |  | |  |\n&#39;</span><span class="token punctuation">..</span><span class="token variable"><span class="token variable">`</span>&#39;<span class="token string">&#39;.)|  |.&#39;</span><span class="token builtin class-name">.</span><span class="token operator">|</span>  <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span>  <span class="token operator">|</span><span class="token punctuation">(</span>_//_<span class="token punctuation">)</span> <span class="token operator">|</span>OO  <span class="token punctuation">)</span><span class="token punctuation">\\</span>_<span class="token punctuation">)</span> <span class="token operator">|</span>  <span class="token operator">|</span><span class="token punctuation">\\</span><span class="token operator">|</span>  <span class="token operator">|</span>\n.-._<span class="token punctuation">)</span>   <span class="token punctuation">\\</span><span class="token operator">|</span>         <span class="token operator">|</span> ,<span class="token operator">|</span>  <span class="token operator">|</span>_.&#39;<span class="token operator">||</span>  <span class="token operator">|</span><span class="token variable">`</span></span>-<span class="token string">&#39;|   \\ |  | |  |\n\\       /|   ,&#39;</span><span class="token builtin class-name">.</span>   <span class="token operator">|</span><span class="token punctuation">(</span>_<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token punctuation">(</span>_<span class="token string">&#39;  &#39;</span>--<span class="token string">&#39;\\    `&#39;</span>  <span class="token string">&#39;-&#39;</span>  <span class="token string">&#39;\n`-----&#39;</span> <span class="token string">&#39;--&#39;</span>   <span class="token string">&#39;--&#39;</span>  <span class="token variable"><span class="token variable">`</span>--&#39;     <span class="token variable">`</span></span>-----<span class="token string">&#39;      `-----&#39;</span>\n\nNow you can <span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span> and <span class="token function">npm</span> run start to start your Swico App<span class="token operator">!</span>\n\n</code></pre></div><h2 id="不使用脚手架" tabindex="-1"><a class="header-anchor" href="#不使用脚手架"><span>不使用脚手架</span></a></h2><p>Swico支持在不使用脚手架的情况下，提供基础模板的远程Git仓库。</p><p>开发者可直接通过git拉取基础模板后，手动安装依赖进行开发（但要注意部分模板配置可能需要开发者手动设置）：</p>',19),t={href:"https://gitee.com/fanlaBoy/swico-template-vue.git",target:"_blank",rel:"noopener noreferrer"},o={href:"https://gitee.com/fanlaBoy/swico-template-react.git",target:"_blank",rel:"noopener noreferrer"},l={},c=(0,n(262).A)(l,[["render",function(a,s){const n=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[p,(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.Lk)("a",t,[(0,e.eW)("Vue模板"),(0,e.bF)(n)])]),(0,e.Lk)("li",null,[(0,e.Lk)("a",o,[(0,e.eW)("React模板"),(0,e.bF)(n)])])])])}]]),r=JSON.parse('{"path":"/cli.html","title":"脚手架","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装使用","slug":"安装使用","link":"#安装使用","children":[]},{"level":2,"title":"不使用脚手架","slug":"不使用脚手架","link":"#不使用脚手架","children":[]}],"git":{"updatedTime":1712738129000},"filePathRelative":"cli.md"}')}}]);