import { useState, useEffect } from "react";
import black_tea_img from "../assets/images/black-tea-img.jpg";
import black from "../assets/images/blackTea.png";
import oolong from "../assets/images/oolongTea.png";
import green from "../assets/images/greenTea.png";

function Filter() {
    // 定義狀態來追蹤當前選中的茶類別
    const [selectedCategory, setSelectedCategory] = useState("black");

    // 當按鈕被點擊時，更新選中的茶類別
    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

    // 篩選茶類別的函數
    const filterTeaItems = (category) => {
        const teaItems = [
            { category: "black", src: black, alt: "black" },
            { category: "oolong", src: oolong, alt: "oolong" },
            { category: "green", src: green, alt: "green" },
        ];
        return teaItems.filter((item) => item.category === category);
    };

    const teaItems = filterTeaItems(selectedCategory);

    return (
        <section className="filter">
            <p className="filter-title" id="filter-title">
                <span>
                    &emsp;&emsp;我們為您帶來獨特的品茶體驗，
                    <br />
                    將東方茶藝的深厚傳統與現代創新技法完美融合。
                    <br />
                    每一杯茶都糅合了自然的純淨和細膩的風味，
                    <br />
                    傳遞出文化的深度與創意的碰撞。品味傳統，
                    <br />
                    探索創新，感受茶飲的無限可能。
                </span>
            </p>
            <div className="filter-main">
                <div className="filter-img">
                    <img src={black_tea_img} alt="black_tea_img" />
                </div>
                <div className="filter-form">
                    <div className="filter-button">
                        <button className="filter-btn black-tea" onClick={() => handleFilterClick("black")}>
                            紅茶
                        </button>
                        <button className="filter-btn oolong-tea" onClick={() => handleFilterClick("oolong")}>
                            烏龍茶
                        </button>
                        <button className="filter-btn green-tea" onClick={() => handleFilterClick("green")}>
                            綠茶
                        </button>
                    </div>
                    <div id="tea-list">
                        {teaItems.map((item) => (
                            <div className="filter-content" key={item.category}>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filter;
