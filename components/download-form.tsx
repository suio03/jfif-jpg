'use client'
import { downloadFile } from '@/lib/downloader'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTranslations } from 'next-intl'

interface DownloadFormProps {
    mode: 'audio' | 'mute' | 'auto' // add whatever modes you support
}

export default function DownloadForm({ mode }: DownloadFormProps) {
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState("")
    const t = useTranslations('tiktok.input')
    const download = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault() // Add this line to prevent form submission
        if (!url) {
            toast.error("Please enter a valid URL")
            setUrl("")
            return
        }
        if (!checkURL(url)) {
            toast.error("That's not a valid TikTok URL")
            setUrl("")
            return
        }
        setLoading(true)
        try {
            const { data } = await fetch("/api/url-parser", {
                method: "POST",
                body: JSON.stringify({
                    url,
                    downloadMode: mode
                })
            }).then(res => res.json())
            await downloadFile(data)
            toast.success("Downloaded successfully")
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    const checkURL = (url: string) => {
        try {
            const parsedUrl = new URL(url)
            return parsedUrl.hostname.endsWith('tiktok.com')
        } catch (error) {
            return false
        }
    }
    return (
        <>
            <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-11">

                <div className="w-full max-w-3xl mx-auto shrink-0 border border-indigo-400 rounded-lg p-6 shadow-xl ">
                    <form className="relative">

                        <div
                            className="absolute -inset-3 bg-indigo-500/15 dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
                            aria-hidden="true"
                        />
                        <div id="url-input" className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 items-center py-6">
                            <div className="w-full sm:flex-[0.7]">
                                <label className="sr-only" htmlFor="url">
                                    URL
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 text-[#6B4BF7] dark:text-[#9D86FF] pl-3 flex items-center pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        id="url"
                                        className="form-input text-base w-full pl-10 pr-4 py-3 bg-white dark:bg-white text-gray-900 border border-gray-200 dark:border-gray-300 rounded-lg focus:border-[#6B4BF7] dark:focus:border-[#9D86FF] focus:ring-2 focus:ring-[#6B4BF7]/20 dark:focus:ring-[#9D86FF]/20 dark:focus:bg-white hover:bg-white dark:hover:bg-white dark:placeholder-gray-500 dark:text-gray-900 transition-all duration-200"
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder={t('placeholder')}
                                        required
                                    />
                                </div>
                            </div>

                            {
                                loading ? (
                                    <div className="w-full sm:flex-[0.3] flex justify-center">
                                        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                ) : (
                                    <div className="w-full sm:flex-[0.3]">
                                        <button
                                            onClick={(e) => download(e)}
                                            className="w-full px-6 py-3 text-white bg-[#6B4BF7] hover:bg-[#5a3fd6] dark:text-gray-900 dark:bg-[#9D86FF] dark:hover:bg-[#8B71FF] rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                                        >
                                            {t('button')}
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
