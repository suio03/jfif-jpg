import Link from "next/link"
export const runtime = 'edge'
export const metadata = {
    title: "Terms and Conditions for JFIF TO JPG",
    description: "Terms and Conditions for JFIF TO JPG",
}
const TOS = () => {
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
                        Terms and Conditions for JFIF TO JPG
                    </h1>

                    <pre
                        className="leading-relaxed whitespace-pre-wrap"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        {
                            `Terms of Service

Last Updated: February 7, 2025

1. Acceptance of Terms

By accessing or using JFIF to JPG converter ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.

2. Service Description

JFIF TO JPG converter provides a web-based service that allows users to convert JFIF image files to JPG format for personal, non-commercial use. The Service is provided "as is" and "as available" without any warranties.

3. User Responsibilities

# 3.1 Acceptable Use
You agree to:
- Use the Service only for lawful purposes
- Convert images only when you have the right to do so
- Respect copyright and intellectual property rights
- Not use the Service for any commercial purposes without explicit permission
- Not exceed the 50MB total upload limit

# 3.2 Prohibited Activities
You must not:
- Upload or convert images that infringe on intellectual property rights
- Attempt to bypass or manipulate our systems
- Use automated methods to access the Service
- Upload or convert inappropriate or illegal content
- Attempt to reverse engineer the Service
- Upload malicious files or content

4. Intellectual Property

# 4.1 Content Rights
- Users retain all rights to their uploaded images
- Users are responsible for ensuring they have the right to convert and use the images
- The Service does not claim ownership of any converted images
- All converted images are immediately deleted after download

# 4.2 Service Rights
JFIF TO JPG converter and its associated trademarks, website, and technologies are protected by applicable intellectual property laws.

5. Disclaimer of Warranties

THE SERVICE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES. WE DO NOT GUARANTEE THAT:
- The Service will always be available or error-free
- Converted images will maintain exact quality or characteristics
- The Service will be compatible with all devices or systems
- All JFIF files will convert successfully

6. Limitation of Liability

JFIF TO JPG converter shall not be liable for any:
- Direct, indirect, or consequential damages
- Loss of data or images
- Issues arising from the use or inability to use the Service
- Quality degradation of converted images
- Third-party claims

7. Privacy and Data Collection

We collect minimal user data necessary for Service operation. All uploaded and converted images are immediately deleted after processing. See our Privacy Policy for details about data collection and usage practices.

8. Service Modifications

We reserve the right to:
- Modify or discontinue the Service at any time
- Change these terms with reasonable notice
- Restrict access to the Service for any reason
- Modify conversion parameters or file size limits

9. Service Operations

# 9.1 File Processing
- Maximum total upload size is 50MB
- Batch processing is available for multiple files
- Files are processed in the order received
- Converted files must be downloaded promptly

# 9.2 External Services
We are not responsible for third-party websites or services linked to from our Service.

10. Termination

We may terminate or suspend access to the Service:
- For violations of these terms
- At our sole discretion
- Without prior notice or liability
- For abuse of the Service

11. Governing Law

These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.

12. Changes to Terms

We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of modified terms.

13. Technical Limitations

The Service is subject to:
- File size limitations (50MB total upload)
- Server availability and performance
- Bandwidth restrictions
- Processing queue limitations

14. User Support

We provide:
- Basic technical support for the Service
- Documentation for common issues
- Response to reasonable inquiries
- Updates about service status`
}
                    </pre>
                </div>
            </main>
        </div>
    )
}

export default TOS
