# my-wiki —— 我的个人博客

Astro 静态博客，**写 Markdown 就是发文章**。总运行成本 0 元。

## 目录结构

```
my-wiki/
├── src/
│   ├── consts.ts              # 站名、作者名（改这里）
│   ├── layouts/Base.astro     # 全站布局和样式（个性化改这里）
│   ├── content/blog/          # ← 文章都放这里，一个 .md 文件 = 一篇文章
│   └── pages/
│       ├── index.astro        # 主页（自动列出最新 5 篇）
│       └── blog/              # 文章列表页 + 文章页（自动生成）
├── public/                    # 图片等静态资源
└── astro.config.mjs
```

## 启动

```bash
npm install     # 仅第一次
npm run dev     # 开发服务器 → http://localhost:4321
```

## 发文章

新建 `src/content/blog/我的文章.md`：

```md
---
title: 文章标题
pubDate: 2026-09-22
description: 一句话摘要（可选）
---

正文随便写。
```

保存即生效，主页和札记页自动更新，无需改任何代码。

## 部署上线（免费）

1. 在 GitHub 建一个仓库，把 `my-wiki` 里的文件推上去（node_modules 不用传）
2. 到 [Cloudflare Pages](https://pages.cloudflare.com)（或 [Vercel](https://vercel.com)）
   连接这个仓库，构建命令填 `npm run build`，输出目录填 `dist`
3. 之后每次 `git push`，线上站点自动更新

想绑自己的域名（如 `xxx.top`，首年约 10 元），在 Pages 的自定义域名设置里按提示加一条 DNS 记录即可。海外托管无需备案。

## 命令速查

| 命令 | 作用 |
|---|---|
| `npm run dev` | 本地开发，改文件实时预览 |
| `npm run build` | 生成静态网站到 `dist/` |
| `npm run preview` | 预览 build 结果 |
