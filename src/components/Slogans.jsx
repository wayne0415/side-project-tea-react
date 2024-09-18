import slogan1_img from "../assets/images/slogan-small-1.jpg";
import slogan2_img from "../assets/images/slogan-small-2.jpg";
import slogan3_img from "../assets/images/slogan-small-3.jpg";

function Slogan1() {
    return (
        <section className="slogan1">
            <p>
                從古老茶藝中汲取靈感，
                <br />
                細緻雕琢每一滴茶香，用心服務，
                <br />
                將熱情融入每一杯茶。
            </p>
            <div className="slogan1-img">
                <img src={slogan1_img} alt="slogan1-img" />
            </div>
        </section>
    );
}

function Slogan2() {
    return (
        <section className="slogan2">
            <p>
                傳承茶道精髓，
                <br />
                匠心打造每一杯芬芳，用心呈現，
                <br />
                讓每一口茶都滿載熱情與故事。
            </p>
            <div className="slogan2-img">
                <img src={slogan2_img} alt="slogan2-img" />
            </div>
        </section>
    );
}

function Slogan3() {
    return (
        <section className="slogan3">
            <p>
                以傳統茶藝為靈感，
                <br />
                精心打造每一絲茶香，以熱忱與匠心，
                <br />
                讓每一杯茶都承載滿滿心意。
            </p>
            <div className="slogan3-img">
                <img src={slogan3_img} alt="slogan3-img" />
            </div>
        </section>
    );
}

export { Slogan1, Slogan2, Slogan3 };
