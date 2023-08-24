/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['google.com', 'cloudinary.com', 'res.cloudinary.com']
	},

	experimental: {
		serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
	},
	eslint: {
		ignoreDuringBuilds: true
	}
}

module.exports = {
	env: {
	},
};


module.exports = nextConfig
