import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="container">
        <div className="text">
          <h2>Hello! I'm Avraham Taga</h2>
          <p>
            a Full Stack Web Developer with experience in the following programs:
            high level knowledge in HTML 5 and CSS 3
            JavaScript/Node.js/Express.js/MongoDb.
          </p>
        </div>
        <div className="photo">
          <img src="assets/avraham-taga.jpg" alt="" className="me" />
        </div>
      </div>
    </div>
  );
};

export default About;
