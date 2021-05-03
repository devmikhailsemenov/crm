const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/styles/main.scss";
                `,
            },
        },
    },
	chainWebpack: config => {
		config.module
            .rule('svg')
            .exclude.add(path.join(__dirname, 'src/assets/images/svg'))
            .end();
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(path.join(__dirname, 'src/assets/images/svg'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end();
	},
};
