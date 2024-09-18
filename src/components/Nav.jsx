import React, { useEffect } from "react";
import logo from "../assets/images/logo.svg";

const Nav = () => {
    useEffect(() => {
        const navWrapper = document.querySelector(".nav-wrapper");
        let lastScrollY = window.scrollY;
        let threshold = 1.2 * window.innerHeight; // 120vh 对应的像素值

        const handleScroll = () => {
            // 根据滚动位置添加或移除类
            if (window.scrollY > threshold) {
                navWrapper.classList.add("scrolled");
            } else {
                navWrapper.classList.remove("scrolled");
            }

            // 滚动时隐藏/显示导航栏
            if (window.scrollY > 300) {
                if (window.scrollY > lastScrollY) {
                    navWrapper.classList.add("hidden"); // 向下滚动时隐藏
                } else {
                    navWrapper.classList.remove("hidden"); // 向上滚动时显示
                }
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        // 当窗口大小变化时，更新 threshold 值
        const handleResize = () => {
            threshold = 1.2 * window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []); // 空依赖数组，确保只在组件挂载和卸载时运行

    return (
        <div className="nav-wrapper">
            <div className="logo-wrapper">
                <a className="logo-a" href="./index.html">
                    <img src={logo} alt="logo" className="logo" />
                </a>
            </div>
            <nav>
                <a href="#introduce" className="nav-link">
                    關於我們
                </a>
                <a href="#filter-title" className="nav-link">
                    茶葉探索
                </a>
                <a href="#form" className="nav-link">
                    聯絡我們
                </a>
            </nav>
        </div>
    );
};

export default Nav;
