/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			generalsans: [
  				'General Sans',
  				'sans-serif'
  			]
  		},
  		colors: {
  			black: {
  				'100': '#010103',
  				'200': '#0E0E10',
  				'300': '#1C1C21',
  				'500': '#3A3A49',
  				'600': '#1A1A1A',
  				DEFAULT: '#000'
  			},
  			white: {
  				'500': '#62646C',
  				'600': '#AFB0B6',
  				'700': '#D6D9E9',
  				'800': '#E4E4E6',
  				DEFAULT: '#FFFFFF'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			terminal: "url('/assets/terminal.png')"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'loading-bounce': 'loading-bounce 0.5s ease-in-out infinite alternate',
  			'loading-step': 'loading-step 1s ease-in-out infinite',
  			aurora: 'aurora 8s ease-in-out infinite alternate'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			aurora: {
  				'0%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				},
  				'25%': {
  					backgroundPosition: '50% 100%',
  					transform: 'rotate(5deg) scale(1.1)'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%',
  					transform: 'rotate(-3deg) scale(0.95)'
  				},
  				'75%': {
  					backgroundPosition: '50% 0%',
  					transform: 'rotate(3deg) scale(1.05)'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%',
  					transform: 'rotate(-5deg) scale(0.9)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
