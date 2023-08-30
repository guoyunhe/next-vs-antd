# 对比 Fusion Design 和 Ant Design

## 构建产物尺寸

### 最小应用

首先对比一个最小的应用，只含有 Input 和 Button 这两个最常用的组件。

| Library       | JS size (gzip) | CSS size (gzip) | Total size (gzip) |
| ------------- | -------------- | --------------- | ----------------- |
| Ant Design    | 108.88 kB      | 0               | 108.88 kB         |
| Fusion Design | 90.61 kB       | 56.8kB          | 147.41 kB (+35%)  |

由于 Fusion Design 的样式是 CSS 而无法做 Tree Shaking，因此在组件使用不多的小型应用上劣势非常明显。
