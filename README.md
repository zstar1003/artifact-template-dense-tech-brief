# 紧凑技术汇报 · Dense Tech Brief

面向架构评审、源码调用链和工程汇报的高信息密度 PPT 风格技能。重点是把关系讲清楚：紧凑条目、细线分组、函数与中文释义相邻，长说明放进讲解备注。

![软件栈与调用边界参考页](assets/preview.png)

## 风格约定

- 红色标题、浅灰条目、少量淡黄色重点；红/蓝细线用于区分层次和边界。
- 以 1280 × 720 为排版基准，同组条目约 2 px 间距，相关区块约 8–10 px 间距。
- 函数名与含义紧邻，输入、输出和分支条件放在对应位置，不额外堆叠解释侧栏。
- 用分层软件栈、调用树、原生矩阵、并列执行路径和参数流承载信息，不固定页数或列数。
- 不把互斥、缓存命中、兼容或回退路径误画成必经串行调用；关系需要来源证据。
- 保留可编辑 PPTX；备注承载长函数全称、详细释义、来源与讲解顺序。

密度来自有效信息和紧凑排版，不来自缩小字号或填充无关内容。

## 安装

将仓库克隆到 Codex 的个人技能目录。目标目录应不存在；若已有同名技能，先检查已有内容，不要直接覆盖。

```bash
git clone https://github.com/zstar1003/artifact-template-dense-tech-brief.git "${CODEX_HOME:-$HOME/.codex}/skills/artifact-template-dense-tech-brief"
```

## 使用

在支持技能的 Codex 环境中调用：

```text
使用 $artifact-template-dense-tech-brief，基于提供的源码分析材料，
制作一份 6 页的技术汇报 PPT。讲清 API 的含义、调用顺序、
公共资源和不同执行路径，详细解释写入备注。
```

这是风格与参考模板，不是独立的 PPT 生成器。PPTX 的导入、生成、渲染和检查交由当前环境中的 Presentations 技能及其运行时完成。`scripts/compact-layout.mjs` 是可选辅助模块，接收已有的 slide 对象，不安装依赖、不获取资料，也不单独导出文件。

默认中文字体为 PingFang SC；其他平台应选用已安装的中文字体并重新检查换行和溢出。

## 文件结构

```text
SKILL.md                         技能入口与使用规则
artifact-template.json           模板类型与参考资源路径
agents/openai.yaml               名称、默认提示词和预览配置
references/design-system.md      配色、字号、间距和视觉检查标准
references/layout-recipes.md     页面组合方式与参考坐标
scripts/compact-layout.mjs       可选的排版辅助函数
assets/reference.pptx            完整 7 页可编辑参考，含讲解备注
assets/preview.png               首屏参考
assets/layouts/                  调用树、能力矩阵和执行路径参考
```

## 版式示例

### 调用树与条件关系

![调用树参考](assets/layouts/call-tree.png)

### 能力矩阵与 API 释义

![能力矩阵参考](assets/layouts/matrix.png)

### 并列执行路径

![执行路径参考](assets/layouts/engine-comparison.png)

## 参考内容的边界

保留的 HCCL / HCOMM PPT 是本风格的版式样例，分析来源为公开的 [HCCL](https://gitcode.com/cann/hccl) 与 [HCOMM](https://gitcode.com/cann/hcomm) 仓库。参考页中的版本、函数和源码位置只对应当时的分析，不应直接用作其他版本或其他主题的事实依据。

换主题时保留视觉组织方式，替换业务内容与来源；不固定为参考文件的 7 页，也不复制原主题的结论。此技能并非上述项目的官方模板。
