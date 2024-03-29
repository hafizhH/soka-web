/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BERANDA_ENTRY_ID: '3Lrf3mavasWp3iscVMbKqZ',
    PROFIL_ENTRY_ID: '6ejRTrJLUiD5tlG0ZZxRs4',
    ORMAS_ENTRY_ID: '4OB9QX0Znbejns6qaumwH6',
    KONTAK_ENTRY_ID: 'wToAPUz8COpES8GkKtBpa',
    POTENSI_ENTRY_ID: '2CNNXHM4eTR9btuYDvdeic',
    REVALIDATE_SECS: 60
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig