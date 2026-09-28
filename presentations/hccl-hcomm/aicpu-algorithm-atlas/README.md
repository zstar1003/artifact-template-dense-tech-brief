# HCCL AICPU 算法决策地图与节点释义

**[下载最终版 PPT（18 页）](FINAL_HCCL_AICPU_%E5%86%B3%E7%AD%96%E5%9C%B0%E5%9B%BE_%E7%AE%97%E6%B3%95%E9%87%8A%E4%B9%89%E4%B8%8E%E5%9B%9E%E9%80%80%E8%AF%B4%E6%98%8E.pptx)**

此版保留原 10 页全幅决策地图，在末尾增加 8 页解释。流程图、表格与文字可编辑。

| 页码 | 内容 |
|---|---|
| 1 | AllReduce 全幅 AICPU 决策地图 |
| 2 | Selector、Executor 与 Template 的分工 |
| 3 | 15 个算子索引与数据量口径 |
| 4–10 | 其他算子的 AICPU 选择路径 |
| 11 | 名称拆解，SoleNHR、ConcurMeshTwoShotNHR、ParallelMeshNHR 数据流对比 |
| 12–16 | 全部 32 种叶子名称逐项释义，覆盖 82 个算子与算法名组合 |
| 17 | NOT_MATCH 的返回、上层 Selector 遍历与错误传播 |
| 18 | 缩写、资源术语、判断条件和单位速查 |

## 读图要点

- `Sole` 不表示单卡；`Concur`、`Parallel`、`Sequence`、`PipeLine` 要结合实际模板与编排理解。
- 在所分析的普通 AutoSelector 路径里，AICPU 返回 `NOT_MATCH` 后，外层继续尝试同算子的剩余已注册 Selector。全部未匹配则返回 `HCCL_E_NOT_SUPPORT`，不会自动补选一个默认算法。
- `SoleNHRAicpuReduce` 的 AllReduce 模板先收集、再本地归约，不能直接套普通 `SoleNHR` 的 ReduceScatter + AllGather 流量模型。

## 源码基线与范围

- [HCCL 源码](https://gitcode.com/cann/hccl)：`170ddeec539b4d693028ce6e0cf5c58933e4d46d`
- [HCOMM 源码](https://gitcode.com/cann/hcomm)：`87ce550f8f7c584e0ed89b0ec56699553d9c332d`

本材料是上述提交的静态源码分析，重点为已进入普通 AICPU AutoSelector 的分支。插件、新 cost SelectorEngine、MC2 和执行阶段重选等路径不包含在红色节点的普通规则图中。源码路径、注册绑定及行号附于幻灯片备注。内容不代表其他版本的支持矩阵，也不是上板性能测量结果。

已检查 18 页渲染、包结构与布局；前 10 页与原稿渲染逐像素一致。32 种叶子名称均匹配实际 Executor 注册。未进行原生 PowerPoint 应用或设备执行验证。

SHA-256：`5c10751dc39de6ff0755ec1ba1233c6993bd950a5ba304a1a20957371aa99fbc`。本公开副本与本地最终版一致；校验信息见 [manifest.json](manifest.json)。
