import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.D7g5xyU9.js";const c=JSON.parse('{"title":"脚手架","description":"","frontmatter":{},"headers":[],"relativePath":"cli.md","filePath":"cli.md","lastUpdated":1712738129000}'),l={name:"cli.md"},h=n(`<h1 id="脚手架" tabindex="-1">脚手架 <a class="header-anchor" href="#脚手架" aria-label="Permalink to &quot;脚手架&quot;">​</a></h1><p><code>swico-cli</code> 是Swico的官方脚手架工具，通过它可以轻松创建swico项目。</p><h2 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h2><p>全局安装此脚手架：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> swico-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>在当前路径下创建项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">swico</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [project-name]</span></span></code></pre></div><p>如果当前路径下已存在同名项目，则会提示选择是否覆盖：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> The destination folder already exists, please select: </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Overwritten</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cancel</span></span></code></pre></div><p>创建命令执行后，会提供两个创建选项：</p><ul><li>选择模板类型：</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Please </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> the template type:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React18.2 + Typescript5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vue3.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Typescript5</span></span></code></pre></div><ul><li>选择依赖包管理工具，暂且只支持<code>npm</code>和<code>pnpm</code>：</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Please </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> the npm type: </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> npm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span></span></code></pre></div><p>然后等待脚手架远程拉取模板并自动安装依赖后，项目即创建完成：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> built-in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> template...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulled!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Installing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">added</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 967</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audited</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 968</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">290</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> looking</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> funding</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fund\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> details</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">found</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vulnerabilities</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">√</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> finished!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Successfully</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Created!</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;)     (\`\\ .-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> )</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ),</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(_)---\\_),--./  .--.  ,-.-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   .-----.  .-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;),-----.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/    _ | |      |  |  |  |OO) &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .--./ ( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OO</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;  .-.  &#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  :\` \`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  \\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;-. /   |  | |  |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">..</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;.|  |_)|  |(_//_) |OO  )\\_) |  |\\|  |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.-._)   \\|         | ,|  |_.&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;|   \\ |  | |  |</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\       /|   ,&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;  &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\    \`&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;-&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`-----&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;--&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &#39;--&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--&#39;     \`-----&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-----</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Now you can cd test and npm run start to start your Swico App!</span></span></code></pre></div><h2 id="不使用脚手架" tabindex="-1">不使用脚手架 <a class="header-anchor" href="#不使用脚手架" aria-label="Permalink to &quot;不使用脚手架&quot;">​</a></h2><p>Swico支持在不使用脚手架的情况下，提供基础模板的远程Git仓库。</p><p>开发者可直接通过git拉取基础模板后，手动安装依赖进行开发（但要注意部分模板配置可能需要开发者手动设置）：</p><ul><li><a href="https://gitee.com/fanlaBoy/swico-template-vue.git" target="_blank" rel="noreferrer">Vue模板</a></li><li><a href="https://gitee.com/fanlaBoy/swico-template-react.git" target="_blank" rel="noreferrer">React模板</a></li></ul>`,20),p=[h];function t(k,e,F,d,r,g){return a(),i("div",null,p)}const C=s(l,[["render",t]]);export{c as __pageData,C as default};
