# HCCL / HCOMM 技术汇报 PPT 归档

本目录收录本次分析已交付的 56 份 PPTX：1 份最终版、55 份历史版本。构建目录中的重复候选文件不收录。

## 最终版

**[FINAL · HCOMM 流程与 Engine API 测试总表 r2（23 页）](FINAL_HCOMM_%E6%B5%81%E7%A8%8B%E4%B8%8EEngine_API%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r2.pptx)**

原文件名：`HCOMM_流程与Engine_API测试总表_r2.pptx`。`FINAL` 标记的是本轮迭代的最终交付版本，文件内容与本地该版本一致。

主要内容：AllToAll 跨层流程、通道申请与创建、资源交换及 AICPU_TS / CCU / AIV 接口测试表。共用接口在前，部分共用、各 Engine 专用和特殊分支在后。

分析口径：Ascend 950 / OPBASE 新流程。流程展开以 AICPU_TS 为主，测试表对比受支持的 CCU_MS / CCU_SCHED 与 AIV 路径。静态源码分析，未上板采集，不是官方接口规范或运行期覆盖证明。

该版依据的源码提交：

- HCCL：`170ddeec539b4d693028ce6e0cf5c58933e4d46d`
- HCOMM：`87ce550f8f7c584e0ed89b0ec56699553d9c332d`

源码项目：[HCCL](https://gitcode.com/cann/hccl)、[HCOMM](https://gitcode.com/cann/hcomm)。源码路径及行号对应当时版本，不应直接套用于其他版本。

## 目录说明

- `FINAL_*.pptx`：本轮最终版，优先阅读。
- `history/`：其余迭代版本，保留原文件名，供回溯内容和版式变化。
- `manifest.json`：文件名、页数、最终版标记与 SHA-256 校验值。

历史版本可能包含已被后续版本修正的内容，不代表当前结论，也不意味着所有版本都采用当前 Skill 的风格规则。

## 完整版本清单

最终版置顶，历史版按交付文件生成时间排列。

| 状态 | 文件 | 页数 |
|---|---|---:|
| **FINAL 最终版** | [HCOMM_流程与Engine_API测试总表_r2.pptx](FINAL_HCOMM_%E6%B5%81%E7%A8%8B%E4%B8%8EEngine_API%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r2.pptx) | 23 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v1.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v1.pptx) | 3 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v2.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v2.pptx) | 3 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v3.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v3.pptx) | 3 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v4.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v4.pptx) | 3 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v5.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v5.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Briefing_v6.pptx](history/HCCL_HCOMM_API_Call_Chain_Briefing_v6.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Reference_Style_v7.pptx](history/HCCL_HCOMM_API_Call_Chain_Reference_Style_v7.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Reference_Style_v8.pptx](history/HCCL_HCOMM_API_Call_Chain_Reference_Style_v8.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Reference_Style_v9.pptx](history/HCCL_HCOMM_API_Call_Chain_Reference_Style_v9.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Reference_Style_v10.pptx](history/HCCL_HCOMM_API_Call_Chain_Reference_Style_v10.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Reference_Style_v11.pptx](history/HCCL_HCOMM_API_Call_Chain_Reference_Style_v11.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Annotated_v12.pptx](history/HCCL_HCOMM_API_Call_Chain_Annotated_v12.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Fullwidth_v13.pptx](history/HCCL_HCOMM_API_Call_Chain_Fullwidth_v13.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Fullwidth_v14.pptx](history/HCCL_HCOMM_API_Call_Chain_Fullwidth_v14.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Fullwidth_v15.pptx](history/HCCL_HCOMM_API_Call_Chain_Fullwidth_v15.pptx) | 4 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Engineering_v16.pptx](history/HCCL_HCOMM_API_Call_Chain_Engineering_v16.pptx) | 7 |
| 历史版 | [HCCL_HCOMM_API_Call_Chain_Engineering_v17.pptx](history/HCCL_HCOMM_API_Call_Chain_Engineering_v17.pptx) | 7 |
| 历史版 | [HCCL_HCOMM_Compact_v18.pptx](history/HCCL_HCOMM_Compact_v18.pptx) | 7 |
| 历史版 | [HCCL_HCOMM_Compact_v19.pptx](history/HCCL_HCOMM_Compact_v19.pptx) | 7 |
| 历史版 | [HCOMM_API_Classification_AICPU_AllToAll_v1.pptx](history/HCOMM_API_Classification_AICPU_AllToAll_v1.pptx) | 7 |
| 历史版 | [HCOMM_API_Classification_AICPU_AllToAll_v2.pptx](history/HCOMM_API_Classification_AICPU_AllToAll_v2.pptx) | 7 |
| 历史版 | [HCOMM_A_Architecture_r1.pptx](history/HCOMM_A_Architecture_r1.pptx) | 7 |
| 历史版 | [HCOMM_B_Technical_Review_r1.pptx](history/HCOMM_B_Technical_Review_r1.pptx) | 6 |
| 历史版 | [HCOMM_A_Architecture_r2.pptx](history/HCOMM_A_Architecture_r2.pptx) | 7 |
| 历史版 | [HCOMM_B_Technical_Review_r2.pptx](history/HCOMM_B_Technical_Review_r2.pptx) | 6 |
| 历史版 | [HCOMM_A_Architecture_Detailed_v3.pptx](history/HCOMM_A_Architecture_Detailed_v3.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Detailed_v4.pptx](history/HCOMM_A_Architecture_Detailed_v4.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Detailed_v5.pptx](history/HCOMM_A_Architecture_Detailed_v5.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Detailed_v6.pptx](history/HCOMM_A_Architecture_Detailed_v6.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Swimlanes_r1.pptx](history/HCOMM_A_Architecture_Swimlanes_r1.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Swimlanes_r2.pptx](history/HCOMM_A_Architecture_Swimlanes_r2.pptx) | 9 |
| 历史版 | [HCOMM_A_Architecture_Swimlanes_r3.pptx](history/HCOMM_A_Architecture_Swimlanes_r3.pptx) | 9 |
| 历史版 | [HCOMM_AllToAll_逐步讲解_r1.pptx](history/HCOMM_AllToAll_%E9%80%90%E6%AD%A5%E8%AE%B2%E8%A7%A3_r1.pptx) | 15 |
| 历史版 | [HCOMM_AllToAll_逐步讲解_r2.pptx](history/HCOMM_AllToAll_%E9%80%90%E6%AD%A5%E8%AE%B2%E8%A7%A3_r2.pptx) | 16 |
| 历史版 | [HCOMM_AllToAll_一页全流程_r1.pptx](history/HCOMM_AllToAll_%E4%B8%80%E9%A1%B5%E5%85%A8%E6%B5%81%E7%A8%8B_r1.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_一页全流程_r2.pptx](history/HCOMM_AllToAll_%E4%B8%80%E9%A1%B5%E5%85%A8%E6%B5%81%E7%A8%8B_r2.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_一页全流程_r3.pptx](history/HCOMM_AllToAll_%E4%B8%80%E9%A1%B5%E5%85%A8%E6%B5%81%E7%A8%8B_r3.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_一页泳道_r1.pptx](history/HCOMM_AllToAll_%E4%B8%80%E9%A1%B5%E6%B3%B3%E9%81%93_r1.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_一页泳道_r2.pptx](history/HCOMM_AllToAll_%E4%B8%80%E9%A1%B5%E6%B3%B3%E9%81%93_r2.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_控制数据分层泳道_r1.pptx](history/HCOMM_AllToAll_%E6%8E%A7%E5%88%B6%E6%95%B0%E6%8D%AE%E5%88%86%E5%B1%82%E6%B3%B3%E9%81%93_r1.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_控制数据分层泳道_r2.pptx](history/HCOMM_AllToAll_%E6%8E%A7%E5%88%B6%E6%95%B0%E6%8D%AE%E5%88%86%E5%B1%82%E6%B3%B3%E9%81%93_r2.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_控制数据分层泳道_r3.pptx](history/HCOMM_AllToAll_%E6%8E%A7%E5%88%B6%E6%95%B0%E6%8D%AE%E5%88%86%E5%B1%82%E6%B3%B3%E9%81%93_r3.pptx) | 1 |
| 历史版 | [HCOMM_AllToAll_总览与分段详解_r1.pptx](history/HCOMM_AllToAll_%E6%80%BB%E8%A7%88%E4%B8%8E%E5%88%86%E6%AE%B5%E8%AF%A6%E8%A7%A3_r1.pptx) | 9 |
| 历史版 | [HCOMM_AllToAll_总览与分段详解_r2.pptx](history/HCOMM_AllToAll_%E6%80%BB%E8%A7%88%E4%B8%8E%E5%88%86%E6%AE%B5%E8%AF%A6%E8%A7%A3_r2.pptx) | 9 |
| 历史版 | [HCOMM_AllToAll_分层调用泳道_r1.pptx](history/HCOMM_AllToAll_%E5%88%86%E5%B1%82%E8%B0%83%E7%94%A8%E6%B3%B3%E9%81%93_r1.pptx) | 13 |
| 历史版 | [HCOMM_AllToAll_分层调用泳道_r2.pptx](history/HCOMM_AllToAll_%E5%88%86%E5%B1%82%E8%B0%83%E7%94%A8%E6%B3%B3%E9%81%93_r2.pptx) | 13 |
| 历史版 | [HCOMM_AllToAll_调用关系流程图_r1.pptx](history/HCOMM_AllToAll_%E8%B0%83%E7%94%A8%E5%85%B3%E7%B3%BB%E6%B5%81%E7%A8%8B%E5%9B%BE_r1.pptx) | 13 |
| 历史版 | [HCOMM_AllToAll_阶段调用展开图_r1.pptx](history/HCOMM_AllToAll_%E9%98%B6%E6%AE%B5%E8%B0%83%E7%94%A8%E5%B1%95%E5%BC%80%E5%9B%BE_r1.pptx) | 13 |
| 历史版 | [HCOMM_AllToAll_阶段调用展开图_r2.pptx](history/HCOMM_AllToAll_%E9%98%B6%E6%AE%B5%E8%B0%83%E7%94%A8%E5%B1%95%E5%BC%80%E5%9B%BE_r2.pptx) | 13 |
| 历史版 | [HCOMM_AllToAll_阶段调用展开图_r3.pptx](history/HCOMM_AllToAll_%E9%98%B6%E6%AE%B5%E8%B0%83%E7%94%A8%E5%B1%95%E5%BC%80%E5%9B%BE_r3.pptx) | 13 |
| 历史版 | [HCOMM_算子流程与API测试总表_r1.pptx](history/HCOMM_%E7%AE%97%E5%AD%90%E6%B5%81%E7%A8%8B%E4%B8%8EAPI%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r1.pptx) | 20 |
| 历史版 | [HCOMM_算子流程与API测试总表_r2.pptx](history/HCOMM_%E7%AE%97%E5%AD%90%E6%B5%81%E7%A8%8B%E4%B8%8EAPI%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r2.pptx) | 20 |
| 历史版 | [HCOMM_算子流程与API测试总表_r3.pptx](history/HCOMM_%E7%AE%97%E5%AD%90%E6%B5%81%E7%A8%8B%E4%B8%8EAPI%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r3.pptx) | 20 |
| 历史版 | [HCOMM_算子流程与API测试总表_r4.pptx](history/HCOMM_%E7%AE%97%E5%AD%90%E6%B5%81%E7%A8%8B%E4%B8%8EAPI%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r4.pptx) | 20 |
| 历史版 | [HCOMM_流程与Engine_API测试总表_r1.pptx](history/HCOMM_%E6%B5%81%E7%A8%8B%E4%B8%8EEngine_API%E6%B5%8B%E8%AF%95%E6%80%BB%E8%A1%A8_r1.pptx) | 23 |

## 公开归档范围

仅归档已交付 PPT，不收录用户上传的参考照片、原照裁切、截图、源码仓库或构建候选文件。13 份历史版的备注仅将本机源码根路径改为相对路径，未改变幻灯片内容、布局或其他文件成员；本地原件保留不动。备注中的 `hccl/`、`hcomm/` 等路径指向分析时的源码目录，并非本归档附带的文件。

本轮最终版未作内容修改。此归档是技术汇报案例，不构成相关项目的官方文档或模板。
