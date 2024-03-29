import style from "../assets/styles/contact.module.scss";
import email from "../assets/images/icons/email.png";
import instagram from "../assets/images/icons/instagram.png";
import business from "../assets/images/icons/business.png";
import whatsapp from "../assets/images/icons/whatsapp.png";

function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text.target.innerHTML);
    console.log(text);
  };
  return (
    <>
      <div className={style.contactContainer} id="contact">
        <div className={style.leftContainer}>
          <h1>Contact Information</h1>
          <div className={style.headerContent}>
            <span>
              You can fill out the form or contact me directly using the contact
              below
            </span>
          </div>
          <div className={style.bodyContent}>
            <div className={style.contactContent}>
              <img src={email} alt="" />
              <span onClick={copyToClipboard}>fathanfadillah74@gmail.com</span>
            </div>
            <div className={style.contactContent}>
              <a href="https://wa.me/6281292098729">
                <img src={whatsapp} alt="" />
              </a>
              <span>
                <a href="https://wa.me/6281292098729">081292098729</a>
              </span>
            </div>
            <div className={style.contactContent}>
              <a href="https://www.instagram.com/fathanfdllh/">
                <img src={instagram} alt="" />
              </a>

              <span>
                <a href="https://www.instagram.com/fathanfdllh/">
                  @fathanfdllh
                </a>
              </span>
            </div>
            <div className={style.contactContent}>
              <a href="https://id.linkedin.com/in/fathanfadillah">
                <img src={business} alt="" />
              </a>
              <span>
                <a href="https://id.linkedin.com/in/fathanfadillah">
                  fathanfdllh
                </a>
              </span>
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
              <button className={style.buttonSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
