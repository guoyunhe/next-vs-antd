# 对比 Fusion Design 和 Ant Design

## 构建产物尺寸

### 最小应用

首先对比一个最小的应用，只含有 Input 和 Button 这两个最常用的组件。

| Library       | JS size (gzip) | CSS size (gzip) | Total size (gzip) |
| ------------- | -------------- | --------------- | ----------------- |
| Ant Design    | 108.88 kB      | 0               | 108.88 kB         |
| Fusion Design | 90.61 kB       | 56.8kB          | 147.41 kB (+35%)  |

由于 Fusion Design 的样式是 CSS 而无法做 Tree Shaking，因此在组件使用不多的小型应用上劣势非常明显。

### 中等应用

最接近实际项目，包含了以下常用组件：

- Button
- Card
- Grid (Row/Col)
- Input
- DatePicker (对 Fusion 使用 dayjs 实现的 DatePicker2)
- Pagination
- Tab
- Table

| Library       | JS size (gzip) | CSS size (gzip) | Total size (gzip) |
| ------------- | -------------- | --------------- | ----------------- |
| Ant Design    | 278.08 kB      | 0               | 278.08 kB (+12%)  |
| Fusion Design | 190.94 kB      | 56.8kB          | 247.74 kB         |
