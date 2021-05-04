<template>
    <div :class="s.root">
        <div :class="s.container">
            <div :class="s.info">
                <div :class="s.presentationCompany">
                    <img 
                        :src="require('@/assets/images/logo-white.svg')" 
                        alt="Логотип" 
                        :class="s.logo"
                    >
                    <div :class="s.presentationDescription">
                        Эффективное программное решение для жилищно-коммунальной сферы
                    </div>
                </div>
            </div>
            <div :class="s.footer">
                {{ year }} © БЛОКНОТ24
            </div>
            <UICard no-shadow :class="s.main">
                <router-view />
            </UICard>
        </div>
    </div>
</template>

<script>
    import { useCurrentTime } from '@/hooks/useCurrentTime';

    export default {
        name: 'Login',
        setup() {
            const { year } = useCurrentTime();

            return { year };
        },
    };
</script>

<style lang="scss" module="s">
    .root {
        padding: 10px 0;
        background: linear-gradient(43deg, #1076be 0%, #26b3f0 100%);
        background-size: cover;
        height: 100vh;
        min-height: 800px;

        @media (min-width: $media-desktop-xs) {
            padding: 20px 0;
            background: 
                url('~@/assets/images/login-bg.png') 115% 70px no-repeat,
                url('~@/assets/images/login-bg-bottom.png') 60% 70vh no-repeat, 
                linear-gradient(43deg, #1076be 0%, #26b3f0 100%);
            background-size: cover, cover, cover;
        }
    }

    .container {
        display: grid;
        grid-template-areas: 
			'info'
			'main'
			'footer';
        grid-column-gap: 10px;
		grid-row-gap: 10px;
		grid-template-columns: 100%;
		grid-template-rows: auto minmax(auto, 1fr) auto;
		
        @media (min-width: $media-desktop-xs) {
            grid-template-areas:
                'info main'
                'footer main';
            grid-template-columns: repeat(2, calc(50% - 10px));
            grid-template-rows: 1fr auto;
            grid-column-gap: 20px;
            grid-row-gap: 0;
            height: 100%;
        }
    }

    .info {
        grid-area: info;

        @media (min-width: $media-desktop-xs) {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .footer {
        grid-area: footer;
        text-align: center;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        color: $app-color-white;
    }

    .main {
        grid-area: main;
        padding: 24px;
    }

    .presentationCompany {
		display: flex;
		align-items: center;
		font-size: 13px;
		line-height: 16px;
        color: $app-color-white;

        @media (min-width: $media-desktop-xs) {
            display: block;
            max-width: 320px;
            text-align: center;
            font-size: 15px;
            line-height: 21px;
        }
	}

    .logo {
		margin-right: 20px;
		max-width: 180px;
        display: block;
        
        @media (min-width: $media-desktop-xs) {
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 20px;
            max-width: 230px;
        }
	}

    .presentationDescription {
        display: none;

        @media (min-width: $media-mobile-sm) {
            display: block;
        }
    }
</style>