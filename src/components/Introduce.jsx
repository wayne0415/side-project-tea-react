import woman1 from "../assets/images/introduce-img.svg";
import FadeInSection from "./FadeInSection";

function Introduce() {
    return (
        <section className="introduce">
            <p className="introduce-title" id="introduce">
                <FadeInSection>
                    &emsp;&emsp;融合古今智慧，我們創造出獨特的茶飲
                    <br />
                    藝術，將東方的傳統帶向全球。選用頂級原料，
                    <br />
                    結合現代技術精釀，為全世界的茶愛好者提供
                    <br />
                    卓越的品茶體驗。探索與我們一起，感受茶文化
                    <br />
                    的深度與創新的完美交融。
                </FadeInSection>
            </p>

            <div className="introduce-main">
                <div className="introduce-img">
                    <FadeInSection>
                        <img src={woman1} alt="woman1" />
                    </FadeInSection>
                </div>
                <div className="introduce-content">
                    <div className="introduce-item">
                        <FadeInSection>
                            <h3>跨越疆界，品味無限</h3>
                        </FadeInSection>
                        <FadeInSection>
                            <p>
                                我們相信，美味無需國界限制。
                                <br />
                                每一道菜都是我們廚師精心創作的故事，
                                <br />
                                一個將歐洲的純淨自然與亞洲的異域風情完美交織的故事。
                                <br />
                                每一口都是這場交融的篇章，帶領您探索無限的味覺邊界。
                            </p>
                        </FadeInSection>
                    </div>

                    <div className="introduce-item">
                        <FadeInSection>
                            <h3>每一口，都是藝術的結晶</h3>
                        </FadeInSection>
                        <FadeInSection>
                            <p>
                                期待一場令人難忘的美食旅程吧，
                                <br />
                                每一口都是傳統與創新的完美融合，
                                <br />
                                匠心獨具，優雅呈現，讓每一餐都成為獨特的美味體驗。
                            </p>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
