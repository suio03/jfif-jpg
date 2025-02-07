import Theme from "../theme-provider"
import { ReactNode } from "react"
import VerticalLines from "@/components/vertical-lines"
import BgShapes from "@/components/bg-shapes"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { cookies } from "next/headers"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { Inter, Inter_Tight } from "next/font/google"
import { getMessages, getTranslations } from "next-intl/server"
import { Toaster } from "react-hot-toast"
import "../css/style.css"
import Analytics from "@/components/Analytics"

type Props = {
    children: ReactNode
    params: { locale: string }
}
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
})

const inter_tight = Inter_Tight({
    weight: ["500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-inter-tight",
    display: "swap",
})

export async function generateMetadata({
    params: { locale }
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: '' })
    const cookieStore = cookies()
    let pathName = cookieStore.get('x-pathname')?.value || '/'
    const baseUrl = 'https://jfif2jpg.net'
    const locales = ['ar', 'ch', 'es', 'fr', 'pt', 'ru', 'ko', 'jp', 'de', 'it', 'hi', 'nl']
    const localePath = locale === 'en' ? '' : `/${locale}`
    // Ensure correct formatting
    if (pathName !== '/' && pathName.endsWith('/')) {
        pathName = pathName.slice(0, -1) // Remove trailing slash from non-root paths
    }
    const site_url = localePath === '' && pathName === '/' ? `${baseUrl}/` : `${baseUrl}${localePath}${pathName === '/' ? '' : pathName}`
    const languages = locales.reduce((acc, locale) => {
        acc[locale as keyof typeof acc] = `${baseUrl}/${locale}${pathName === '/' ? '' : pathName}`
        return acc
    }, {} as Record<string, string>)
    languages['x-default'] = `${baseUrl}${pathName}`
    return {
        title: t('meta-title'),
        description: t('meta-description'),
        alternates: {
            canonical: site_url,
            languages: languages
        }
    }
}
export default async function MainLayout({
    children,
    params: { locale }
}: Props) {
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            {/* <Analytics /> */}
            <body
                className={`${inter.variable} ${inter_tight.variable} font-inter antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
            >
                <Toaster
                    toastOptions={{
                        duration: 3000,
                    }}
                />
                <NextIntlClientProvider messages={messages}>
                    <Theme>
                        <VerticalLines />
                        <BgShapes />
                        <Header />
                        <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                            {children}
                        </div>
                        <Toaster
                                toastOptions={{
                                    duration: 3000,
                                }}
                            />
                        <Footer />
                    </Theme>
                </NextIntlClientProvider>

            </body>
        </html>
    )
}
