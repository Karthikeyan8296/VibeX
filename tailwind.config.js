/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#fc3c44',
				background: '#000',
				text: '#fff',
				'text-muted': '#9ca3af',
				icon: '#fff',
				'maximum-track-tint': 'rgba(255,255,255,0.4)',
				'minimum-track-tint': 'rgba(255,255,255,0.6)',
			},
			padding: {
				horizonatal: '24px',
			},
		},
	},
	plugins: [],
}
