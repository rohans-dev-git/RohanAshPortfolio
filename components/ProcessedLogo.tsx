import React, { useState, useEffect } from 'react';

interface ProcessedLogoProps {
    src: string;
    alt: string;
    className?: string;
}

const ProcessedLogo: React.FC<ProcessedLogoProps> = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState<string>(src);
    const [processed, setProcessed] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const processImage = async () => {
            try {
                // SVGs are usually already transparent
                if (src.endsWith('.svg')) {
                    setProcessed(true);
                    return;
                }

                // Dynamic import to avoid crashing if package is still installing
                let removeBackground;
                try {
                    const module = await import('@imgly/background-removal');
                    removeBackground = module.default;
                } catch (e) {
                    console.warn("Background removal module not found, using original image.");
                    if (isMounted) setProcessed(true);
                    return;
                }

                const blob = await removeBackground(src);
                const url = URL.createObjectURL(blob);
                if (isMounted) {
                    setImageSrc(url);
                    setProcessed(true);
                }
            } catch (error) {
                console.error("Background removal failed for", src, error);
                if (isMounted) setProcessed(true);
            }
        };

        processImage();

        return () => {
            isMounted = false;
        };
    }, [src]);

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            style={{
                opacity: processed || src.endsWith('.svg') ? 1 : 0.4,
                transition: 'opacity 0.8s ease-in-out',
                filter: !processed && !src.endsWith('.svg') ? 'blur(4px)' : 'none'
            }}
        />
    );
};

export default ProcessedLogo;
