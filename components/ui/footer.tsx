import React from 'react'
import { useTranslations } from 'next-intl'
const Footer = () => {
    const t = useTranslations('footer')
    const resources = [
        { name: t('tos'), href: "/tos" },
        { name: t('privacy'), href: "/privacy" }
    ]
    const tools = [
        { name: "TikTok Video Downloader", href: "/" },
        { name: "Download TikTok MP3", href: "/download-tiktok-mp3" },
        { name: "Reddit Video Downloader", href: "/reddit-video-downloader" },
        // { name: "Instagram Downloader", href: "/tools/instagram-downloader" },
        // { name: "YouTube Downloader", href: "/tools/youtube-downloader" },
        // { name: "Facebook Video Downloader", href: "/tools/facebook-downloader" }
    ]
    return (
        <footer className="backdrop-blur-sm border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            <p className="text-xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-500 bg-clip-text text-transparent hover:from-indigo-500 hover:to-purple-300 transition-all duration-300 cursor-pointer filter drop-shadow-sm">
                                <span className="text-indigo-600">JFIF</span>
                                <span className="text-purple-500">TO</span>
                                <span className="text-indigo-600">JPG</span>
                            </p>
                        </h3>
                        <p className="text-gray-600 text-sm dark:text-gray-400">
                            {t('about')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 dark:text-gray-200">
                            {t('resources')}
                        </h3>
                        <ul className="space-y-2">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <a
                                        href={resource.href}
                                        className="text-sm text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-400"
                                    >
                                        {resource.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} JFIF TO JPG. {t('copyright-suffix')}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer