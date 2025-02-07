interface PageHeaderProps {
    className?: string
    children?: React.ReactNode
    title: string
    description?: string
}

export default function PageHeader({
    className,
    children,
    title,
    description,
}: PageHeaderProps) {
    return (
        <div className={`max-w-3xl mx-auto ${className || ""}`}>
            <div className="text-center">
                <span className="relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-500 dark:to-indigo-50">
                    {children}
                </span>
                <div>
                    <h1 className="font-inter-tight text-2xl md:text-4xl font-bold  pb-4 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
