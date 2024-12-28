import { useRef, useState } from "react";
import "./sass/main.scss";
import archImage from './img/arch.jpeg';
import whatsapp from './img/WhatsApp.svg';

function App() {
    const [isLanguage, setIsLanguage] = useState(true)
    const aboutAcharyaRef = useRef(null);
    const aboutAcharyaMissionRef = useRef(null);
    const navCheckboxRef = useRef(null);
    const poojaCard = useRef(null);

    const handleNavigation = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        if (navCheckboxRef.current) navCheckboxRef.current.checked = false;
    };




    return (<>
        <div className="App">
<button style={{position:'fixed',right:80,bottom:30, zIndex:1000}} className="button-74" role="button" onClick={()=>setIsLanguage(!isLanguage)} >Hindi/English</button>
            
            <a href="https://wa.me/9981933791" target="_blank">
                <img height={50} width={50} style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1000 }} src={whatsapp} alt="whatsapp" />
            </a>
            {
                isLanguage ?
                    <>
                        <nav className="navigation" aria-label="Main Navigation">
                            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ref={navCheckboxRef} />
                            <label htmlFor="navi-toggle" className="navigation__button">
                                <span className="navigation__icon" aria-hidden="true">&nbsp;</span>
                            </label>

                            <div className="navigation__background" aria-hidden="true">&nbsp;</div>

                            <nav className="navigation__nav" aria-label="Sub Navigation">
                                <ul className="navigation__list">
                                    <li className="navigation__item" ><a href="" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(aboutAcharyaRef);
                                        aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>01</span>About Acharya Ji</a></li>

                                    <li className="navigation__item" ><a href="" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(aboutAcharyaMissionRef);
                                        aboutAcharyaMissionRef.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>02</span> Acharya Ji Mission</a></li>
                                    <li className="navigation__item" ><a href="" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(poojaCard);
                                        poojaCard.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>03</span> Pooja list</a></li>

                                </ul>
                            </nav>

                        </nav>
                        <header className="header" role="banner">
                            <div className="header__text-box">
                                <h1 className="heading-primary">
                                    <span className="heading-primary--main">Acharya</span>
                                    <span className="heading-primary--sub">Ashok Dwivedi</span>
                                </h1>
                                <span onClick={(e) => { e.preventDefault(); aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <a className="btn btn--white btn--animated">Discover</a>
                                </span>
                            </div>
                        </header>
                        <main role="main">
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
                                            <img
                                                alt="Photo 1"
                                                className="composition__photo composition__photo--p2"
                                                src={archImage} />

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

                            <section ref={poojaCard} class="section-tours" id="section-tours">
                                <div class="u-center-text u-margin-bottom-big">
                                    <h2 class="heading-secondary">
                                        Pooja List
                                    </h2>
                                </div>

                                <div class="row one-1">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--1">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">Kaalsarp dosh pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>What is the meaning of Kala Sarpa Dosha?</h4>
                                                    <p>If a person has killed or caused the death of an
                                                        innocent animal or a snake during his/her lifetime,
                                                        then they will have the Kaal Sarp Yog in their Kundlis
                                                        in their next birth. It is also said that those
                                                        with Kaal Sarp Yog in their horoscope have to take a
                                                        rebirth to fulfill their unfulfilled desires.</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-1" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-1">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Kaalsarp dosh pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Effects of Kaal Sarp Yog:</h5>
                                                        <p>The effects of Kaal Sarp Yog can be very deep on a person's life. This yog can cause a person to face many types of problems, such as:</p>
                                                        <ul>
                                                            <li>Financial problems</li>
                                                            <li>Health problems</li>
                                                            <li>Marital problems</li>
                                                            <li>Family problems</li>
                                                            <li>Mental stress and anxiety</li>
                                                        </ul>

                                                        <h5>Remedies for Kaal Sarp Yog:</h5>
                                                        <p>There are many remedies that can be done to alleviate the effects of Kaal Sarp Yog, such as:</p>
                                                        <ul>
                                                            <li>  Worshiping Lord Shiva </li>
                                                            <li>  Worshiping snakes </li>
                                                            <li>  Performing Kaal Sarp Yog Nivaran Puja </li>
                                                            <li>  Astrological remedies such as wearing gemstones, chanting mantras, etc. </li>
                                                        </ul>

                                                        <h5>What is Kala Sarpa Dosha effects?</h5>
                                                        <p>Kaal Sarpaa Dosha is a planetary combination with
                                                            Rahu and Ketu on one side and the other planets on
                                                            other side. As one would know, in astrology, Rau and
                                                            Ketu is Shadow planet and not planets in reality,
                                                            thus Kaal Sarpaa Dosha will control the strength of
                                                            the rest of the planets by helming them under their
                                                            grip.</p>

                                                        <h5>How long does Sarpa Dosha last?</h5>
                                                        <ul>
                                                            <li>33 Years</li>
                                                            <li>* KalaSarpa Dosha After 33 Years: When all the
                                                                planets are between Rahu and Ketu, it is called as
                                                                Kala Sarpa.</li>
                                                        </ul>

                                                        <h5>How many types of Kala Sarpa Dosha are there?</h5>
                                                        <ul>
                                                            <li>12 types</li>
                                                            <li>* Types of Kala Sarpa Dosha. There can be 12
                                                                types of Kala Sarpa Yoga according to the
                                                                Placement of Rahu and Ketu.</li>

                                                            <h5>How do I know if I have Kaal Sarp Dosh?</h5>
                                                            <p>Kaal sarp yog or kal sarp dosh is malefic astrological
                                                                combination of planets in a person's birth chart which
                                                                has detrimental effect. A person is said to have
                                                                Kaalsarp dosh when all the 7 planets in his birth chart
                                                                are place between Rahu and Ketu.</p>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--2">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">Navgrah shanti pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>Why Perform Navagraha Puja?</h4>
                                                    <p>Navagraha Puja is a prayer ritual dedicated to the nine celestial bodies in our solar system. These bodies are believed to have a profound impact on our lives and destinies. The nine planets included in Navagraha Puja are Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.

                                                    </p>
                                                    <p> People believe that these celestial bodies influence our fortunes and experiences. Therefore, performing Navagraha Puja helps us to seek the blessings of these planets and bring peace, prosperity, and happiness into our lives.</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-2" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-2">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small"> Navgrah shanti pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Importance of Navagraha Puja</h5>
                                                        <p>Navagraha Puja helps to balance the energy of the celestial bodies and reduce any negative impact on people's lives. This puja is like seeking help from the guardians in the sky, who help to make our lives happy and prosperous.</p>
                                                        <p>Each celestial body has its own color, gemstone, and offering, which are used during the puja. For example, the color red is associated with Mars, and the color yellow is associated with Jupiter. During the puja, people use these colors, gemstones, and offerings to connect with the celestial bodies and receive their blessings.</p>

                                                        <h5>Benefits of Navagraha Puja</h5>
                                                        <p>Performing Navagraha Puja can have several benefits, including:</p>
                                                        <ul>
                                                            <li>Attaining happiness and prosperity in life</li>
                                                            <li>Reducing negative energy</li>
                                                            <li>Achieving balance and peace in life</li>
                                                            <li>Receiving blessings from the celestial bodies</li>
                                                            <li>Experiencing positive changes in life</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--3">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Vastu dosh nivaran pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Vastu Dosh Puja is also known as Vastu Shanti Puja or Vastu Dosh Nivaran Puja. It is a ritual in which the deities of Vastu Shastra are worshiped. The purpose of this puja is to purify the place and create a flow of positive energy throughout the house.</p>

                                                    <p>Vastu Shanti Puja brings good fortune, prosperity, and happiness to the home. This puja helps to make the lives of the residents of the house happy and prosperous.</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-3" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-3">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Vastu dosh nivaran pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Benefits of Vastu Shanti Puja </h5>
                                                        <p>Some benefits of performing Vastu Shanti Puja are:</p>
                                                        <ul>
                                                            <li>Positive energy enters the home and negative energy is removed.</li>
                                                            <li>It brings harmony and balance among the five elements of the home.</li>
                                                            <li>It helps to prevent unexpected disasters.</li>
                                                            <li>It improves the beauty of the home.</li>
                                                        </ul>
                                                        <h5>Remedies to Remove Vastu Dosh</h5>
                                                        <ul>
                                                            <li>Keep a conch shell in the temple of the home and blow it regularly.</li>
                                                            <li>Install a bulb in the southeast direction of the kitchen and light it every day with attention.</li>
                                                            <li>Hang a picture of Lord Shiva's family in the northeast direction.</li>
                                                            <li>Plant a Bilva tree in the east or northwest direction of the home and water it regularly.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row two-2">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--4">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">Grah pravesh pooja
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>After buying or building a new house, a Grah pravesh pooja is performed before living in it. This puja is mainly done to express gratitude to God.</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-4" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-4">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Grah pravesh pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5> Some things related to Grah pravesh pooja: </h5>
                                                        <ul>
                                                            <li>It is important to pay attention to the auspicious day, date, day, and constellation for the Grah pravesh pooja.</li>
                                                            <li>The months of Magh, Phalguna, Vaishakh, and Jyeshtha are considered auspicious for the Grah pravesh pooja.</li>
                                                            <li>Except for Amavasya and Purnima, the second, third, fifth, sixth, seventh, tenth, eleventh, and thirteenth days of the Shukla Paksha are considered auspicious for housewarming.</li>
                                                            <li>It is considered auspicious to enter the house on Monday, Wednesday, Thursday, and Friday.</li>
                                                            <li>Grah pravesh pooja can include the establishment of a kalash, havan, general puja, and recitation of the Sundarkand.</li>
                                                            <li>Milk should be boiled on the day of the Grah pravesh pooja.</li>
                                                            <li>Coconuts should be broken before entering the house on the day of the Grah pravesh pooja.</li>
                                                            <li>On the day of the Grah pravesh pooja, the right foot should be used to enter the house.</li>
                                                            <li>It is advisable to sleep in the same house on the night of the Grah pravesh pooja.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--5">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">Satyanarayan Katha Puja.</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>Why Perform Satyanarayan Katha Puja ?</h4>
                                                    <p>Satyanarayan Katha Puja is an important Hindu ritual, in which Lord Vishnu is worshiped. The main purpose of this puja is to worship Satya and Narayan (Vishnu).
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-5" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-5">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small"> Satyanarayan Katha Puja.</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Meaning of Satyanarayan Katha Puja</h5>
                                                        <p>The meaning of Satyanarayan Katha Puja is to worship Satya as Narayan (Vishnu). It also means that in this world, only Lord Narayan is the truth, and everything else is Maya.
                                                        </p>
                                                        <p>The worship of God is done in many forms, one of which is the Satyanarayan form of God described in this story. Its original text has about 170 verses in Sanskrit language, which are divided into five chapters.
                                                        </p>
                                                        <p>The two main themes of this story are forgetting the resolve and disrespecting the prasad. Through small stories in different chapters of the Vrat Katha, it is told that what kind of problems come if the truth is not followed.</p>

                                                        <h5>Method of Satyanarayan Puja</h5>
                                                        <p>For Satyanarayan Puja, apart from banana leaves and fruits, panchamrit, panchagavya, supari, paan, til, moli, roli, kumkum, and durva are required. For Satyanarayan Puja, panchamrit is made by mixing milk, honey, banana, Ganga water, tulsi leaves, and dry fruits, which is very dear to God.</p>
                                                        <h5>Prasad</h5>
                                                        <p>In Satyanarayan Puja, apart from fruits and sweets, a prasad called panjiri is made by roasting flour and mixing sugar, which is also offered to God.</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--6">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Maha Mrityunjaya Mantra</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>The Maha Mrityunjaya Mantra, also known as the Mrit Sanjivani Mantra, is a powerful and sacred mantra in Hinduism. Chanting this mantra can have several benefits, including:</p>

                                                    <p>Om Haum Joom Sah Om Bhurbhuvah Svah Om Tryambakam Yajamahe Sugandhim Pushtivardhanam Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat Om Svah Bhuvah Bhuh Om Sah Joom Haum Om.
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-6" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-6">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Maha Mrityunjaya Mantra Jaap</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>According to the scriptures, chanting this mantra can even give life to a dying person. Additionally, this mantra provides several other benefits, such as: </h5>
                                                        <ul>
                                                            <li>Attaining happiness and prosperity in life</li>
                                                            <li>Removing negative energy</li>
                                                            <li>Achieving balance and peace in life</li>
                                                            <li>Receiving the blessings of Lord Shiva</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row three-3">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--7">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">Rudrabhishek pooja
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Rudrabhishek is a sacred ritual of worshiping Lord Shiva. In this ritual, the Shivling is bathed with water, milk, curd, honey, ghee, Panchamrit, sandalwood, sesame, rice, turmeric, vermilion, belpatra, flowers of Ankada, lotus flowers, and leaves of Shami, among other things. Additionally, chanting of mantras is also performed. It is believed that performing Rudrabhishek pleases Lord Shiva and he bestows his blessings upon the devotees.</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-7" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-7">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Rudrabhishek pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Rudrabhishekam Procedure :</h5>

                                                        <p>  Rudrabhishekam is an important Hindu ritual, in which Lord Shiva is worshiped and abhishekam is performed. Here is the procedure for Rudrabhishekam:</p>

                                                        <ul>
                                                            <li>Clean the puja place and keep the Shivalinga in the north direction.</li>
                                                            <li>Install the idols of Lord Ganesha and Lord Nandi and worship them.</li>
                                                            <li>Fill a kalash with sacred water and draw a swastika and mangal kalash on it.</li>
                                                            <li>Put supari, coconut, panchratna, coins, akshat, roli, chandan, and red thread in the kalash.</li>
                                                            <li>Perform abhishekam on the Shivalinga with Ganga water.</li>
                                                            <li>Then, perform abhishekam on the Shivalinga with milk, curd, ghee, honey, Ganga water, panchamrit, and chandan.</li>
                                                            <li>After abhishekam, offer flowers, bilva leaves, and dhoop to the Shivalinga.</li>
                                                            <li>Finally, perform aarti and distribute prasad.</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--8">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">Pitra dosh pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>What is Pitra dosh pooja?</h4>
                                                    <p>Pitra Dosh Puja is a Hindu ritual performed to appease the souls of one's ancestors. It is believed that if the ancestors are not at peace, they can cause various problems in the lives of their descendants. The puja is performed to seek forgiveness and blessings from the ancestors.</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-8" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-8">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Pitra dosh pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Symptoms and Remedies of Pitru Dosh</h5>
                                                        <p>Pitru Dosh is a condition where a person needs to perform certain rituals to pacify the souls of their ancestors. Some symptoms of Pitru Dosh are:</p>
                                                        <ul>
                                                            <li>A peepal tree growing in the courtyard or in the cracks of the house without being planted</li>
                                                            <li>Facing obstacles in career and business despite hard work</li>
                                                            <li>Children falling ill frequently</li>
                                                            <li>Frequent conflicts among family members</li>
                                                            <li>Frequent minor accidents</li>
                                                            <li>Obstacles in the progress of the family</li>
                                                            <li>Continuous conflict in the house</li>
                                                            <li>Problems related to marriage and children</li>
                                                        </ul>

                                                        <h5>Some remedies for Pitru Dosh are:</h5>
                                                        <ul>
                                                            <li>Perform tarpan and pind daan during Pitru Paksha</li>
                                                            <li>Feed and donate to Brahmins</li>
                                                            <li>Offer water, flowers, milk, and black sesame seeds to the peepal tree</li>
                                                            <li>Light a lamp with oil in the southern direction of the house</li>
                                                            <li>Feed, donate, or help a poor girl get married.</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--9">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Bhoomi pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>In the scriptures of Sanatan Dharma, the earth or land is given the status of mother. Our earth mother takes care of the entire universe. The earth mother has within her all the necessities of life such as food, air, water, and precious stones.</p>

                                                    <p>Our scriptures state- "Matrabhoomi: putro aham prithivyah." Meaning, the earth is our mother, and we are all her children. It becomes our duty to worship and adore her in a proper manner.</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-9" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-9">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Bhoomi pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Procedure of Bhoomi Pujan</h5>
                                                        <p>The procedure of Bhoomi Pujan is as follows: </p>
                                                        <ul>
                                                            <li>A cow should be made to graze on the land.</li>
                                                            <li>The land should be plastered with cow dung, Ganga water, and cow urine.</li>
                                                            <li>A special mantra should be recited during Bhoomi Pujan.</li>
                                                            <li>After Bhoomi Pujan, construction work can be started on that site.</li>
                                                        </ul>
                                                        <h5>Importance of Bhoomi Pujan</h5>
                                                        <p>Bhoomi Pujan is an important ritual in Hinduism. When we buy a new land and plan to construct a building on it, we should perform Bhoomi Pujan before starting the construction work.</p>
                                                        <p>The purpose of Bhoomi Pujan is to pray to the gods and goddesses, including the goddess of the earth, Lord Vastu, and the gods and goddesses of the area, to grant us permission to construct a building on that land.</p>


                                                        <h5>Benefits of Bhoomi Pujan</h5>
                                                        <p>Performing Bhoomi Pujan has several benefits:</p>
                                                        <ul>
                                                            <li>It removes negativity and brings positivity to the land.</li>
                                                            <li>It is essential to pray to the underground living beings.</li>
                                                            <li>If any living being is harmed during the construction process, the owner of the land is held responsible, hence Bhoomi Pujan is performed to seek forgiveness for any unintentional harm caused.</li>
                                                            <li>Performing Bhoomi Pujan eliminates all the sins related to the construction of the house.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row four-4">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--10">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">Namkaran sanskar. pooja
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Namkaran Sanskar is an important Sanskar that is performed after the birth of a child. This Sanskar is performed on the 12th day after the birth of the child. Through this Sanskar, an attempt is made to provide the newly born child with a beneficial and auspicious environment.</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-10" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-10">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Namkaran sanskar pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Purpose of Namkaran Sanskar</h5>

                                                        <p>
                                                            The purpose of Namkaran Sanskar is to liberate the individual from their past negative tendencies and to acknowledge and appreciate their positive tendencies. During this ritual, the environment should be created to foster the innate positive tendencies and aspirations of the child.</p>

                                                        <p>There should be no discrimination based on the gender of the child during Namkaran Sanskar. Both male and female children should be treated with equal importance and respect.</p>

                                                        <h5>Absence of Gender Discrimination in Indian Culture</h5>
                                                        <p>Indian culture does not have any gender-based discrimination. A virtuous daughter is considered equal to ten sons. "Dasha putra-sama kanya yasya shilavati suta." On the other hand, a son can also be a destroyer of the family's moral values. "Jimi kaputa ke upaje kula sad-dharma nasahim."</p>

                                                        <h5>Purpose of Namkaran Sanskar</h5>
                                                        <p>Therefore, whether it is a son or a daughter, the purpose of Namkaran Sanskar is to eliminate the undesirable tendencies within the child and to create a flow towards the best. The purpose of Namkaran Sanskar is to give the child a good and happy life, not to discriminate based on gender.</p>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--11">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">Ganesh chaturthi pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    {/* <h4>Why Perform Navagraha Puja?</h4> */}
                                                    <p>Ganesh Chaturthi is a significant festival celebrated by Hindus across various parts of India. This festival is celebrated on a grand scale in Maharashtra and Karnataka.
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-11" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-11">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Ganesh chaturthi pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Importance of Ganesh Chaturthi</h5>
                                                        <p>According to the Puranas, Lord Ganesha was born on Ganesh Chaturthi. On this day, Hindus worship Lord Ganesha. Large idols of Lord Ganesha are installed in various prominent locations, and worshiped for nine days.</p>

                                                        <h5>Ganesh Chaturthi Puja Vidhi</h5>
                                                        <ul>
                                                            <li>The idol of Lord Ganesha is installed.</li>
                                                            <li>The idol is worshiped for nine days.</li>
                                                            <li>On the ninth day, the idol is immersed in water amidst music and festivities.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--12">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Annaprasan sanskar pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Annaprashan is one of the 16 sanskars performed in Hinduism. This sanskar marks the first time a baby is fed solid food other than milk. Through this sanskar, the baby is given permission to start eating solid food.</p>

                                                    <p>Annaprashan is an important sanskar in Hinduism. This sanskar is typically performed when the baby is around six or seven months old. During this sanskar, the baby is fed solid food for the first time.</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-12" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-12">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Annaprasan sanskar pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Procedure of Annaprashan Sanskar</h5>
                                                        <ul>
                                                            <li>The baby is fed solid food for the first time.</li>
                                                            <li>During the Annaprashan Sanskar, mantras such as "Shivau te stam vrihiyavavabalasavadomadhau" are chanted.</li>
                                                            <li>After the Annaprashan Sanskar, a havan yajna is also performed for the better and brighter future of the child.</li>
                                                        </ul>

                                                        <h5>Importance of Annaprashan Sanskar</h5>
                                                        <ul>
                                                            <li>This sanskar gives permission to the baby to start eating solid food.</li>
                                                            <li>This sanskar is performed for the better and brighter future of the baby.</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row five-5">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--13">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">Vrat udyapan pooja
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Vrat Udyapan Puja is an important ritual in Hinduism. It is believed that only after performing the Udyapan ritual, one can attain the complete benefits and Punya of the Vrat.</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-13" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-13">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Satyanarayan Katha Puja.</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Importance of Vrat Udyapan Puja</h5>
                                                        <ul>
                                                            <li>During the Vrat, if any mistakes are made unknowingly, we seek forgiveness from the Lord during the Udyapan Puja.</li>
                                                            <li>During the Udyapan, we perform charity and Havan according to our capacity and feed the Brahmins.</li>
                                                            <li>We try to please the Lord by performing Vrat and seek the fruits of our Tapasya through the Udyapan ritual.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--14">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">Govrdhan pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Govardhan Puja is celebrated on the day after Diwali. It is also known as Annakoot. This festival holds great importance in Indian culture. During this festival, a direct connection between nature and humans is observed.
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-14" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-14">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small"> Govrdhan pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Importance of Govardhan Puja</h5>
                                                        <p>
                                                            During Govardhan Puja, cows are worshipped. According to the scriptures, cows are considered sacred, just like the Ganges River. Cows are also considered a symbol of Goddess Lakshmi. Just as Goddess Lakshmi provides happiness and prosperity, cows also provide health and wealth through their milk.</p>

                                                        <h5>Procedure of Govardhan Puja</h5>
                                                        <ul>
                                                            <li>Cows are worshipped.</li>
                                                            <li>Cows are bathed.</li>
                                                            <li>Cows are dressed in new clothes.</li>
                                                            <li>Cows are offered food and fruits.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--15">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Dhanteras pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Dhanteras Puja is celebrated on the 13th day of the Krishna Paksha of the Kartik month. On this day, Lord Dhanvantari emerged from the ocean with the pot of nectar during the Samudra Manthan, hence this day is known as Dhanteras or Dhantrayodashi.
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-15" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-15">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Dhanteras pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Importance of Dhanteras Puja</h5>
                                                        <ul>
                                                            <li>Lord Dhanvantari is worshipped on this day.</li>
                                                            <li>Worshipping Lord Dhanvantari on this day is believed to bring health and wealth.</li>
                                                            <li>On this day, people light diyas in their homes and worship Lord Dhanvantari.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </main>
                    </> :
                    <>
                        <nav className="navigation">
                            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" ref={navCheckboxRef} />
                            <label htmlFor="navi-toggle" className="navigation__button">
                                <span className="navigation__icon">&nbsp;</span>
                            </label>

                            <div className="navigation__background">&nbsp;</div>

                            <nav className="navigation__nav">
                                <ul className="navigation__list">
                                    <li className="navigation__item" ><a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(aboutAcharyaRef);
                                        aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>01</span>आचार्य जी के बारे में</a></li>

                                    <li className="navigation__item" ><a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(aboutAcharyaMissionRef);
                                        aboutAcharyaMissionRef.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>02</span> आचार्य जी का मिशन</a></li>
                                    <li className="navigation__item" ><a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(poojaCard);
                                        poojaCard.current.scrollIntoView({ behavior: 'smooth' })
                                    }

                                    } className="navigation__link"><span>03</span> पूजा सूची</a></li>

                                </ul>
                            </nav>
                        </nav>
                        <header className="header">
                            <div className="header__text-box">
                                <h1 className="heading-primary">
                                    <span className="heading-primary--main">आचार्य</span>
                                    <span className="heading-primary--sub">आशोक द्विवेदी</span>
                                </h1>
                                <span onClick={(e) => { e.preventDefault(); aboutAcharyaRef.current.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <a className="btn btn--white btn--animated">खोजें</a>
                                </span>
                            </div>
                        </header>
                        <main>
                            <section ref={aboutAcharyaRef} className="section-about" id="about-acharya">
                                <div className="u-center-text u-margin-bottom-big">
                                    <h2 className="heading-secondary">
                                        आचार्य आशोक द्विवेदी जी: एक आध्यात्मिक गुरु
                                    </h2>
                                </div>

                                <div className="row">
                                    <div className="col-1-of-2">
                                        <h3 className="heading-tertiary u-margin-bottom-small">शुरुआती जीवन और आध्यात्मिक यात्रा</h3>
                                        <p className="paragraph">
                                            आचार्य आशोक द्विवेदी जी एक साधारण परिवार में जन्मे थे, लेकिन उनकी आध्यात्मिक अभिलाषा ने उन्हें जवानी में ही आध्यात्मिक अध्ययन की ओर धकेल दिया। उनकी जिज्ञासा और आध्यात्मिक ज्ञान की प्यास ने उन्हें जीवन के मौलिक सवालों का अन्वेषण करने के लिए प्रेरित किया। वित्तीय प्रतिबंधन के बावजूद, आचार्य जी ने अपनी आध्यात्मिक यात्रा जारी रखी, जिससे उन्होंने "पोथी पढ़ पढ़ जग मुआ, पंडित भया न कोय" (व्यक्ति स्व-अध्ययन से विद्यार्थी बनता है, कोई पंडित नहीं बनता) वाक्य को अपनाया।

                                            जवानी में, आचार्य जी ने महाराष्ट्र के नाशिक के पंचवटी क्षेत्र में अपना आध्यात्मिक जीवन शुरू किया, जहां उन्होंने अपनी आध्यात्मिक जीवन शुरू की और दूसरों को मार्गदर्शन दिया। 30 से अधिक वर्षों तक, आचार्य जी ने अपनी आध्यात्मिक सेवाएं निरंतर की, धार्मिक कार्यक्रमों का आयोजन किया और हजारों व्यक्तियों की मदद की। उनकी आध्यात्मिक सेवाएं बहुत से लोगों को शांति और खुशी लाई है।
                                        </p>

                                        <h3 className="heading-tertiary u-margin-bottom-small"> प्रमुख विशेषताएं:</h3>
                                        <p className="paragraph">
                                            प्रमुख विशेषताएं:
                                            <li> आध्यात्मिक ज्ञान की गहराई</li>
                                            <li> अनुभवी और वैयक्तिक मार्गदर्शन</li>
                                            <li> धार्मिक समारोहों में विशेषज्ञता</li>
                                            <li> जीवन में शांति और सुख प्राप्त करने के लिए मार्गदर्शन</li>
                                        </p>

                                        <p className="paragraph">आज, आचार्य आशोक द्विवेदी जी एक आध्यात्मिक गुरु के रूप में प्रसिद्ध हैं, और उनकी सेवाएं शांति और सुख की तलाश में लगे व्यक्तियों को प्रेरित और समर्थन करती हैं।</p>

                                        <h3 className="heading-tertiary u-margin-bottom-small"> आचार्य आशोक द्विवेदी जी के बारे में</h3>
                                        <p className="paragraph">
                                            आचार्य आशोक द्विवेदी जी एक प्रतिष्ठित आध्यात्मिक नेता हैं, जिनके पास तीन दशक से अधिक का अनुभव है व्यक्तियों की आध्यात्मिक यात्रा में मार्गदर्शन करने में। उनकी आध्यात्मिक विशेषज्ञता और वैयक्तिक दृष्टिकोण ने उन्हें एक प्रतिष्ठित गुरु बना दिया है।
                                        </p>
                                    </div>
                                    <div className="col-1-of-2">
                                        <div className="composition">
                                            <img
                                                alt="Photo 1"
                                                className="composition__photo composition__photo--p2"
                                                src={archImage} />

                                        </div>
                                    </div>

                                </div>
                            </section>

                            <section ref={aboutAcharyaMissionRef} className="section-stories" id="about-acharya-mission">

                                <div className="u-center-text u-margin-bottom-big">
                                    <h2 className="heading-secondary">
                                        आचार्य आशोक द्विवेदी जी का मिशन
                                    </h2>
                                </div>

                                <div className="row">
                                    <div className="story">
                                        <div className="story__text">
                                            <p>
                                                आज की दुनिया में पूजा पाठ और कर्म कांड व्यावसायिक हो गए हैं। इसके परिणामस्वरूप, अशिक्षित, अनुभवहीन, और असंवेदनशील व्यक्तियों ने भी इन अनुष्ठानों का प्रदर्शन शुरू कर दिया है। इसके अलावा, अधिकांश यजमान पूजा प्रक्रियाओं और कर्म कांड विधियों के बारे में जानकारी की कमी रखते हैं, जिससे वे अविश्वासी व्यक्तियों द्वारा शोषण के प्रति संवेदनशील हो जाते हैं।

                                                इसके परिणामस्वरूप, यजमान अपने वांछित उद्देश्यों को प्राप्त करने में विफल होते हैं, जिससे मानसिक पीड़ा में वृद्धि होती है। आचार्य जी का उद्देश्य है:

                                                यजमानों को सटीक जानकारी प्रदान करना
                                                पूजा प्रक्रियाओं और उनके लाभ/हानि के बारे में यजमानों को शिक्षित करना सुनिश्चित करने के बाद
                                                न्यूनतम और उचित दक्षिणा (दान) के साथ पूजा करना

                                                आचार्य आशोक द्विवेदी जी का उद्देश्य है कि यजमानों को ज्ञान से सशक्त किया जाए, जिससे वे मानसिक पीड़ा से मुक्त हो सकें और उनके जीवन में सकारात्मक परिवर्तन ला सकें।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </section>

                            <section ref={poojaCard} class="section-tours" id="section-tours">
                                <div class="u-center-text u-margin-bottom-big">
                                    <h2 class="heading-secondary">
                                        पूजा सूची
                                    </h2>
                                </div>

                                <div class="row one-1">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--1">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">कालसर्प दोष पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>कालसर्प दोष का अर्थ क्या है?</h4>
                                                    <p>यदि किसी व्यक्ति ने अपने जीवनकाल में किसी भी निर्दोष जानवर या साँप की मृत्यु की हो या किसी भी जीवित जीव की मृत्यु का कारण बनाया हो, तो उसकी अगली जन्म में उसकी कुंडली में कालसर्प योग होगा। इसका यह भी कहा जाता है कि जिनकी कुंडली में कालसर्प योग होता है, उन्हें अपनी अधूरी इच्छाओं को पूरा करने के लिए एक बार फिर जन्म लेना पड़ता है।</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-1" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-1">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">कालसर्प दोष पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>कालसर्प योग के प्रभाव:</h5>
                                                        <p>कालसर्प योग का प्रभाव व्यक्ति के जीवन पर बहुत गहरा हो सकता है। यह योग एक व्यक्ति को कई प्रकार की समस्याओं का सामना करने के लिए कर सकता है, जैसे:</p>
                                                        <ul>
                                                            <li>वित्तीय समस्याएें</li>
                                                            <li>स्वास्थ्य समस्याएें</li>
                                                            <li>Financial problems</li>
                                                            <li>Health problems</li>
                                                            <li>Marital problems</li>
                                                            <li>Family problems</li>
                                                            <li>Mental stress and anxiety</li>
                                                        </ul>

                                                        <h5>कालसर्प योग के उपाय:</h5>
                                                        <p>कालसर्प योग के प्रभाव को कम करने के लिए कई उपाय हो सकते हैं, जैसे:</p>
                                                        <ul>
                                                            <li>  भगवान शिव की पूजा </li>
                                                            <li>  साँपों की पूजा </li>
                                                            <li>  कालसर्प योग निवारण पूजा करना </li>
                                                            <li>  ज्योतिषीय उपाय जैसे रत्न धारण, मंत्र जाप, आदि करना </li>
                                                        </ul>

                                                        <h5>कालसर्प दोष के प्रभाव क्या होते हैं?</h5>
                                                        <p>कालसर्प दोष एक ग्रहण संयोजन है जिसमें एक ओर राहु और केतु होते हैं और दूसरी ओर अन्य ग्रह। जैसा कि हम सभी जानते हैं, ज्योतिष में, राहु और केतु छाया ग्रह होते हैं और वास्तव में ग्रह नहीं होते हैं, इसलिए कालसर्प दोष अपने ग्रहों की शक्ति को नियंत्रित करेगा और उन्हें अपने दबाव में रखेगा।</p>

                                                        <h5>कालसर्प दोष कितनी देर तक चलता है?</h5>
                                                        <ul>
                                                            <li>33 साल</li>
                                                            <li>* 33 साल के बाद कालसर्प दोष: जब सभी ग्रह राहु और केतु के बीच होते हैं, तो इसे कालसर्प कहा जाता है।</li>
                                                        </ul>

                                                        <h5>कालसर्प दोष कितने प्रकार के होते हैं?</h5>
                                                        <ul>
                                                            <li>12 प्रकार</li>
                                                            <li>* कालसर्प दोष के प्रकार. राहु और केतु की स्थाननुसार 12 प्रकार के कालसर्प योग हो सकते हैं।</li>

                                                            <h5>मुझे कैसे पता चलेगा कि मेरे पास कालसर्प दोष है?</h5>
                                                            <p>कालसर्प योग या कालसर्प दोष एक व्यक्ति की जन्म कुंडली में ग्रहों का एक अशुभ योग होता है जिसका नकारात्मक प्रभाव होता है। एक व्यक्ति को कालसर्प दोष होता है जब उसकी जन्म कुंडली में सभी 7 ग्रह राहु और केतु के बीच होते हैं।</p>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--2">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">नवग्रह शांति पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>नवग्रह पूजा क्यों की जाती है?</h4>
                                                    <p>नवग्रह पूजा सौर मंडल के नौ सेलेस्टियल बॉडीज के लिए एक प्रार्थना रитуाल है। इन बॉडीज का मानना है कि वे हमारे जीवन और नियति पर गहरा प्रभाव डालते हैं। नवग्रह पूजा में शामिल नौ ग्रह सूर्य, चंद्र, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु, और केतु हैं।

                                                    </p>
                                                    <p> लोग मानते हैं कि ये सेलेस्टियल बॉडीज हमारे भाग्य और अनुभवों को प्रभावित करते हैं। इसलिए, नवग्रह पूजा करना हमें इन ग्रहों के आशीर्वाद प्राप्त करने में मदद करता है और हमारे जीवन में शांति, समृद्धि और सुख लाता है।</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-2" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-2">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">नवग्रह शांति पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>नवग्रह पूजा का महत्व</h5>
                                                        <p>नवग्रह पूजा सेलेस्टियल बॉडीज की ऊर्जा को संतुलित करने और लोगों के जीवन पर किसी भी नकारात्मक प्रभाव को कम करने में मदद करती है। यह पूजा आकाश में मौजूद संरक्षकों से मदद मांगने के समान है, जो हमारे जीवन को सुखी और समृद्ध बनाने में मदद करते हैं।</p>
                                                        <p>प्रत्येक सेलेस्टियल बॉडी का अपना रंग, रत्न, और प्रसाद होता है, जिसका उपयोग पूजा के दौरान किया जाता है। उदाहरण के लिए, मंगल के साथ लाल रंग जुड़ा है, और बृहस्पति के साथ पीला रंग जुड़ा है। पूजा के दौरान, लोग इन रंगों, रत्नों, और प्रसादों का उपयोग करते हैं ताकि सेलेस्टियल बॉडीज से जुड़े रह सकें और उनके आशीर्वाद प्राप्त कर सकें।</p>

                                                        <h5>नवग्रह पूजा के लाभ</h5>
                                                        <p>नवग्रह पूजा करने से कई लाभ हो सकते हैं, जिनमें शामिल हैं:</p>
                                                        <ul>
                                                            <li>जीवन में सुख और समृद्धि प्राप्त करना</li>
                                                            <li>नकारात्मक ऊर्जा को कम करना</li>
                                                            <li>जीवन में संतुलन और शांति प्राप्त करना</li>
                                                            <li>सेलेस्टियल बॉडीज के आशीर्वाद प्राप्त करना</li>
                                                            <li>जीवन में सकारात्मक परिवर्तन अनुभव करना</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--3">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">Vastu dosh nivaran pooja</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>Vastu Dosh Puja is also known as Vastu Shanti Puja or Vastu Dosh Nivaran Puja. It is a ritual in which the deities of Vastu Shastra are worshiped. The purpose of this puja is to purify the place and create a flow of positive energy throughout the house.</p>

                                                    <p>Vastu Shanti Puja brings good fortune, prosperity, and happiness to the home. This puja helps to make the lives of the residents of the house happy and prosperous.</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-3" class="btn btn--white">View details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-3">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">Vastu dosh nivaran pooja</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>Benefits of Vastu Shanti Puja </h5>
                                                        <p>Some benefits of performing Vastu Shanti Puja are:</p>
                                                        <ul>
                                                            <li>Positive energy enters the home and negative energy is removed.</li>
                                                            <li>It brings harmony and balance among the five elements of the home.</li>
                                                            <li>It helps to prevent unexpected disasters.</li>
                                                            <li>It improves the beauty of the home.</li>
                                                        </ul>
                                                        <h5>Remedies to Remove Vastu Dosh</h5>
                                                        <ul>
                                                            <li>Keep a conch shell in the temple of the home and blow it regularly.</li>
                                                            <li>Install a bulb in the southeast direction of the kitchen and light it every day with attention.</li>
                                                            <li>Hang a picture of Lord Shiva's family in the northeast direction.</li>
                                                            <li>Plant a Bilva tree in the east or northwest direction of the home and water it regularly.</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row two-2">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--4">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">ग्रह प्रवेश पूजा
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>नए घर को खरीदने या बनाने के बाद, ग्रह प्रवेश पूजा की जाती है इससे पहले कि उसमें रहना शुरू किया जाए। इस पूजा का मुख्य उद्देश्य भगवान के प्रति कृतज्ञता व्यक्त करना है।</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-4" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-4">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">ग्रह प्रवेश पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>ग्रह प्रवेश पूजा से संबंधित कुछ बातें:</h5>
                                                        <ul>
                                                            <li>ग्रह प्रवेश पूजा के लिए शुभ दिन, तिथि, दिन, और नक्षत्र पर ध्यान देना आवश्यक है।</li>
                                                            <li>माघ, फाल्गुन, वैशाख, और ज्येष्ठ के महीने ग्रह प्रवेश पूजा के लिए शुभ माने जाते हैं।</li>
                                                            <li>अमावस्या और पूर्णिमा के अलावा, शुक्ल पक्ष के दूसरे, तीसरे, पांचवें, छठे, सातवें, दसवें, ग्यारहवें, और तेरहवें दिन घर प्रवेश के लिए शुभ माने जाते हैं।</li>
                                                            <li>सोमवार, बुधवार, गुरुवार, और शुक्रवार को घर में प्रवेश करना शुभ माना जाता है।</li>
                                                            <li>ग्रह प्रवेश पूजा में कलश स्थापना, हवन, सामान्य पूजा, और सुंदरकांड का पाठ शामिल हो सकता है।</li>
                                                            <li>ग्रह प्रवेश पूजा के दिन दूध उबालना चाहिए।</li>
                                                            <li>ग्रह प्रवेश पूजा के दिन घर में प्रवेश करने से पहले नारियल तोड़ना चाहिए।</li>
                                                            <li>ग्रह प्रवेश पूजा के दिन घर में प्रवेश करने के लिए दायें पैर का उपयोग करना चाहिए।</li>
                                                            <li>ग्रह प्रवेश पूजा की रात को उसी घर में सोना चाहिए।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--5">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">सत्यनारायण कथा पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>सत्यनारायण कथा पूजा क्यों करें?</h4>
                                                    <p>सत्यनारायण कथा पूजा एक महत्वपूर्ण हिंदू धार्मिक अनुष्ठान है, जिसमें भगवान विष्णु की पूजा की जाती है। इस पूजा का मुख्य उद्देश्य सत्य और नारायण (विष्णु) की पूजा करना है।</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-5" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-5">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">सत्यनारायण कथा पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>सत्यनारायण कथा पूजा का अर्थ</h5>
                                                        <p>सत्यनारायण कथा पूजा का अर्थ है कि सत्य को नारायण (विष्णु) के रूप में पूजा करना। इसका अर्थ है कि इस दुनिया में, केवल भगवान नारायण ही सच्चाई है, और बाकी सब माया है।</p>
                                                        <p>इस कथा में भगवान की पूजा कई रूपों में की जाती है, जिसमें से एक रूप सत्यनारायण है, जिसे इस कथा में बताया गया है। इसका मूल पाठ संस्कृत भाषा में लगभग 170 श्लोकों में है, जो पांच अध्यायों में बाँटे गए हैं।</p>
                                                        <p>इस कथा की दो मुख्य थीमें हैं- संकल्प भूलना और प्रसाद का अपमान करना। व्रत कथा के विभिन्न अध्यायों में छोटी-छोटी कहानियों के माध्यम से बताया गया है कि सत्य का अनुसरण नहीं किया जाता तो कैसी समस्याएें आती हैं।</p>

                                                        <h5>सत्यनारायण पूजा की विधि</h5>
                                                        <p>सत्यनारायण पूजा के लिए केले के पत्ते और फल, पंचामृत, पंचगव्य, सुपारी, पान, तिल, मोली, रोली, कुंकुम, और दूर्वा की आवश्यकता होती है। सत्यनारायण पूजा के लिए पंचामृत को बनाकर भगवान को चढ़ाया जाता है, जो भगवान को बहुत प्रिय होता है।</p>
                                                        <h5>प्रसाद</h5>
                                                        <p>सत्यनारायण पूजा में फल और मिठाई के अलावा, एक प्रसाद जिसे पंजिरी कहते हैं, बनाया जाता है जिसमें आटा भूनकर चीनी मिलाई जाती है, जो भगवान को भी चढ़ाया जाता है।</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--6">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">महामृत्युंजय मंत्र</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>महामृत्युंजय मंत्र, जिसे मृत संजीवनी मंत्र भी कहा जाता है, हिंदू धर्म में एक शक्तिशाली और पवित्र मंत्र है। इस मंत्र का जाप करने से कई लाभ हो सकते हैं, जैसे:</p>

                                                    <p>ॐ हौं जूं सः ॐ भूर्भुवः स्वः ॐ त्र्यम्बकं यजामहे सुगंधिं पुष्टिवर्धनम। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्। ॐ स्वः भुवः भुः ॐ सः जूं हौं ॐ।</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-6" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-6">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">महामृत्युंजय मंत्र जाप</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>शास्त्रों के अनुसार, इस मंत्र का जाप करने से मरण को भी जीवित करने की भी क्षमता हो सकती है। इसके अलावा, इस मंत्र से कई अन्य लाभ भी हो सकते हैं, जैसे: </h5>
                                                        <ul>
                                                            <li>जीवन में सुख और समृद्धि प्राप्त करना</li>
                                                            <li>नकारात्मक ऊर्जा को हटाना</li>
                                                            <li>जीवन में संतुलन और शांति प्राप्त करना</li>
                                                            <li>भगवान शिव का आशीर्वाद प्राप्त करना</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row three-3">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--7">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">रुद्राभिषेक पूजा
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>रुद्राभिषेक एक पवित्र अनुष्ठान है, जिसमें भगवान शिव की पूजा की जाती है। इस अनुष्ठान में, शिवलिंग को पानी, दूध, दही, शहद, घी, पंचामृत, चंदन, तिल, चावल, हल्दी, कुंकुम, बेलपत्र, अंकड़ा के फूल, कमल के फूल, और शमी के पत्ते सहित अन्य चीजों से स्नान कराया जाता है। इसके अलावा, मंत्रों का जाप भी किया जाता है। यह माना जाता है कि रुद्राभिषेक करने से भगवान शिव प्रसन्न होते हैं और वे अपने भक्तों पर अपनी कृपा बरसाते हैं।</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-7" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-7">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">रुद्राभिषेक पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>रुद्राभिषेक पूजा की विधि :</h5>

                                                        <p>  रुद्राभिषेक एक महत्वपूर्ण हिंदू अनुष्ठान है, जिसमें भगवान शिव की पूजा की जाती है और अभिषेक किया जाता है। यहां रुद्राभिषेक की पूरी विधि दी गई है:</p>

                                                        <ul>
                                                            <li>पूजा स्थल को साफ करें और शिवलिंग को उत्तर दिशा में रखें।</li>
                                                            <li>भगवान गणेश और भगवान नंदी की मूर्तियां लगाएं और उन्हें पूजा करें।</li>
                                                            <li>एक कलश में पावन जल भरें और उस पर स्वस्तिक और मंगल कलश बनाएं।</li>
                                                            <li>सुपारी, नारियल, पंचरत्न, सिक्के, अक्षत, रोली, चंदन, और लाल धागा कलश में रखें।</li>
                                                            <li>गंगा जल से शिवलिंग का अभिषेक करें।</li>
                                                            <li>इसके बाद, दूध, दही, घी, शहद, गंगा जल, पंचामृत, और चंदन से शिवलिंग का अभिषेक करें।</li>
                                                            <li>अभिषेक के बाद, शिवलिंग को फूल, बिल्व पत्र, और धूप अर्पित करें।</li>
                                                            <li>अंत में, आरती करें और प्रसाद वितरित करें।</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--8">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">पितृ दोष पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <h4>पितृ दोष पूजा क्या है?</h4>
                                                    <p>पितृ दोष पूजा एक हिंदू अनुष्ठान है जो अपने पूर्वजों की आत्माओं को संतुष्ट करने के लिए किया जाता है। माना जाता है कि यदि पूर्वज संतुष्ट नहीं हैं, तो वे अपने वंशजों के जीवन में विभिन्न समस्याएं का कारण बन सकते हैं। पूजा का उद्देश्य पूर्वजों से क्षमा और आशीर्वाद मांगना होता है।</p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-8" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-8">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">पितृ दोष पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>पितृ दोष के लक्षण और उपाय</h5>
                                                        <p>पितृ दोष एक स्थिति है जिसमें एक व्यक्ति को अपने पूर्वजों की आत्माओं को संतुष्ट करने के लिए कुछ अनुष्ठान करने की आवश्यकता होती है। पितृ दोष के कुछ लक्षण हैं:</p>
                                                        <ul>
                                                            <li>घर के आंगन में या घर की दीवारों की दरारों में बिना बोए आते पीपल का पेड़</li>
                                                            <li>कड़ी मेहनत के बावजूद करियर और व्यापार में बाधाएं</li>
                                                            <li>बच्चों की बार-बार बीमारी</li>
                                                            <li>परिवार के सदस्यों के बीच बार-बार झगड़े</li>
                                                            <li>बार-बार छोटे हादसे</li>
                                                            <li>परिवार की प्रगति में बाधाएं</li>
                                                            <li>घर में निरंतर झगड़ा</li>
                                                            <li>विवाह और बच्चों से संबंधित समस्याएं</li>
                                                        </ul>

                                                        <h5>पितृ दोष के कुछ उपाय हैं:</h5>
                                                        <ul>
                                                            <li>पितृ पक्ष के दौरान तर्पण और पिण्ड दान करें</li>
                                                            <li>ब्राह्मणों को खिलाएं और दान करें</li>
                                                            <li>पीपल के पेड़ को पानी, फूल, दूध, और काले तिल के बीज दें</li>
                                                            <li>घर के दक्षिण दिशा में तेल की दीपक जलाएं</li>
                                                            <li>एक गरीब लड़की की शादी कराएं, खिलाएं, या मदद करें।</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--9">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">भूमि पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>सनातन धर्म के शास्त्रों में, पृथ्वी या भूमि को माता का दर्जा दिया गया है। हमारी भूमि माता सम्पूर्ण ब्रह्मांड की देखभाल करती है। भूमि माता के अंदर सभी जीवन की आवश्यकताएं होती हैं जैसे खाद्य, वायु, पानी, और मूल्यवान पत्थर।</p>

                                                    <p>हमारे शास्त्रों में कहा गया है- "मातृभूमि: पुत्रो अहं पृथिव्यः।" अर्थात, भूमि हमारी माता है, और हम सभी उसके बच्चे हैं। हमारी भूमि की पूजा और सम्मान करना हमारा कर्तव्य बन जाता है।</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-9" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-9">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">भूमि पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>भूमि पूजन की विधि</h5>
                                                        <p>भूमि पूजन की विधि निम्नलिखित है:</p>
                                                        <ul>
                                                            <li>एक गाय को भूमि पर चराया जाना चाहिए।</li>
                                                            <li>भूमि को गोबर, गंगा जल, और गोबर के मूत्र से चिकना करना चाहिए।</li>
                                                            <li>भूमि पूजन के दौरान एक विशेष मंत्र का जाप करना चाहिए।</li>
                                                            <li>भूमि पूजन के बाद उस स्थल पर निर्माण कार्य शुरू किया जा सकता है।</li>
                                                        </ul>
                                                        <h5>भूमि पूजन का महत्व</h5>
                                                        <p>हिन्दू धर्म में भूमि पूजन एक महत्वपूर्ण अनुष्ठान है। जब हम नई जमीन खरीदते हैं और उस पर इमारत बनाने की योजना बनाते हैं, तो निर्माण कार्य शुरू करने से पहले भूमि पूजन करना चाहिए।</p>
                                                        <p>भूमि पूजन का उद्देश्य देवी-देवताओं, जिसमें पृथ्वी की देवी, वास्तु देव, और क्षेत्र के देवी-देवता शामिल हैं, से अनुमति मांगना है कि हम उस जमीन पर इमारत बना सकें।</p>

                                                        <h5>भूमि पूजन के लाभ</h5>
                                                        <p>भूमि पूजन करने से कई लाभ होते हैं:</p>
                                                        <ul>
                                                            <li>यह जमीन से नकारात्मकता को दूर करता है और सकारात्मकता लाता है।</li>
                                                            <li>यह地下 में रहने वाले जीवों की प्रार्थना करना आवश्यक है।</li>
                                                            <li>निर्माण प्रक्रिया के दौरान किसी जीव को नुकसान पहुंचता है, तो जमीन के मालिक को जिम्मेदार माना जाता है, इसलिए भूमि पूजन किया जाता है ताकि किसी अनजाने नुकसान के लिए क्षमा मांगी जा सके।</li>
                                                            <li>भूमि पूजन करने से घर के निर्माण से संबंधित सभी पाप नष्ट हो जाते हैं।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row four-4">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--10">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">नामकरण संस्कार</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>नामकरण संस्कार एक महत्वपूर्ण संस्कार है जो एक बच्चे के जन्म के बाद किया जाता है। इस संस्कार को बच्चे के जन्म के 12वें दिन किया जाता है। इस संस्कार के माध्यम से, नवजात शिशु को एक उपयोगी और शुभ वातावरण प्रदान करने का प्रयास किया जाता है।</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-10" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-10">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">नामकरण संस्कार</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>नामकरण संस्कार का उद्देश्य</h5>

                                                        <p>नामकरण संस्कार का उद्देश्य है कि व्यक्ति को उनकी गुणवत्ता को मुक्त करना और उनकी सकारात्मक गुणों को स्वीकार करना। इस अनुष्ठान के दौरान, बच्चे के अंदर उनकी सकारात्मक गुणों और आकांक्षाओं को बढ़ावा देने के लिए एक वातावरण बनाया जाना चाहिए।</p>

                                                        <p>नामकरण संस्कार के दौरान बच्चे के लिंग के आधार पर कोई भेदभाव नहीं होना चाहिए। नामकरण संस्कार के दौरान, न केवल लड़कों को बल्कि लड़कियों को भी समान महत्व और सम्मान दिया जाना चाहिए।</p>

                                                        <h5>भारतीय संस्कृति में लिंग भेदभाव की अभाव</h5>
                                                        <p>भारतीय संस्कृति में किसी भी लिंग के आधार पर कोई भेदभाव नहीं है। एक गुणवान बेटी दस पुत्रों के समान मानी जाती है। "दश पुत्र-समा कन्या यस्य शीलवती सुता।" दूसरी ओर, एक बेटा भी परिवार के नैतिक मूल्यों का विनाशक हो सकता है। "जिमि कपुत्र के उपजे कुल सद्धर्म नष्ट हिम।"</p>

                                                        <h5>नामकरण संस्कार का उद्देश्य</h5>
                                                        <p>इसलिए, चाहे वह एक बेटा हो या एक बेटी, नामकरण संस्कार का उद्देश्य है कि बच्चे के भीतर में अनुपयुक्त आवश्यकताओं को नष्ट करना और उसमें सर्वश्रेष्ठ की ओर प्रवृत्ति बनाना। नामकरण संस्कार का उद्देश्य है कि बच्चे को एक अच्छा और खुशहाल जीवन देना, लिंग के आधार पर भेदभाव नहीं करना।</p>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--11">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">गणेश चतुर्थी पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    {/* <h4>Why Perform Navagraha Puja?</h4> */}
                                                    <p>गणेश चतुर्थी एक महत्वपूर्ण त्योहार है जो भारत के विभिन्न हिस्सों में हिन्दुओं द्वारा मनाया जाता है। यह त्योहार महाराष्ट्र और कर्नाटक में भी बड़े पैमाने पर मनाया जाता है।
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-11" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-11">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">गणेश चतुर्थी पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>गणेश चतुर्थी का महत्व</h5>
                                                        <p>पुराणों के अनुसार, भगवान गणेश का जन्म गणेश चतुर्थी के दिन हुआ था। इस दिन, हिन्दू भगवान गणेश की पूजा करते हैं। विभिन्न प्रमुख स्थानों पर भगवान गणेश की बड़ी मूर्तियां स्थापित की जाती हैं, और नौ दिनों तक पूजी जाती हैं।</p>

                                                        <h5>गणेश चतुर्थी पूजा विधि</h5>
                                                        <ul>
                                                            <li>भगवान गणेश की मूर्ति स्थापित की जाती है।</li>
                                                            <li>भगवान गणेश की मूर्ति नौ दिनों तक पूजी जाती है।</li>
                                                            <li>नौवें दिन, मूर्ति को संगीत और उत्सव के बीच पानी में विसर्जित की जाती है।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--12">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">अन्नप्राशन संस्कार पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>अन्नप्राशन हिन्दू धर्म में किए जाने वाले 16 संस्कारों में से एक है। यह संस्कार निश्चित करता है कि बच्चा दूध के अलावा ठोस भोजन खाना शुरू करे। इस संस्कार के माध्यम से, बच्चे को ठोस भोजन खाने की अनुमति दी जाती है।</p>

                                                    <p>अन्नप्राशन हिन्दू धर्म में एक महत्वपूर्ण संस्कार है। यह संस्कार आम तौर पर तब किया जाता है जब बच्चा छह या सात महीने का होता है। इस संस्कार के दौरान, बच्चे को पहली बार ठोस भोजन दिया जाता है।</p>

                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-12" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-12">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">अन्नप्राशन संस्कार पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>अन्नप्राशन संस्कार की प्रक्रिया</h5>
                                                        <ul>
                                                            <li>शिशु को पहली बार ठोस भोजन दिया जाता है।</li>
                                                            <li>अन्नप्राशन संस्कार के दौरान, "शिवौ ते स्तम व्रिहियववबलसवदोमधौ" जैसे मंत्र उच्चारित किए जाते हैं।</li>
                                                            <li>अन्नप्राशन संस्कार के बाद, शिशु के उज्ज्वल भविष्य के लिए हवन यज्ञ भी किया जाता है।</li>
                                                        </ul>

                                                        <h5>अन्नप्राशन संस्कार का महत्व</h5>
                                                        <ul>
                                                            <li>यह संस्कार शिशु को ठोस भोजन खाना शुरू करने की अनुमति देता है।</li>
                                                            <li>यह संस्कार शिशु के उज्ज्वल भविष्य के लिए किया जाता है।</li>
                                                        </ul>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row five-5">
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--13">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--1">व्रत उद्यापन पूजा
                                                    </span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>व्रत उद्यापन पूजा हिन्दू धर्म में एक महत्वपूर्ण अनुष्ठान है। माना जाता है कि केवल उद्यापन अनुष्ठान पूरा करने के बाद ही, व्रत के पूरे लाभ और पुण्य प्राप्त किए जा सकते हैं।</p>
                                                </div>
                                            </div>
                                            <div class="card__side card__side--back card__side--back-1">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-13" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-13">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">सत्यनारायण कथा पूजा.</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>व्रत उद्यापन पूजा का महत्व</h5>
                                                        <ul>
                                                            <li>व्रत के दौरान, यदि कोई गलती अनजाने में हो जाती है, तो हम उद्यापन पूजा के दौरान प्रभु से क्षमा मांगते हैं।</li>
                                                            <li>उद्यापन के दौरान, हम अपनी क्षमता के अनुसार दान और हवन करते हैं और ब्राह्मणों को खाना खिलाते हैं।</li>
                                                            <li>हम व्रत और तपस्या के फल पाने के लिए प्रभु को प्रसन्न करने का प्रयास करते हैं।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--14">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--2">गोवर्धन पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>गोवर्धन पूजा दिवाली के दिन के बाद मनाई जाती है। यह अन्नकूट के नाम से भी जानी जाती है। यह त्योहार भारतीय संस्कृति में बहुत महत्व रखता है। इस त्योहार के दौरान, प्रकृति और मानव के बीच सीधा संबंध देखा जाता है।
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-2">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-14" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-14">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small"> गोवर्धन पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>गोवर्धन पूजा का महत्व</h5>
                                                        <p>
                                                            गोवर्धन पूजा के दौरान, गायों की पूजा की जाती है। पुराणों के अनुसार, गायें पवित्र मानी जाती हैं, ठीक वैसे ही जैसे गंगा नदी। गायें माता लक्ष्मी का प्रतीक भी मानी जाती हैं। जैसे माता लक्ष्मी सुख और समृद्धि प्रदान करती हैं, वैसे ही गायें स्वास्थ्य और समृद्धि प्रदान करती हैं अपने दूध के माध्यम से।</p>

                                                        <h5>गोवर्धन पूजा की प्रक्रिया</h5>
                                                        <ul>
                                                            <li>गायों की पूजा की जाती है।</li>
                                                            <li>गायों को नहलाया जाता है।</li>
                                                            <li>गायों को नए कपड़े पहनाए जाते हैं।</li>
                                                            <li>गायों को भोजन और फल दिए जाते हैं।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-1-of-3">
                                        <div class="card">
                                            <div class="card__side card__side--front">
                                                <div class="card__picture card__picture--15">
                                                    &nbsp;
                                                </div>
                                                <h4 class="card__heading">
                                                    <span class="card__heading-span card__heading-span--3">धनतेरस पूजा</span>
                                                </h4>
                                                <div class="card__details">
                                                    <p>धनतेरस पूजा कार्तिक मास के कृष्ण पक्ष के 13वें दिन मनाई जाती है। इस दिन, समुद्र मंथन के दौरान, भगवान धन्वंतरी ने अमृत का कलश लेकर प्रकट हुए, इसलिए इस दिन को धनतेरस या धन्त्रयodashी के नाम से जाना जाता है।
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="card__side card__side--back card__side--back-3">
                                                <div class="card__cta">
                                                    <div class="card__price-box">
                                                        <p class="card__price-only"></p>
                                                        <p class="card__price-value"></p>
                                                    </div>
                                                    <a href="#card-15" class="btn btn--white">विवरण देखें</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="popup" id="card-15">
                                            <div class="popup__content">
                                                <div class="popup__right">
                                                    <a href="#section-tours" class="popup__close">&times;</a>
                                                    <h2 class="heading-secondary u-margin-bottom-small">धनतेरस पूजा</h2>
                                                    <h3 class="heading-tertiary u-margin-bottom-small"></h3>
                                                    <p class="popup__text">
                                                        <h5>धनतेरस पूजा का महत्व</h5>
                                                        <ul>
                                                            <li>इस दिन, भगवान धन्वंतरी की पूजा की जाती है।</li>
                                                            <li>इस दिन, भगवान धन्वंतरी की पूजा करने से स्वास्थ्य और समृद्धि प्राप्त होती है।</li>
                                                            <li>इस दिन, लोग अपने घरों में दीपक जलाते हैं और भगवान धन्वंतरी की पूजा करते हैं।</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </main>
                    </>
            }

        </div>
    </>

    );
}

export default App;
