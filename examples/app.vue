<template>
    <div class="Shake-demo">
        <!-- <Shake>
            用户名：<input type="text" />
        </Shake>
        <br>
        <Shake v-model="trigger">
            密&nbsp;&nbsp;&nbsp;码：<input type="text" />
        </Shake>
        <br> -->
        <Button style="width: 50px;height: 30px;" type="primary" @click="trigger = true" size="small"></Button>

        <!-- <k-upload>111</k-upload> -->
    </div>
</template>
<script lang="ts" setup>
import { Button } from "function-ui";
import { ref } from "vue";

console.log("Button", Button);

const trigger = ref(true);
</script>
<style lang="less">
.Shake-demo {
    width: 360px;
    //   padding: 350px;
}
</style>
