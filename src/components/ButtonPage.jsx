import button_page_img from "../assets/images/button-page-img1.svg";
import button_page_img2 from "../assets/images/button-page-img2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAddressBook } from "@fortawesome/free-solid-svg-icons";

function ButtonPage() {
    return (
        <section className="button-page">
            <div className="button-page-item1">
                <div className="button-page-img">
                    <img src={button_page_img} alt="button-page-img" />
                </div>
                <div className="button-page-content">
                    <h3>
                        我們不僅提供茶飲——
                        <br />
                        我們創造真正的感官體驗。
                    </h3>
                    <p className="button-page-content-big">精選系列的匯聚</p>
                    <p className="button-page-content-small">
                        我們的選品將西方與東亞的茶藝傳統巧妙融合。
                        <br />
                        我們致力於使用當地來源的可持續原料，
                        <br />
                        並融入活力四射的香料，打造每一杯茶的獨特體驗。
                    </p>
                    <a className="a-button" href="#filter-title">
                        <span>茶葉探索</span>
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </div>
            <div className="button-page-item2">
                <div className="button-page-content">
                    <h3>
                        我們邀請您探索一個
                        <br />
                        令人激動的風味世界。
                    </h3>
                    <p className="button-page-content-big">發現與探索</p>
                    <p className="button-page-content-small">
                        我們誠邀您來體驗一場豐富的茶飲探索之旅，
                        <br />
                        每一杯都映照著文化深度和創新精神。啟程於傳統的根基，
                        <br />
                        終至創新的巔峰，讓每一次啜飲都成為您感官的盛宴。
                    </p>
                    <a className="a-button" href="#form">
                        <span>聯繫我們</span>
                        <FontAwesomeIcon icon={faAddressBook} />
                    </a>
                </div>
                <div className="button-page-img">
                    <img src={button_page_img2} alt="button-page-img2" />
                </div>
            </div>
        </section>
    );
}

export default ButtonPage;
