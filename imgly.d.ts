declare module '@imgly/background-removal' {
    export default function removeBackground(image: string | Blob | File | HTMLImageElement, config?: any): Promise<Blob>;
}
