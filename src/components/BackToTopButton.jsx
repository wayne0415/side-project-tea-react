import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const backToTopButtonRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button ref={backToTopButtonRef} className={`back-to-top ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
}

export default BackToTopButton;
