/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			use: ['raw-loader', 'glslify-loader'],
		});

		return config;
	},
};

export default nextConfig;
