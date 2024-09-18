import video from "../assets/videos/banner-video.mp4";

function Header() {
    return (
        <section className="header-section">
            <video src={video} autoPlay muted loop playsInline className="background-video"></video>
            <p className="small">
                <span className="first-delay">沏一杯茶，聆聽時間的聲音</span>
                <br />
                <span className="second-delay">在『沏茶客棧』，每一滴茶香都述說著遠方的故事</span>
                <br />
                <span className="third-delay">探索，品味，享受 —— 每一刻都是生活的藝術</span>
            </p>
            <div className="big-container">
                <div className="big1">
                    <span>wellcome</span>
                    <span>客官留步</span>
                    <span>いらっしゃいませ</span>
                </div>
                <div className="big2">
                    <span>wellcome</span>
                    <span>客官留步</span>
                    <span>いらっしゃいませ</span>
                </div>
            </div>
        </section>
    );
}

export default Header;
