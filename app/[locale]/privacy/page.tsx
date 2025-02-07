import Link from "next/link"
export const runtime = 'edge'
export const metadata = {
    title: "Privacy Policy for JFIF TO JPG",
    description: "Privacy Policy for JFIF TO JPG",
}
const Privacy = () => {
    return (
        <div className="mt-24">
            <main className="max-w-xl mx-auto">
                <div className="p-5">
                    <Link href="/" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back
                    </Link>
                    <h1 className="text-3xl font-extrabold pb-6">
                        Privacy Policy for JFIF TO JPG
                    </h1>

                    <pre
                        className="leading-relaxed whitespace-pre-wrap"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        {
                            `Privacy Policy

Last Updated: February 7, 2025

1. Introduction

("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our JFIF to JPG image conversion service.

2. Information We Collect

2.1 Information You Provide
We collect minimal information that you directly provide:
- Image files you upload for conversion
- Any feedback or support requests you send us

2.2 Automatically Collected Information
We automatically collect certain information when you visit our service:
- Basic usage patterns
- Technical data necessary for service operation

2.3 Cookies and Similar Technologies
We use essential cookies to:
- Maintain basic service functionality
- Ensure service security
- Improve service performance

3. How We Use Your Information

We use collected information to:
- Provide the JFIF to JPG conversion service
- Maintain and improve our service
- Ensure technical functionality
- Prevent abuse and maintain security
- Analyze service usage patterns
- Respond to your requests and inquiries

4. Data Retention

4.1 Image Data
- Uploaded JFIF files and converted JPG images are immediately deleted after download
- No images are stored on our servers after conversion
- All processing is temporary and occurs in memory

4.2 User Communications
Support-related communications are retained for up to one year.

5. Information Sharing

We do not sell, trade, or rent your information to third parties. We may share information:
- To comply with legal obligations
- To protect our rights and safety
- To prevent abuse or illegal activities
- With service providers who assist in our operations

6. Security Measures

We implement robust security measures to protect your information:
- Encrypted data transmission (HTTPS)
- Secure image processing
- Temporary memory-only processing
- Regular security assessments
- Limited access to personal information

7. Your Rights

You have the right to:
- Access your personal information
- Request deletion of your data
- Opt-out of non-essential data collection
- Request information about our data practices
- Lodge complaints with relevant authorities

8. Children's Privacy

Our service is not intended for users under 13 years of age. We do not knowingly collect information from children under 13.

9. International Data Transfers

If we transfer your data across borders, we ensure appropriate safeguards are in place to protect your information.

10. Changes to Privacy Policy

We may update this Privacy Policy periodically. We will notify users of significant changes by:
- Posting updates on our website
- Updating the "Last Updated" date
- Providing notice through our service

11. No-Storage Policy

11.1 Image Processing
- We do not store uploaded JFIF files
- We do not store converted JPG images
- All processing is temporary and immediately deleted after download

11.2 User Activity
We maintain minimal logs necessary for:
- Service operation
- Abuse prevention
- Technical troubleshooting

12. Third-Party Services

12.1 Analytics
We may use basic analytics tools to improve our service, with minimal data collection.

12.2 Service Providers
We may use third-party providers for:
- Infrastructure and hosting
- Security services
- Analytics

13. Do Not Track

We respect Do Not Track signals and do not track or collect personal information when these signals are present.

14. Data Protection Rights

For users in certain jurisdictions (e.g., EU/EEA), additional rights may apply under applicable laws.`
}
                    </pre>
                </div>
            </main>
        </div>
    )
}

export default Privacy
