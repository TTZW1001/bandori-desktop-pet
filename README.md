# Desktop Pet Demo

这是一个本地桌宠试玩项目，目标是把 BanG Dream 角色的 Live2D 模型直接放到 Windows 桌面里，作为可互动的小型桌宠使用。

## 当前功能

- 透明无边框桌宠窗口
- 空白透明区鼠标点穿桌面，只在人物本体和必要 UI 上拦截鼠标
- 右键菜单切换角色
  - `角色库 -> 乐队 -> 人物`
  - `自定义 -> 选择模型文件`
- 自动读取角色动作并按组展示
- 左键点击人物触发动作与对白
- 鼠标靠近人物头部会触发轻反应
- 拖动人物移动桌宠位置
- 视线模式
  - `不跟随`
  - `跟随`
  - `随机看`
- 睡眠动作支持
  - `sleep01 / sleep02` 进入睡眠锁定
  - 睡眠期间会禁止其他互动并保持闭眼
- 对白框系统
  - 平时隐藏
  - 角色说话时显示名字与文本
  - 说话时带轻微口型动画
- 独立对白数据文件
  - 角色中文名
  - 普通互动对白
  - 模式对白
  - 角色气质分组
- 模式系统
  - `自定义模式`
  - `陪伴模式`
  - `专注模式`
  - 仅 `自定义模式` 显示动作与视线模式细调菜单
- 昵称系统
  - 可设置用户昵称
  - 角色会在部分对白里自然称呼用户昵称
- 设置菜单
  - `昵称设定`
  - `帮助`
  - `对白与表现`
    - `显示对白框`
    - `允许主动对白`
    - `开启口型动画`
- 最近使用角色
  - `切换角色 -> 最近使用`
  - 会记住最近切换过的角色与自定义模型
- 收藏角色
  - `切换角色 -> 收藏角色`
  - 可收藏当前角色
  - 收藏后会固定显示在菜单中，不受最近使用变化影响
- 帮助面板增强
  - 显示当前版本、当前角色、当前模式、当前昵称、当前模型
  - 包含快速上手、模式说明、维护提示、小提示
  - 帮助内容区支持内部滚动
  - 打开/关闭帮助后会重新适配模型布局，减少高个子角色被裁切的问题
- 专注模式番茄钟
  - 输入目标
  - 输入分钟数
  - 角落显示倒计时
  - 专注期间角色对白偏监督风格
- 桌宠内置输入面板
  - 设置昵称
  - 开始专注
- 头部滑动“摸头”交互
  - 鼠标在头部连续滑动可触发害羞动作和特殊对白

## 本阶段已完成

这一阶段主要完成了“角色个性化精修”和“数据层可维护化”：

- 把动作配置从主逻辑中拆出，单独维护到 `renderer/motion-data.js`
- 把对白配置集中维护到 `renderer/dialogue-data.js`
- 支持对白与动作强绑定
  - 例如：`{ text, motion, weight }`
- 支持动作权重
  - 例如：`{ motion, weight }`
- 支持摸头互动分层
  - `pettingLevels.1 / 2 / 3`
- 完成角色库乐队排序调整
  - `Poppin'Party -> Afterglow -> Hello Happy World! -> Pastel Palettes -> Roselia -> RAISE A SUILEN -> Morfonica -> MYGO_avemujica`
- 完成右键菜单结构优化
  - 仅 `自定义模式` 显示 `动作` 与 `视线模式` 细调
  - `陪伴模式`、`专注模式` 不再显示这两项手动细调
  - `设置` 菜单拆分为 `昵称设定` 与 `帮助`
- 完成设置项补强
  - 新增对白框显示、主动对白、口型动画开关
- 完成最近使用角色记录
  - 切角色后会自动写入最近使用列表
- 完成收藏角色入口
  - 支持收藏当前角色
  - 支持从收藏菜单直接切回常用角色
- 完成帮助面板二次细化与适配修复
  - 信息更完整
  - 内容可滚动
  - 关闭帮助后重新执行模型适配
- 完成以下乐队角色的动作/对白精修
  - `Poppin'Party`
  - `Afterglow`
  - `Hello Happy World!`
  - `Pastel Palettes`
  - `Roselia`
  - `RAISE A SUILEN`
  - `Morfonica`
  - `MYGO!!!!! / Ave Mujica / sumimi`

这些精修都遵循同一原则：

- 先参考角色人设与乐队气质
- 再核对 `models/` 里该角色真实存在的动作
- 最后把互动对白、动作权重、模式动作收进数据文件

## 运行

```powershell
npm install
npm start
```

也可以直接双击：

```text
start.bat
```

## 打包

直接双击：

```text
build-release.bat
```

它会做这几步：

1. 把项目复制到英文临时目录  
2. 在临时目录执行 `npm install`  
3. 执行 `npm run build`  
4. 把打好的单文件 `exe` 自动复制回 `release/`

之所以这样做，是因为当前项目原始路径里有中文，直接在原目录打包时更容易遇到 Windows/Electron Builder 的兼容问题。

### 应用名、图标在哪里改

都在：

- `package.json`

关键字段：

- `productName`
  控制应用显示名
- `build.win.icon`
  控制 Windows 图标路径
- `build.win.artifactName`
  控制生成出来的 `exe` 文件名
- `build.portable.artifactName`
  控制 portable 目标的输出文件名

当前图标文件是：

- `icon.ico`

## 目录

- `main.js`
  Electron 主进程，负责窗口、右键菜单、配置持久化。
- `preload.js`
  安全 IPC 桥，暴露桌宠需要的有限能力。
- `renderer/index.html`
  渲染层页面骨架。
- `renderer/styles.css`
  桌宠 UI、对白框、输入面板、专注倒计时样式。
- `renderer/renderer.js`
  Live2D 加载、动作、视线、模式、对白、交互主逻辑。
- `renderer/dialogue-data.js`
  角色名字、对白内容、模式对白、角色气质分组等可维护数据。
- `renderer/motion-data.js`
  默认动作池、角色专属动作池、模式动作池等可维护数据。

### 数据写法

- `dialogue-data.js` 现在既支持字符串数组，也支持对象条目：
  - `'今天也一起加油。'`
  - `{ text: '今天也一起加油。', motion: 'smile01', weight: 3 }`
- `motion-data.js` 现在支持字符串数组和带权重对象：
  - `'smile01'`
  - `{ motion: 'smile01', weight: 4 }`
- 摸头交互已经支持分层配置，优先读取：
  - `pettingLevels.1`
  - `pettingLevels.2`
  - `pettingLevels.3`
- `models/`
  内置角色库。按乐队和角色目录组织。

## 要改哪里

如果你后面想自己微调，最常改的就是下面这两个文件：

- `renderer/dialogue-data.js`
- `renderer/motion-data.js`

### 改对白

去这里：

- `renderer/dialogue-data.js`

你主要会改这些块：

- `characterNames`
  - 角色英文目录名到中文名的映射
- `characterDialogues`
  - 每个角色普通互动对白
  - 例如：`tapHead / tapBody / hover / drag / manual`
- `defaultDialogues`
  - 没有专属配置时的通用兜底对白
- `modeDialogues`
  - 陪伴模式、专注模式等模式对白
- `specialDialogues`
  - 摸头、特殊事件等对白

### 改动作

去这里：

- `renderer/motion-data.js`

你主要会改这些块：

- `defaultMotions`
  - 全角色共用的默认动作池
- `characterMotions`
  - 每个角色的专属动作池
  - 例如：`tapHead / tapBody / hover / drag / companion / focus`
- `pettingLevels`
  - 摸头分层动作
- `idle`
  - 早上、白天、傍晚、夜间待机动作

### 一句台词直接绑动作

如果你希望某一句话固定配某个动作，就在 `renderer/dialogue-data.js` 里写：

```js
{ text: '今天也一起加油。', motion: 'smile01', weight: 3 }
```

### 让某个动作更常出现

如果你只是想让某个互动更偏向某几个动作，就在 `renderer/motion-data.js` 里写：

```js
{ motion: 'smile01', weight: 4 }
```

规则是：

- 有强绑定时，优先用对白里绑定的动作
- 没有强绑定时，再走动作池权重随机

## 启动兜底

- 默认角色优先从应用内部 `models/` 角色库中选择，不再依赖外部示例资源目录。
- 如果保存的模型路径已经失效，启动时会自动回退到内置角色库中的默认角色。
- 如果桌宠上次被记到了屏幕外，启动时会自动回到主屏幕右下区域。
- 内置角色库路径会以相对标记方式保存，减少打包后因为开发机绝对路径失效而导致的启动问题。

## 模式说明

### 自定义模式

- 保留目前的大部分自由互动逻辑
- 可以自行切动作、切视线模式
- 适合自由把玩和测试模型

### 陪伴模式

- 会更主动一点
- 偶尔自己说短句
- 语气偏陪伴和安抚
- 适合挂机、轻办公、写东西时开着
- 不显示动作和视线模式的手动细调菜单

### 专注模式

- 启动时输入小目标和分钟数
- 右上角显示小型倒计时
- 互动时角色会偏监督、提醒和鼓励
- 倒计时结束后会给结算对白
- 不显示动作和视线模式的手动细调菜单

## 最近修复

- 修复帮助面板信息过长时显示不全的问题
  - 改为帮助内容区内部滚动
- 修复关闭帮助后部分高个子角色显示不全的问题
  - 关闭弹层后会重新执行一次模型适配

## 维护建议

如果要继续扩充角色个性，优先改这个文件：

- `renderer/dialogue-data.js`
- `renderer/motion-data.js`

推荐维护顺序：

1. 先补角色中文名
2. 再补角色普通互动对白
3. 再补角色专属动作池和模式动作池
4. 再补不同模式下的语气
5. 最后再补特殊互动对白，例如摸头、完成专注、睡醒等
