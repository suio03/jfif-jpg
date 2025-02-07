import PageHeader from "@/components/page-header"
import DownloadForm from "@/components/download-form"
import TikTokFAQ from "@/components/tiktok-video/TikTokFAQ"
import TikTokCTA from "@/components/tiktok-video/TikTokCTA"
import TikTokFeatures from "@/components/tiktok-video/TikTokFeatures"
import TikTokHowTo from "@/components/tiktok-video/TikTokHowTo"
import { useTranslations } from "next-intl"
import FileUploader from "@/components/file-uploader"
export const runtime = 'edge';
export default function Home() {
    const t = useTranslations("")
    return (
        <section>
            <div className="pt-32 pb-12 md:pt-44 md:pb-20">
                <div className="px-4 sm:px-6">
                    <PageHeader
                        className="mb-12"
                        title={t('h1')}
                        description={t('description')}
                    />
                    <FileUploader />
                    <TikTokFeatures />
                    <TikTokHowTo />
                    <TikTokFAQ />
                    <TikTokCTA />
                </div>
            </div>
        </section>
    )
}
