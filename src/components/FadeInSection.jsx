import { useEffect, useRef, useState } from "react";

function FadeInSection({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // 停止觀察已經可見的元素
                    }
                });
            },
            {
                threshold: 0.1, // 當 10% 的元素進入視窗可視區域時觸發
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
            {children}
        </div>
    );
}

export default FadeInSection;
