<template>
    <div :class="s.root">
        <div :class="s.linkWrap">
            <router-link to="/contacts" :class="s.link">Контакты</router-link>
        </div>
        <div :class="s.formWrap">
            <form :class="s.form">
                <div :class="s.greetingDescr">Добро пожаловать, хорошего рабочего дня</div>
                <h1 :class="s.title">
                    <span>Вход в систему</span>
                    «Блокнот24»
                </h1>
                <div :class="s.fields">
                    <UITextField
                        v-model:value="val"
                        :label="'erer'"
                        :mask="PHONE_MASK"
                    />
                </div>
                <div :class="s.formWarning">
                    Внимание! Логин и пароль передавать своим коллегам строго запрещено! 
                    Помните вы являетесь оператором по обработке персональных данных!
                </div>
                <UIButton width="248px" height="50px">Вход</UIButton>
            </form>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import { PHONE_MASK } from '@/constants/masks';

    export default defineComponent({
        name: 'Auth',
        setup() {
            const val = ref('dfffffffff');

            const inp = (event, ee) => {
                console.log({ event })
                val.value = event;
            }
            return {
                PHONE_MASK,
                val,
                inp,
            };
        },
    });
</script>

<style lang="scss" module="s">
    .root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .linkWrap {
        position: relative;
        z-index: 1;
        text-align: right;
    }

    .link {
        color: $app-color-grey--20;
    }

    .formWrap {
        flex: 1 0 auto;
        margin-top: -15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form {
        max-width: 400px;
        width: 100%;
        text-align: center;
    }

    span {
        display: block;
        font-size: 24px;
    }

    .greetingDescr {
        color: $app-color-grey-blue;
        font-style: italic;
        text-align: center;
        margin-bottom: 21px;
    }

    .title {
        text-align: center;
        margin-top: 0;
        margin-bottom: 37px;
        color: $app-color-dark-blue;

        span {
            display: block;
            font-size: 24px;
        }
    }

    .formWarning {
        color: $app-color-grey-blue;
        font-size: 14px;
        line-height: 23px;
        margin-bottom: 50px;
        text-align: left;
    }
</style>
