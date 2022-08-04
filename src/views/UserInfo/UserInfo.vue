<template>
    <div class="header_top">
        <div class="no_login" v-if="!isshow">
            <img src="@/assets/images/mobile.png" alt="">
            <span>登录 / 注册 </span>
        </div>
        <div class="is_login" v-else-if="isshow">
            <div class="islogin_top">
                <div class="user_left">
                    <img src="@/assets/images/Header.png" alt="">
                    <span>黑马头条号</span>
                </div>
                <div class="user_right">
                    <button type="default" size="mini" class="edit_btn">编辑资料</button>
                </div>
            </div>
            <div class="islogin_bottom">
                <div class="user_status">
                    <div class="status_num">8</div>
                    <div class="status_name">头条</div>
                </div>
                <div class="user_status">
                    <div class="status_num">66</div>
                    <div class="status_name">关注</div>
                </div>
                <div class="user_status">
                    <div class="status_num">88</div>
                    <div class="status_name">粉丝</div>
                </div>
                <div class="user_status">
                    <div class="status_num">88</div>
                    <div class="status_name">获赞</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isshow = ref('false')
</script>

<style lang="less" scoped>
.header_top {
    width: 100%;
    height: 400px;
    background-image: url('@/assets/images/banner.png');
    background-size: cover;

    .no_login {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 132px;
            height: 132px;
            margin-bottom: 15px;
        }

        span {
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            color: #ffffff;
        }
    }

    .is_login {
        width: 100%;
        height: 100%;
        // background-color: pink;

        .islogin_top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 116px 32px 18px;
            height: 266px;
            // background-color: skyblue;

            .user_left {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 132px;
                    height: 132px;
                    border-radius: 50%;
                }

                span {
                    margin-left: 22px;
                    font-size: 30px;
                    letter-spacing: 1px;
                    color: #ffffff;
                }

            }

            :deep(.user_right) {
                .edit_btn {
                    width: 136px;
                    height: 43px;
                    padding: 7px 18px;
                    font-size: 20px;
                    color: #666;
                    border-radius: 26px;
                    white-space: nowrap;
                }
            }
        }

        .islogin_bottom {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 135px;
            // background-color: yellowgreen;

            .user_status {
                width: 47px;
                height: 68px;

                .status_num {

                    text-align: center;
                    font-size: 36px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #ffffff;
                }

                .status_name {
                    font-size: 23px;
                    font-weight: normal;
                    font-stretch: normal;
                    color: #ffffff;
                }
            }
        }
    }
}
</style>
