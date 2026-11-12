# Hello, GitHub

一个零依赖的静态页面骨架，由 **DSH** 通过 GitHub REST API 直接写入仓库。

## 本地运行

不需要任何构建工具，双击 `index.html` 就能看到效果。

想用本地服务器（更接近线上环境）：

```bash
# 有 Python
python -m http.server 8000

# 或者有 Node
npx serve .
```

然后打开 http://localhost:8000

## 文件结构

```
.
├── index.html          # 页面结构
├── assets/
│   ├── styles.css      # 样式（自动适配深色模式）
│   └── app.js          # 交互脚本
└── README.md
```

## 部署到 GitHub Pages

1. 进入仓库 **Settings → Pages**
2. **Source** 选 `Deploy from a branch`
3. Branch 选 `main`，目录选 `/ (root)`，点 **Save**
4. 等 1～2 分钟，访问 `https://<你的用户名>.github.io/hello-dsh/`

## 接下来

这个仓库只是个起点，你可以让我把它改成：

- 个人主页 / 作品集
- 某个具体工具的前端页面
- Node、Python 或 React 项目（需要相应脚手架）

直接告诉我需求即可。
