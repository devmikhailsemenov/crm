<template>
    <div
        :class="[
            s.root,
            {
                [s.error]: error,
                [s.active]: focusedInput.active,
                [s.default]: focusedInput.active && !focusedInput.focus,
            },
        ]"
    >
        <div :class="s.fieldWrap">
            <label v-if="label" :class="s.label">{{ label }}</label>
            <input
                v-mask="mask"
                v-bind="$attrs"
                :value="value"
                :class="s.field"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur"
            />
        </div>
        <div v-if="error" :class="s.errorMessage">{{ error }}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, reactive, watch, computed } from 'vue';

    interface FocusedInput {
        active: boolean;
        focus: boolean;
    }

    export default defineComponent({
        name: 'UITextField',
        props: {
            value: {
                type: String as PropType<string>,
                required: true,
            },
            label: {
                type: String as PropType<string>,
                required: true,
            },
            error: {
                type: String as PropType<string>,
                default: '',
            },
            mask: {
                type: String as PropType<string>,
                default: '',
            },
            typeAnimateLabel: {
                type: String as PropType<string>,
                default: 'transform',
            },
        },
        emits: ['update:value', 'focus', 'blur'],
        setup(props, { emit }) {
            const focusedInput = reactive<FocusedInput>({
                active: false,
                focus: false,
            });

            const onInput = (event: InputEvent): void => {
                const elem = event.target as HTMLInputElement;

                emit('update:value', elem.value);
            };
            const onFocus = (event: FocusEvent): void => {
                focusedInput.active = focusedInput.focus = true;

                emit('focus', event);
            };
            const onBlur = (event: FocusEvent): void => {
                if (props.value) {
                    focusedInput.active = true;
                    focusedInput.focus = false;
                } else {
                    focusedInput.active = focusedInput.focus = false;
                }

                emit('blur', event);
            };

            watch(
                () => props.value,
                value => {
                    if (!value) return;

                    if (!focusedInput.active) {
                        focusedInput.active = true;
                    }
                },
                { immediate: true }
            );

            return {
                focusedInput,
                onInput,
                onFocus,
                onBlur,
            };
        },
    });
</script>

<style lang="scss" module="s">
    .root {
        text-align: left;
    }

    .active {
        .fieldWrap {
            border: 1px solid $app-color-grey--30;
            background-color: $app-color-white;
        }

        .label {
            transform: translateY(-50%) translateY(-15px) scale(0.8);
        }
    }

    .default {
        .fieldWrap {
            background-color: $app-color-grey--40;
            border: 1px solid transparent;
        }
    }

    .fieldWrap {
        position: relative;
        width: 100%;
        height: 60px;
        border-radius: 4px;
        background-color: $app-color-grey--40;
        border: 1px solid transparent;
    }

    .error {
        .fieldWrap {
            border: 1px solid $app-color-red;
        }
    }

    .label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        font-size: 15px;
        font-weight: 300;
        color: $app-color-grey--30;
        transition: transform 0.1s ease-in;
        width: 100%;
        transform-origin: left;
    }

    .field {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        padding: 37px 10px 20px;
        font-size: 16px;
        outline: none;
    }

    .errorMessage {
        color: $app-color-red;
        font-size: 10px;
        line-height: 15px;
        margin-top: 2px;
        text-align: left;
    }
</style>
