# 吴泽凯高考模拟器 🎓

一个有趣的React网页游戏，模拟吴泽凯在七宝中学教室参加高考的场景。

## 游戏特色

- 🏫 **七宝中学教室背景** - 20张桌椅的教室环境
- 👨‍🎓 **角色扮演** - 扮演吴泽凯参加高考模拟
- 📚 **双科考试** - 地理和政治科目混合题目
- 🎯 **智能评分** - 根据得分分配不同层次的大学
- 📱 **移动端适配** - 完美支持手机和平板设备
- 🎨 **现代UI** - 使用TailwindCSS打造的美丽界面

## 游戏规则

- **题目数量**: 20道题（地理10道 + 政治10道）
- **题型**: 四选一选择题（A/B/C/D）
- **分值**: 每题5分，满分100分
- **学校分配**:
  - 100分 → 北京大学
  - 80-95分 → 985大学（随机）
  - 60-75分 → 211大学（随机）
  - 50-55分 → 上海师范大学
  - 40-45分 → 上海二本院校（随机）
  - 0分 → 大专

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **样式框架**: TailwindCSS
- **部署平台**: GitHub Pages

## 本地运行

### 环境要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/wuzekai-exam-simulator.git
   cd wuzekai-exam-simulator
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器**
   访问 `http://localhost:5173` 即可开始游戏

### 构建生产版本

```bash
npm run build
```

构建后的文件将生成在 `dist` 目录中。

## GitHub Pages 部署

### 自动部署（推荐）

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **配置GitHub Pages**
   - 进入GitHub仓库设置
   - 找到 "Pages" 选项
   - 选择 "Deploy from a branch"
   - 选择 "gh-pages" 分支（如果没有会自动创建）
   - 点击 "Save"

3. **安装部署依赖**
   ```bash
   npm install -D gh-pages
   ```

4. **添加部署脚本到package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **执行部署**
   ```bash
   npm run deploy
   ```

### 手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **创建gh-pages分支**
   ```bash
   git checkout -b gh-pages
   ```

3. **复制构建文件**
   ```bash
   cp -r dist/* .
   ```

4. **提交并推送**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## 项目结构

```
wuzekai-exam-simulator/
├── public/                 # 静态资源
├── src/
│   ├── components/         # React组件
│   │   └── Game.jsx       # 游戏主组件
│   ├── data/              # 数据文件
│   │   ├── questions.js   # 题目数据
│   │   └── universities.js # 大学名单
│   ├── utils/             # 工具函数
│   │   └── gameLogic.js   # 游戏逻辑
│   ├── App.jsx            # 主应用组件
│   ├── main.jsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML模板
├── package.json           # 项目配置
├── vite.config.js         # Vite配置
├── tailwind.config.js     # TailwindCSS配置
└── README.md              # 项目说明
```

## 自定义配置

### 修改题目

编辑 `src/data/questions.js` 文件，可以：
- 添加新题目
- 修改现有题目
- 调整题目难度

### 修改大学名单

编辑 `src/data/universities.js` 文件，可以：
- 添加新的大学
- 调整大学分类
- 修改分配逻辑

### 调整样式

编辑 `tailwind.config.js` 文件，可以：
- 自定义颜色主题
- 添加新的样式类
- 配置响应式断点

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 GitHub Issue
- 发送邮件至：[your-email@example.com]

---

**祝吴泽凯考试顺利！** 🎓✨
