import Accordion from "@/components/accordion"
import { useTranslations } from "next-intl"

export default function TikTokHowTo() {
    const t = useTranslations("howto")
    const faqs = Array.from({ length: 5 }, (_, index) => ({
        title: t(`steps.step${index + 1}.title`),
        text: t(`steps.step${index + 1}.text`),
        active: false
    }))

    return (
        <>
            <section>
                <div className="pt-24 pb-12 md:pb-20">
                    <h2 className="text-2xl font-bold text-center my-8">
                        {t('title')}
                    </h2>
                    <div className="px-4 sm:px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-1">
                                {faqs.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        title={faq.title}
                                        id={`faqs-${index}`}
                                        active={faq.active}
                                    >
                                        {faq.text}
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
