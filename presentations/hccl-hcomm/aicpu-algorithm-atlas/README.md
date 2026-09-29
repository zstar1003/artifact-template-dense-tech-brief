# HCCL AICPU 算法决策地图、节点释义与选型规律

**[下载当前最终版 PPT（24 页）](FINAL_HCCL_AICPU_%E5%86%B3%E7%AD%96%E5%9C%B0%E5%9B%BE_%E7%AE%97%E6%B3%95%E9%87%8A%E4%B9%89%E4%B8%8E%E9%80%89%E5%9E%8B%E8%A7%84%E5%BE%8B_24%E9%A1%B5.pptx)**

此版保留前 18 页，在末尾追加 6 页选型规律与性能关联分析。流程图、表格与文字可编辑。

| 页码 | 内容 |
|---|---|
| 1 | AllReduce 全幅 AICPU 决策地图 |
| 2 | Selector、Executor 与 Template 的分工 |
| 3 | 15 个算子索引与数据量口径 |
| 4–10 | 其他算子的 AICPU 选择路径 |
| 11 | SoleNHR、ConcurMeshTwoShotNHR、ParallelMeshNHR 数据流对比 |
| 12–16 | 全部 32 种叶子名称释义，覆盖 82 个算子与算法名组合 |
| 17 | NOT_MATCH 返回、Selector 遍历与错误传播 |
| 18 | 缩写、资源术语、判断条件和单位速查 |
| 19 | 条件与算法族的规律总览 |
| 20 | rank 数、逻辑层数、分组形状与链路组织的区别 |
| 21 | 单层 Mesh AllReduce 的数据量 × rank 数选型分区 |
| 22 | AR、AG、RS、AllToAll 等算子的不同大小切换规则 |
| 23 | NHR 与流水成本模型，显存流量、网络流量和算子吞吐的区分 |
| 24 | 规则关联、统计关联和性能关联的结论及验证方法 |

## 主要结论

条件与选型存在明确的规则关联。局部全连通 Mesh、CLOS、NHR 退化标记、对称多层 UboE 等条件，会导向不同算法结构。数据量在具体分支内进一步决定分块、分层并行或流水组织。

单独增加 rank 数或逻辑层数，并不意味着固定走向某一种算法。例如在非严格保序、FP32+SUM、没有额外 CLOS 路径的单层 Mesh AllReduce 中，512MiB 每 rank 输入在 P=8 时选 ChunkTwoShot，在 P=16 时选 TwoShot，因为 Chunk 判据包含 P²。第 21 页的 40 个组合均为规则推导，非性能测试结果。

流水和多链路的潜在收益来自阶段重叠与资源利用。是否更快仍需看数据量、启动成本、共享 HBM、网络瓶颈和同步依赖。没有用静态源码推出性能相关系数、胜率或加速比。

`NOT_MATCH` 的普通路径保持不变：AICPU 未匹配后，外层尝试同算子的剩余已注册 Selector；全部未匹配返回 `HCCL_E_NOT_SUPPORT`。

## 源码基线与范围

- [HCCL 源码](https://gitcode.com/cann/hccl)：`170ddeec539b4d693028ce6e0cf5c58933e4d46d`
- [HCOMM 源码](https://gitcode.com/cann/hcomm)：`87ce550f8f7c584e0ed89b0ec56699553d9c332d`

本材料是上述提交的静态源码分析，重点为普通 AICPU AutoSelector。插件、新 cost SelectorEngine、MC2 和执行阶段重选不包含在普通规则图中。源码路径、注册绑定及行号见幻灯片备注。性能机制参考本仓 `NHR.md`、`Mesh.md`、`Pipeline.md`，理想模型与实测结论已明确区分。

已检查 24 页渲染、包结构与布局。前 18 页与上版渲染逐像素一致。未进行原生 PowerPoint 应用或设备性能验证。

SHA-256：`a00ee0c6819a7249daa39f7de6e52f7aa458d0ebaec4ec16e80584981eeba72f`。公开文件与本地最终版一致，详见 [manifest.json](manifest.json)。

## 上一版本

[18 页：决策地图、算法释义与未匹配处理](FINAL_HCCL_AICPU_%E5%86%B3%E7%AD%96%E5%9C%B0%E5%9B%BE_%E7%AE%97%E6%B3%95%E9%87%8A%E4%B9%89%E4%B8%8E%E5%9B%9E%E9%80%80%E8%AF%B4%E6%98%8E.pptx)。保留原文件与原链接；文件名中的旧 FINAL 标记属于此前版本，当前最终版为上方 24 页版本。
