<template>
    <el-container class="head-container">
        <el-header>
            <el-row class="header">
                <el-col :span="6" class="logo-box">
                    <img src="../../asset/img/logo.png" alt="logo">
                </el-col>
                <el-col :span="18" class="nav"></el-col>
            </el-row>
        </el-header>
    </el-container>
</template>

<script>
export default {
    
}
</script>


<style lang="less" scoped>
    .head-container {
        height: 90px;
        width: 1180px;
        margin: 0 auto;

        .header {

            .logo-box {
                height: 90px;

                img {
                    height: 100%;
                }
            }
        }
    }
</style>

