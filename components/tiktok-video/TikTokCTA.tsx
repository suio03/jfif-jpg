import React from 'react'
import { useTranslations } from 'next-intl'

const TikTokCTA = () => {
    const t = useTranslations('cta')
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-indigo-100/30 blur-3xl rounded-full opacity-30" aria-hidden="true" />

                    {/* Content */}
                    <div className="relative flex flex-col items-center text-center space-y-8">
                        {/* Main heading with gradient */}
                        <h2 className="text-2xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </h2>

                        {/* Subtitle */}
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl dark:text-gray-400">
                            {t('description')}
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {t('button')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-sm text-indigo-600 text-center mt-12">
                {t('quote')}
            </div>
        </section>
    )
}

export default TikTokCTA
