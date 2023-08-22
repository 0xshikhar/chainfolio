/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['google.com']
	},

	experimental: {
		serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
	}
}

module.exports = {
	env: {
	},
};


module.exports = nextConfig
