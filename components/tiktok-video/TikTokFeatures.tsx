import React from 'react'
import { Download, Zap, Shield, Monitor, Video, Music } from 'lucide-react'
import { useTranslations } from 'next-intl'

const TikTokFeatures = () => {
    const t = useTranslations('features')
    const features = [
        {
            icon: <Download className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature1.title'),
            description: t('features.feature1.description')
        },
        {
            icon: <Zap className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature2.title'),
            description: t('features.feature2.description')
        },
        {
            icon: <Shield className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature3.title'),
            description: t('features.feature3.description')
        },
        {
            icon: <Monitor className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature4.title'),
            description: t('features.feature4.description')
        },
        {
            icon: <Video className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature5.title'),
            description: t('features.feature5.description')
        },
        {
            icon: <Music className="w-6 h-6 text-indigo-600" />,
            title: t('features.feature6.title'),
            description: t('features.feature6.description')
        }
    ]

    return (
        <section className="py-12 pt-24 sm:pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-gray-200">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-indigo-50"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TikTokFeatures
