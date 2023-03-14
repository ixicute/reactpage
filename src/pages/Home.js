function Home() {
    return (
        <div className="index">
            <main className="container">

                {/* <!-- Skills Section --> */}
                <section className="talents">

                    <h2 className="title">Erfarenheter</h2>

                    {/* <!--Cards section start--> */}
                    <section className="card-box">

                        <article className="card">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <h5>Webbutveckling</h5>
                            <div className="card-text">
                                <p>Jag har fått en omfattande kunskap inom webbutveckling under åren, inklusive design och frontend-utveckling.
                                    Jag har arbetat med HTML, CSS, och JavaScript samt verktyget Elementor. Min erfarenhet sträcker sig till att skapa
                                    användarvänliga och responsiva webbplatser.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className="button" href="./cv">Läs Mer</a>
                                </p>
                            </div>
                        </article>

                        <article className="card">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <h5>Systemutveckling</h5>
                            <div className="card-text">
                                <p>Som en student inom systemutveckling är jag fokuserad på att förvärva en omfattande kunskap inom området. Genom mina
                                    studier har jag inkluderat ämnen som objektorienterad programmering med C# och .NET, databasutveckling med SQL och
                                    Entity Framework, samt projektledning och agila metoder. Dessutom har jag befattat mig med webbutveckling Frontend,
                                    inklusive HTML, CSS, Javascript, React, JSON, ASP.NET, designmönster och arkitektur, AI-komponenter med ML och DL i
                                    Microsoft Azure, samt DevOps.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className="button" href="./cv">Läs Mer</a>
                                </p>
                            </div>
                        </article>

                        <article className="card">
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                            <h5>Affärsutveckling</h5>
                            <div className="card-text">
                                <p>Som en affärsutvecklare med nästan ett års erfarenhet, har jag fokuserat på att förstå och stödja organisationers
                                    affärsmål. Genom mina insatser har jag arbetat med marknadsföringsstrategier, försäljningstekniker och affärsanalys.
                                    Jag har också samarbetat med ledningen för att utveckla och implementera lösningar som ökar affärsverksamhetens
                                    framgång.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <a className="button" href="./cv">Läs Mer</a>
                                </p>
                            </div>
                        </article>
                    </section>
                    {/* <!--Cards section ends--> */}

                </section>
            </main>
        </div>
    )
}

export default Home;