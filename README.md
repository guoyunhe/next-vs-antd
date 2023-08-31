# 对比 Fusion Design 和 Ant Design

## 构建产物尺寸

### 最小应用

首先对比一个最小的应用，只含有 Input 和 Button 这两个最常用的组件。

| Library                  | JS size (gzip) | CSS size (gzip) | Total size (gzip) |
| ------------------------ | -------------- | --------------- | ----------------- |
| Ant Design               | 108.88 kB      | 0               | 108.88 kB         |
| Fusion Design            | 90.61 kB       | 56.8 kB         | 147.41 kB (+35%)  |
| Fusion Design (CSS Vars) | 90.61 kB       | 84.05 kB        | 264.44 kB (+60%)  |

由于 Fusion Design 的样式是 CSS 而无法做 Tree Shaking，因此在组件使用不多的小型应用上劣势非常明显。

### 中等应用

最接近实际项目，包含了以下常用组件：

- Alert/Message
- Balloon
- Button
- Card
- Dialog/Modal
- Grid (Row/Col)
- Input
- DatePicker (对 Fusion 使用 dayjs 实现的 DatePicker2)
- Pagination
- Select
- Steps
- Tab
- Table
- Timeline

| Library                  | JS size (gzip) | CSS size (gzip) | Total size (gzip) |
| ------------------------ | -------------- | --------------- | ----------------- |
| Ant Design               | 304.12 kB      | 0               | 304.12 kB (+15%)  |
| Fusion Design            | 207.64 kB      | 56.8 kB         | 264.44 kB         |
| Fusion Design (CSS Vars) | 207.64 kB      | 84.05 kB        | 264.44 kB (+10%)  |

可以看到，随着使用的组件数量增多，Ant Design 的体积增长要高于 Fusion Design。原因有以下几点：

- Ant Design 采用 CSS-in-JS 的样式解决方案，相对于 Fusion Design 的原生 CSS 会带来额外的运行时 (emotion) 体积开销，混在 JS 中的样式代码也无法用 CSS 压缩工具进行压缩
- Fusion Design 的默认 CSS 是不支持 CSS 变量的，也就说无法实现动态切换主题（亮色/暗色，字体大小），但是不是所有应用都需要这些特性
