import FadeInSection from "./FadeInSection";

function Form() {
    return (
        <section className="form">
            <FadeInSection effect="fade-in-3d">
                <form id="form">
                    <p>歡迎回饋或詢問</p>
                    <label htmlFor="name" className="required">
                        姓名:
                    </label>
                    <input type="text" id="name" name="name" placeholder="請輸入您的姓名" required />

                    <label htmlFor="nick-name">暱稱:</label>
                    <input type="text" id="nick-name" name="nick-name" placeholder="請輸入您的暱稱" />

                    <label htmlFor="email" className="required">
                        電子郵件:
                    </label>
                    <input type="email" id="email" name="email" placeholder="example@example.com" required />

                    <label htmlFor="tel" className="required">
                        電話號碼:
                    </label>
                    <input type="tel" id="tel" name="tel" placeholder="請輸入您的電話號碼" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" />

                    <label htmlFor="message">留言:</label>
                    <textarea id="message" name="message" rows="6" required></textarea>

                    <small>
                        此表單為練習作品，不具有蒐集資料的實際功能，
                        <br />
                        且不具有商業行為。非正式網站
                    </small>
                    <button type="submit">送出</button>
                </form>
            </FadeInSection>
        </section>
    );
}

export default Form;
