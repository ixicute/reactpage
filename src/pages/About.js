import aldorImg from "../img/aldor.png"
import aldorCv from "../files/CV.pdf"

function About() {
    return (
        <div className="aboutme">
            <main className="about">
                <section className="about-content">
                    <img src={aldorImg} id="profile" alt="Aldor Besher" />

                    {/* <!--Main article with text and button start--> */}
                    <article className="about-text">
                        <h1>Om Mig</h1>
                        <h5><span>.NET</span> Systemutvecklare</h5>
                        <p>
                            Med min bakgrund inom verksamhetsutveckling och digital marknadsföring tillsammans med min nuvarande
                            utbildning som
                            systemutvecklare på en yrkeshögskola, har jag fått en bred och djup förståelse för den digitala
                            världen. Mitt tidigare
                            arbete har lärt mig vikten av att kunna arbeta i högt tempo och under press. Jag har dessutom varit
                            aktiv inom
                            föreningslivet och lärt mig att ta ansvar och lyfta fram andras bästa sidor.<br /><br />
                            Personligt är jag en person som trivs i sociala sammanhang och som har en stark förmåga att lugnt
                            hantera stressiga
                            eller negativa situationer och fokusera på en mer positiv framtid. När jag inte arbetar så ägnar jag
                            mig gärna åt mina
                            intressen såsom fiske, kodning och läsning.<br /><br />
                            Jag är snabblärd och tar kritik på ett konstruktivt sätt, vilket jag ser som en unik kvalitet som
                            jag kan tillföra en
                            arbetsgivare.
                        </p>
                        <a href={aldorCv} download={aldorCv}>Ladda ner mitt cv</a>
                    </article>
                    {/* <!--Main article with text and button end--> */}
                </section>
            </main>
        </div>
    )
}

export default About;