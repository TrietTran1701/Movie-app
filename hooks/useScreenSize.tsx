import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState<any | null>(null);

  const [isMobile, setMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (mounted && windowSize.width < 768) {
      setMobile(true);
    } else if (mounted && windowSize.width >= 768) {
      setMobile(false);
    }
  }, [windowSize]);

  return [isMobile];
};

export default useScreenSize;
