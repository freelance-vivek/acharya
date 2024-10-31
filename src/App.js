import { useRef } from "react";
import "./sass/main.scss";

function App() {
  const aboutAcharyaRef = useRef(null);
  const aboutAcharyaMissionRef = useRef(null);
  const navCheckboxRef = useRef(null);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    if (navCheckboxRef.current) navCheckboxRef.current.checked = false; // Uncheck the navigation checkbox
  };
  return (
    <div className="App">
     <nav className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"  ref={navCheckboxRef}/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" ><a href= "#about-acharya" onClick={(e) => {
                      e.preventDefault(); 
                      handleNavigation(aboutAcharyaRef);
                      aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })
                    }
                      
                      } className="navigation__link"><span>01</span>About Acharya</a></li>
                    
                    <li className="navigation__item" ><a href= "#about-acharya" onClick={(e) => {
                      e.preventDefault(); 
                      handleNavigation(aboutAcharyaMissionRef);
                      aboutAcharyaMissionRef.current.scrollIntoView({ behavior: 'smooth' })
                    }
                      
                      } className="navigation__link"><span>02</span> Acharya Mission</a></li>
                    
                    </ul>
            </nav>
        </nav>
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Acharya</span>
                    <span className="heading-primary--sub">Ashok Dwivedi</span>
                </h1>
                <span  onClick={(e) => {e.preventDefault(); aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })}}>
                <a className="btn btn--white btn--animated">Discover my work</a>
                </span>
            </div>
        </header>
        <main>
            <section ref={aboutAcharyaRef} className="section-about" id="about-acharya">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                    Acharya Ashok Dwivedi Ji: A Spiritual Guru
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Early Life and Spiritual Journey</h3>
                        <p className="paragraph">
                        Acharya Ashok Dwivedi Ji was born into a humble family, but his inclination towards spiritual studies began at a young age. His curiosity and thirst for spiritual knowledge drove him to explore life's fundamental questions. Despite financial constraints, Acharya Ji continued his spiritual journey, embodying the phrase "पोथी पढ़ पढ़ जग मुआ, पंडित भया न कोय" (One becomes a scholar by self-study, not just formal education).

In his youth, Acharya Ji moved to Nashik's Panchavati area in Maharashtra, where he began his spiritual life and offered guidance to others. For over 30 years, Acharya Ji has worked tirelessly, conducting religious ceremonies and helping thousands of individuals. His spiritual services have brought peace and happiness to many.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small"> Key Attributes:</h3>
                        <p className="paragraph">
                        Key Attributes:
                        <li> Depth of spiritual knowledge</li>
                        <li> Experienced and personalized guidance</li>
                        <li> Expertise in religious ceremonies</li>
                        <li> Guidance for achieving peace and happiness in life</li>
                        </p>
                       
                        <p className="paragraph">Today, Acharya Ashok Dwivedi Ji is renowned as a spiritual guru, and his services continue to inspire and support individuals seeking peace and happiness.</p>
                       
                        <h3 className="heading-tertiary u-margin-bottom-small"> About Acharya Ashok Dwivedi Ji</h3>
                        <p className="paragraph">
                        Acharya Ashok Dwivedi Ji is a distinguished spiritual leader with over three decades of experience in guiding individuals on their spiritual journeys. His spiritual expertise and personalized approach have made him a sought-after guru.
                        </p>
                    </div>
                    <div className="col-1-of-2"> 
                        <div className="composition">

                            <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1"
                                 className="composition__photo composition__photo--p1"
                                 src="img/nat-1-large.jpg"/>

                            <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className="composition__photo composition__photo--p2"
                                 src="img/nat-2-large.jpg"/>

                            <img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className="composition__photo composition__photo--p3"
                                 src="img/nat-3-large.jpg"/>
                           
                        </div>
                    </div>
                    
                </div>
            </section>
           
            <section ref={aboutAcharyaMissionRef} className="section-stories" id="about-acharya-mission">

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                    Acharya Ashok Dwivedi Ji's Mission
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                            Acharya Ji firmly believes that in today's world, puja path and karma kand have become commercialized. As a result, uneducated, inexperienced, and insensitive individuals have also started performing these rituals. Additionally, most yajamans lack knowledge about puja procedures and karma kand methods, making them vulnerable to exploitation by unscrupulous individuals.

Consequently, yajamans fail to achieve their desired objectives, leading to increased mental distress. Acharya Ji's objective is to:

Provide yajamans with accurate information
Educate yajamans on puja procedures and their benefits/drawbacks after ensuring they have proper knowledge
Perform pujas with minimal and fair dakshina (donation)

Acharya Ashok Dwivedi Ji aims to empower yajamans with knowledge, freeing them from mental turmoil and fostering positive change in their lives.
                            </p>
                        </div>
                    </div>
                </div>
               
            </section>
            
        </main>
    </div>
  );
}

export default App;
