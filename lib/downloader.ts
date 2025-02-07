interface DownloadResponse {
    status: string;
    url: string;
    filename: string;
}

export const downloadFile = async (
    response: DownloadResponse
): Promise<void> => {
    try {
        // Create a temporary anchor element
        console.log(response)
        const link = document.createElement("a");
        link.href = response.url;

        // Set the download attribute with the filename
        link.download = response.filename;

        // Append to body (required for Firefox)
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
    } catch (error) {
        console.error("Download failed:", error);
        throw new Error("Failed to download file");
    }
};
