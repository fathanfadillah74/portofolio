import style from "../assets/styles/contact.module.scss";
import email from "../assets/images/icons/email.png"
import instagram from "../assets/images/icons/instagram.png"
import business from "../assets/images/icons/business.png"
import whatsapp from "../assets/images/icons/whatsapp.png"

function Contact() {
    return (
        <>
            <div className={style.contactContainer}>
                <div className={style.leftContainer}>
                    <h1>Contact Information</h1>
                    <div className={style.headerContent}>
                        <span>You can fill out the form or contact me directly using the contact below</span>
                    </div>
                    <div className={style.bodyContent}>
                        <div className={style.contactContent}>
                            <img src={email} alt="" />
                            <span>fathanfadillah74@gmail.com</span>
                        </div>
                        <div className={style.contactContent}>
                            <img src={whatsapp} alt="" />
                            <span>081292098729</span>
                        </div>
                        <div className={style.contactContent}>
                            <img src={instagram} alt="" />
                            <span>@fathanfdllh</span>
                        </div>
                        <div className={style.contactContent}>
                            <img src={business} alt="" />
                            <span>fathanfdllh</span>
                        </div>
                    </div>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.formContainer}>
                        <form action="">
                            <div className={style.formContent}>
                                <label htmlFor="">Your Name</label>
                                <input type="text" />
                            </div>
                            <div className={`${style.formContent} ${style.emailPhone}`}>
                                <label htmlFor="">Mail</label>
                                <input type="text" />
                                <label htmlFor="">Phone</label>
                                <input type="text" />
                            </div>
                            <div className={style.formContent}>
                                <label htmlFor="">Message</label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;