import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';
import logoImage from '../assets/logo-an.png';

const LogoProcessor = () => {
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the logo image
        const response = await fetch(logoImage);
        const blob = await response.blob();
        
        // Load image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedLogo(processedUrl);
        
      } catch (error) {
        console.error('Failed to process logo:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  // This component doesn't render anything visible, it just processes the logo
  return null;
};

export default LogoProcessor;