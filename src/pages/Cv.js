import aldorImg from "../img/aldor.png"

const file = './data/cvEdu.json'

async function GetWorkEdu() {

    let data = await fetch(file)
    let res = await data.json();

    let eduUl = document.getElementById('education');

    let workdiv = document.getElementById('work');

    res.workExperience.forEach(obj => {
        let work = 
        `<article class="job">
            <div class="job-aside">
                <h5>${obj.date}</h5>
                <h5>${obj.company}</h5>
            </div>

            <div class="description">
                <h4>${obj.position}</h4>
                <p>${obj.description}</p>
            </div>
         </article>
        `;

        workdiv.insertAdjacentHTML('beforeend', work)
    })

    res.education.forEach(obj => {
        let edu =`
        <li>
            <h5>${obj.date}</h5>
            <h4>${obj.title}</h4>
            <h4>${obj.institution}</h4>
        </li>`;
        
        eduUl.insertAdjacentHTML('beforeend', edu);
    })
}

//Json Fetch function -- END

function Cv() {
    //Json Fetch function -- START
    GetWorkEdu();
    return (
        
        <div className="cv">
            
            <main className="container">
                {/* <!--Left side section start--> */}
                <aside className="left-sec">

                    <article className="profileText">

                        <div className="profileImg">
                            <img src={aldorImg} alt="Aldor Besher" />
                        </div>

                        <h2>Aldor Besher <br />
                            <span>.Net systemutvecklare</span>
                        </h2>
                    </article>

                    <section className="contactInfo">
                        <h3 className="sideTitle">Kontakt information</h3>
                        <ul>
                            <li>
                                <span className="icon"><i className="fa fa-phone" aria-hidden="true" aria-label="Phone"></i></span>
                                <span className="text">079 - 350 23 59</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true" aria-label="Email"></i></span>
                                <span className="text">vlad.ur@live.se</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-globe" aria-hidden="true" aria-label="Website"></i></span>
                                <span className="text">www.drakensvall.se</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-linkedin" aria-hidden="true" aria-label="LinkedIn"></i></span>
                                <span className="text">www.linkedin.com/in/aldorb</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-map-marker" aria-hidden="true" aria-label="Location"></i></span>
                                <span className="text">Sundsvall, Västernorrland</span>
                            </li>
                        </ul>
                    </section>

                    <section className="eduInfo">
                        <h3 className="sideTitle">Utbildning</h3>
                        <ul id="education">
                                
                        </ul>
                    </section>

                    <section className="langInfo">
                        <h3 className="sideTitle">Språk</h3>
                        <ul>
                            <li>
                                <span className="text">Svenska - Mycket goda kunskaper</span>
                                <span className="percent">
                                    <div style={{ width: '90%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className="text">Engelska - Mycket goda kunskaper</span>
                                <span className="percent">
                                    <div style={{ width: '90%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className="text">Arabiska - Modersmål</span>
                                <span className="percent">
                                    <div style={{ width: '100%' }}></div>
                                </span>
                            </li>
                        </ul>
                    </section>
                </aside>
                {/* <!--Left side section end--> */}

                {/* <!--Right side section start--> */}
                <section className="right-sec">
                    <article className="profile">
                        <h2 className="profileTitle">Min Profil</h2>
                        <p>
                            En driven och passionerad person med ett öga för detaljer. Med erfarenheter från affärsutveckling,
                            webbutveckling, undersköterska samt produktionsassistent har jag utvecklat färdigheter som problemlösning,
                            stress-hantering, anpassningsförmåga och god kommunikation & lagarbete. Dessa erfarenheter har format mig
                            till en person som är effektiv och självständig, med en stark vilja att utveckla mig själv och andra.
                            <br /><br />
                            Idag går jag en två-årig utbildning på yrkeshögskolan Edugrade där jag läser till .NET systemutvecklare
                            med A.I-kompetens vilket har alltid varit mitt drömyrke! Med en stark passion för teknik och kod samt en
                            förståelse för affärsdrivande processer, ser jag fram emot att kombinera dessa kunskaper för att bygga
                            effektiva och lönsamma system.
                        </p>
                    </article>

                    <section className="xp" id="work">
                        <h2 className="profileTitle">Arbetslivserfarenhet</h2>

                        
                    </section>

                    <section className="skills">
                        <h2 className="profileTitle">Färdigheter</h2>
                        <div className="skills-title">
                            <h4>Problemlösning</h4>
                            <span className="percent">
                                <div style={{ width: '100%' }}>100%</div>
                            </span>
                        </div>

                        <div className="skills-title">
                            <h4>Stress-hantering</h4>
                            <span className="percent">
                                <div style={{ width: '100%' }}>100%</div>
                            </span>
                        </div>

                        <div className="skills-title">
                            <h4>Anpassningsförmåga</h4>
                            <span className="percent">
                                <div style={{ width: '100%' }}>100%</div>
                            </span>
                        </div>

                        <div className="skills-title">
                            <h4>Kommunikation & lagarbete</h4>
                            <span className="percent">
                                <div style={{ width: '90%' }}>90%</div>
                            </span>
                        </div>
                    </section>

                    <section className="interests">
                        <h2 className="profileTitle">Intressen</h2>
                        <ul>
                            <li><i className="fa fa-camera" aria-hidden="true"></i>Fotografi</li>
                            <li><i className="fa fa-book" aria-hidden="true"></i>Läsa</li>
                            <li><i className="fa fa-cutlery" aria-hidden="true"></i>Laga Mat</li>
                            <li><i className="fa fa-gamepad" aria-hidden="true"></i>Dator Spel</li>
                        </ul>
                    </section>
                </section>
                {/* <!--Right side section end--> */}
            </main>
        </div>
    )
}

export default Cv;