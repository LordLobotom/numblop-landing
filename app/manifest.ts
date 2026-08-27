import type { MetadataRoute } from 'next'
import numblopIcon from './numblop_icon.png'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Numblop – Multiplication through play',
    short_name: 'Numblop',
    description: 'An adaptive game for practising and mastering multiplication tables.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fdfef8',
    theme_color: '#b9ef45',
    icons: [
      { src: numblopIcon.src, sizes: '512x512', type: 'image/png' },
    ],
  }
}
