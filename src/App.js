import { useRef } from "react";
import "./sass/main.scss";

function App() {
  const aboutAcharyaRef = useRef(null);
  return (
    <div className="App">
     <nav className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item" onClick={() => aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })}><a  className="navigation__link"><span>01</span>About Acharya</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                    </ul>
            </nav>
        </nav>
        <header className="header">
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Acharya</span>
                    <span className="heading-primary--sub">Ashok Dwivedi</span>
                </h1>
                <span  onClick={() => aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })}>
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
           
            <section class="section-stories">

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

            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full name" id="name" required/>
                                      <label for="name" className="form__label">Full name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                                    <label for="email" className="form__label">Email address</label>
                                </div>

                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label for="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div className="form__radio-group">
                                          <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label for="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div className="form__group">
                                    <button className="btn btn--green">Next step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="footer">
            <div className="footer__logo-box">

                <picture className="footer__logo">
                    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                            media="(max-width: 37.5em)"/>
                    <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png"/>
                </picture>


                
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                        Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img"/>
                    <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img"/>
                </div>
                <div className="popup__right">
                    <a href="#section-tours" className="popup__close">&times;</a>
                    <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                        vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                        vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                        euismod nisi porta.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
