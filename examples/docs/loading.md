## Loading 组件

加载数据时显示动效

:::demo loading的基础用法

```html
<template>
    <me-loading :loading-text="text"></me-loading>
</template>

<script>
export default {
    data() {
        return { 
            text: 'Loading...'
        }
    }
}
</script>
```
:::