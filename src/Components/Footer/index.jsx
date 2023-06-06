import { useEffect, useState } from "react";
import instaLogo from "../../../public/insta.png";
import faceLogo from "../../../public/facebook.png";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrollAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showFooter) {
    return null;
  }

  return (
    <footer className="footer">
      <p>Social Medias</p>
      <a href="https://www.instagram.com/ricozzzo/" target="_blank">
        <img
          className="logoOne"
          src={instaLogo}
          alt="instaLogo"
          style={{ width: 25 }}
        />
      </a>
      <a href="https://www.facebook.com/henrique.ortizpereira" target="_blank">
        <img
          className="logoTwo"
          src={faceLogo}
          alt="facebook"
          style={{ width: 35 }}
        />
      </a>
      <p>Contacts</p>
      <h5>project@ironhack.com</h5>
      <h5>+351 934 002 556</h5>
    </footer>
  );
};

export default Footer;
 