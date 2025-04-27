import nextConfig from "../../next.config";

export const getImageUrl = (path: string) => {
    const baseUrl = nextConfig.basePath
    return `${baseUrl}${path}`;
}