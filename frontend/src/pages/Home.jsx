import backgroundVideo from "../assets/backgroundvideo.mp4"; 

const Home = () => {
  return (
    <>
      <section className="banner">
        <video autoPlay muted loop className="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="landing">
          <div className="welcomeText">
            <h1>Five<br/>Borough<br/>Boarders</h1>
            <p className="gdev">
              We love Snowboarding, <br />Join us!
            </p>
          </div>
        </div>  
      </section>
    </>
  );
}

export default Home;
