import portImage from "../../assets/images/davitshirkhanyan.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about" className="about-title">About Me</h1>
      <img src={portImage} className="portfolio-image" alt="Davit's portfolio" />
      <div className="descDiv">
        <p className="description">
        &emsp;Full Stack Developer with a passion for web application development 
        and success in managing development projects. Skilled in conceptualizing, 
        designing, developing, and deploying software containing logical and 
        mathematical solutions to problems. Dedicated to driving innovation with 
        the ability to follow industry and technological trends, and facilitating 
        early adoption of innovations.
            <br /> <br />
        &emsp;Broadly and deeply knowledgeable in a wide variety of computer languages 
        as well as the principles and techniques of website construction and maintenance. 
        Highly adept at conveying complex technical information to a variety of professional 
        and lay audiences in a clear and understandable manner.
      </p>
      </div>
    </section>
  )
}

export default About