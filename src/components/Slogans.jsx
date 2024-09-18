import slogan1_img from "../assets/images/slogan-small-1.jpg";
import slogan2_img from "../assets/images/slogan-small-2.jpg";
import slogan3_img from "../assets/images/slogan-small-3.jpg";
import FadeInSection from "./FadeInSection";

function Slogan1() {
    return (
        <section className="slogan1">
            <p>
                <FadeInSection effect="fade-in-up">
                    <span>從古老茶藝中汲取靈感，</span>
                </FadeInSection>

                <FadeInSection effect="fade-in-up">
                    <span>細緻雕琢每一滴茶香，用心服務，</span>
                </FadeInSection>

                <FadeInSection effect="fade-in-up">
                    <span>將熱情融入每一杯茶。</span>
                </FadeInSection>
            </p>

            <div className="slogan1-img">
                <FadeInSection effect="fade-in-left">
                    <img src={slogan1_img} alt="slogan1-img" />
                </FadeInSection>
            </div>
        </section>
    );
}

function Slogan2() {
    return (
        <section className="slogan2">
            <p>
                <FadeInSection effect="fade-in-right">
                    <span>傳承茶道精髓，</span>
                </FadeInSection>
                <FadeInSection effect="fade-in-right">
                    <span>匠心打造每一杯芬芳，用心呈現，</span>
                </FadeInSection>
                <FadeInSection effect="fade-in-right">
                    <span>讓每一口茶都滿載熱情與故事。</span>
                </FadeInSection>
            </p>
            <div className="slogan2-img">
                <FadeInSection effect="fade-in-up">
                    <img src={slogan2_img} alt="slogan2-img" />
                </FadeInSection>
            </div>
        </section>
    );
}

function Slogan3() {
    return (
        <section className="slogan3">
            <p>
                <FadeInSection effect="fade-in-up">以傳統茶藝為靈感，</FadeInSection>

                <FadeInSection effect="fade-in-up">精心打造每一絲茶香，以熱忱與匠心，</FadeInSection>

                <FadeInSection effect="fade-in-up">讓每一杯茶都承載滿滿心意。</FadeInSection>
            </p>

            <div className="slogan3-img">
                <FadeInSection effect="fade-in-down">
                    <img src={slogan3_img} alt="slogan3-img" />
                </FadeInSection>
            </div>
        </section>
    );
}

export { Slogan1, Slogan2, Slogan3 };
