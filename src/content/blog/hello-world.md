---
title: Hello World —— 我的博客开张了
pubDate: 2026-09-22
description: 第一篇文章：这个站是怎么搭起来的。
tags: [建站, Astro]
---

从今天起，这里就是我的自留地。

## 这个站是怎么来的

整个网站的搭建成本是 **0 元**：用 [Astro](https://astro.build) 把 Markdown 生成静态网页，
托管在免费的 Pages 服务上。没有服务器、没有数据库，也就没有月租。

## 怎么发新文章

在 `src/content/blog/` 里新建一个 `.md` 文件，开头写上标题、日期和标签：

```md
---
title: 文章标题
pubDate: 2026-09-22
tags: [随笔]
---

正文用 Markdown 随便写，支持代码块、引用、图片。
```

保存之后，主页和「札记」页会**自动**出现这篇新文章，侧边栏的标签云也会同步更新。

> 这是一段引用。全站的 HUD 界面样式都集中在 `src/layouts/Base.astro` 里，
> 想改配色改 `:root` 里的变量就行。
