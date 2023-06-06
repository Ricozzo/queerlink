import { Carousel } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function HomePage() {
  return (
    <div>
      <div>
        <h1>QueerLink</h1>
        <h3>Connecting Queer Communities</h3>
        <div>
          <Carousel style={{ marginwidth: "50%" }} interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public\marsha3.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public\marshaP.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="public\marshaP.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="bordersPage">
          <p>
            {" "}
            QueerLink is a dynamic and inclusive LGBTQ+ organization that aims
            to empower queer individuals and foster a supportive community. Our
            primary focus is to provide valuable information and resources
            related to exams, queer events, and LGBTQ+ history.
          </p>
          <p>
            At QueerLink, we recognize the unique challenges faced by queer
            individuals in navigating academic pursuits, including exams, and we
            strive to create an inclusive environment where everyone feels
            supported. Our team of dedicated volunteers works diligently to
            compile relevant study materials, share effective exam preparation
            strategies, and offer guidance on exam-related concerns. We believe
            that education is a powerful tool for personal growth and societal
            change, and we are committed to ensuring equal opportunities for
            queer individuals in their educational journey.
          </p>
          <p>
            In addition to our exam-related initiatives, QueerLink is also
            deeply passionate about fostering a vibrant queer community. We
            organize and promote a wide range of queer events, including social
            gatherings, workshops, panel discussions, and cultural celebrations.
            By creating spaces where queer individuals can connect, share
            experiences, and build supportive networks, we aim to strengthen the
            bonds within the community and promote a sense of belonging.
          </p>
          <p>
            Another important aspect of our organization is the focus on LGBTQ+
            history. We firmly believe that understanding and appreciating our
            past is crucial for creating a more inclusive future. Through
            engaging content, educational resources, and interactive sessions,
            QueerLink strives to highlight the significant contributions,
            struggles, and achievements of queer individuals throughout history.
            By sharing these stories, we aim to foster a sense of pride,
            resilience, and empowerment among our community members.
          </p>
          <p>
            QueerLink welcomes individuals of all gender identities, sexual
            orientations, and backgrounds. We actively encourage participation
            from allies, as we believe that collective support is instrumental
            in creating a more inclusive society. Join us on our journey to
            promote equality, education, and celebration within the queer
            community. Together, we can make a lasting impact and shape a
            brighter future for all.
          </p>
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="338"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=ironhack&t=&z=16&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://2yu.co">2yu</a>
          <br />
          <style>
            {`.mapouter { position: relative; text-align: right; height: 338px; width: 100%; }`}
          </style>
          <a href="https://embedgooglemap.2yu.co">html embed google map</a>
          <style>
            {`.gmap_canvas { overflow: hidden; background: none!important; height: 338px; width: 100%; }`}
          </style>
        </div>
      </div>
    </div>
  );
}

export default HomePage;