

function ProjectArticle() {
    return (
        <div>
            <main>
                <section className="blog-post">
                    <article>
                        <div className="post-title">
                            <h1>Information om Tillgänglighet på sidan</h1>
                        </div>

                        <div className="blog-text">
                            <p>
                                <b>Web Content Accessibility Guidelines (WCAG) 2.1 är en världsomfattande standard och riktlinje med
                                    syfte att säkerställa att webbinnehåll är tillgängligt för alla, oavsett förmåga eller
                                    funktionshinder. Riktlinjerna riktar sig till webbutvecklare, designers och innehållsskapare,
                                    och innefattar specifika anvisningar för att göra webbinnehåll mer tillgängligt, till exempel
                                    genom att tillhandahålla alternativa beskrivningar av bilder och video, och genom att erbjuda
                                    användare möjligheter att ändra storleken på texten på webbplatsen. Genom att följa WCAG 2.1
                                    riktlinjerna, kan vi säkerställa att webbinnehåll är tillgängligt för alla, inklusive personer
                                    med syn- eller hörselskador, motoriska funktionshinder eller läs- och skrivsvårigheter.<br /><br />

                                    Följande är en lista med WCAG riktlinjer filtrerade efter A och AA för målgruppen utvecklare. Det är totalt 34
                                    stycken.
                                </b>
                                <br /> <br />
                                <b>1.3.1 (A) Ange i kod vad sidans olika delar har för roll:</b><br />
                                Sidan är byggd med hjälp av semantiska html taggar för att det ska vara lätt att navigera sig igenom strukturen.
                                <br /><br />
                                <b>1.3.2 (A) Presentera innehållet i en meningsfull ordning för alla:</b><br />
                                Alla sidor är byggda responsivt så att innehållet visas på rätt sätt och ordning oavsett vad användaren har för verktyg
                                (vare sig laptop, ipad, stor skärm eller mobil telefon).
                                <br /><br />
                                <span style={{ pageBreakAfter: "always" }}></span>
                                <span style={{ pageBreakBefore: "always" }}></span><br />
                                <b>1.3.4 (AA) Se till att allt innehåll presenteras rätt oavsett skärmens riktning:</b><br />
                                Samma sak gäller även här som ovan (1.3.2 (A)). Det ska gå att ta del av webbsidans innehåll oavsett skärmläge då den är
                                responsiv.
                                <br /><br />
                                <b>1.3.5 (AA) Märk upp vanliga formulärfält i koden:</b><br />
                                Eftersom sidan saknar formulär eller inmatningsfält så tillämpas inte den här riktlinjen.
                                <br /><br />
                                <b>1.4.1 (A) Använd inte enbart färg för att förmedla information:</b><br />
                                I CV-sidan har jag en ”progress-bar” som innehåller två färger ovanför varandra för att visualisera en procent-del. Jag
                                har då lagt till talet i form av text så att det ska gå att förstå meningen utan att behöva kunna se färgerna.
                                <br /><br />
                                <b>1.4.10 (AA) Skapa en flexibel layout som fungerar vid förstoring eller liten skärm:</b><br />
                                Hemsidan är anpassad för flera skärmstorlekar och fungerar bra även vid mindre skärmar som är 320 pixlar bred.
                                <br /><br />
                                <b>1.4.11 (AA) Använd tillräckliga kontraster i komponenter och grafik:</b><br />
                                Den här punkten är definitivt checkad! Sidan är en ganska bra kontrast mellan text och bakgrund samt även för knappar
                                och navigationsmenyerna. Färgerna är speciellt valda så att de ser bra ut och så att det ska gå att läsa texten utan
                                problem.
                                <br /><br />
                                <b>1.4.12 (AA) Se till att det går att öka avstånd mellan tecken, rader, stycken och ord:</b><br />
                                All text i hemsidan är anpassad för de olika skärmar som användaren kan ha. Det bör gå att ändra textens storlek så att
                                den är mindre eller större utan några problem.
                                <br /><br />
                                <b>1.4.13 (AA) Popup-funktioner ska kunna hanteras och stängas av alla:</b><br />
                                Detta funktionalitet finns i en av sidorna (mina projekt) och det ska gå att stänga popup-modalen som dycker upp genom
                                att trycka på X-knappen.
                                <br /><br />
                                <span style={{ pageBreakAfter: "always" }}></span>
                                <span style={{ pageBreakBefore: "always" }}></span><br />
                                <b>1.4.2 (A) Ge användaren möjlighet att pausa, stänga av eller sänka ljud:</b><br />
                                Ej tillämpningsbar då det inte finns några ljud-filer på hemsidan.
                                <br /><br />
                                <b>1.4.3 (AA) Använd tillräcklig kontrast mellan text och bakgrund:</b><br />
                                Samma sak gäller här som för punkt 1.4.11. Bilderna som används (huvudsakligen den på headern på landing-sidan) är nog
                                vald för att passa med textens färger.
                                <br /><br />
                                <b>1.4.4 (AA) Se till att text går att förstora utan problem:</b><br />
                                Eftersom all text på hemsidan är anpassad för olika skärmar så bör detta inte vara något hinder. Dessutom så går det att
                                zoma-in hela innehållet på de flesta webbläsare.
                                <br /><br />
                                <b>2.1.1 (A) Utveckla systemet så att det går att hantera med enbart tangentbordet:</b><br />
                                Det ska gå att tappa sig igenom hela navigationsmenyn samt att skrolla upp och ner på alla sidor!
                                <br /><br />
                                <b>2.1.2 (A) Se till att markören inte fastnar vid tangentbordsnavigation:</b><br />
                                Testat sidan på olika webbläsare och det ska gå att använda den med enbart tangentbordsnavigation!
                                <br /><br />
                                <b>2.1.4 (A) Skapa kortkommandon med varsamhet:</b><br />
                                Har ej behövts.
                                <br /><br />
                                <b>2.2.1 (A) Ge användarna möjlighet att justera tidsbegränsningar:</b><br />
                                Ej tillämpningsbar då det inte finns några tidsbegränsningar.
                                <br /><br />
                                <b>2.2.2 (A) Ge användarna möjlighet att pausa eller stänga av rörelser:</b><br />
                                Ej tillämpningsbar då det ej används några rörliga material.
                                <br /><br />
                                <b>2.4.1 (A) Erbjud möjlighet att hoppa förbi återkommande innehåll:</b><br />
                                Sidan är ganska enkel och jag anser därmed inte att det finns behov för att skapa länkar som hoppar över menyn.
                                <br /><br />
                                <span style={{ pageBreakAfter: "always" }}></span>
                                <span style={{ pageBreakBefore: "always" }}></span><br />
                                <b>2.4.3 (A) Gör en logisk tab-ordning:</b><br />
                                Testat och allt fungerar som det ska!
                                <br /><br />
                                <b>2.4.7 (AA) Markera tydligt vilket fält eller element som är i fokus:</b><br />
                                Behöver ej tillämpas då det sker automatiskt med de flesta webbläsare. Dessutom är det oftast vanligt att göra detta med
                                JavaScript, vilket inte används för den här sidan.
                                <br /><br />
                                <b>2.5.1 (A) Erbjud alternativ till komplexa fingerrörelser:</b><br />
                                Ej tillämpningsbar då det inte finns några sådan fingerrörelser på den här sidan.
                                <br /><br />
                                <b>2.5.2 (A) Gör det möjligt att ångra klick:</b><br />
                                Det går alltid att stänga de fönster som öppnas när man klickar. Även länkar som tar användaren till andra hemsidor
                                öppnas i nya flikar så att det ska gå att ångra sig klicken genom att stänga det nya fönstret.
                                <br /><br />
                                <b>2.5.3 (A) Se till att text på knappar och kontroller överensstämmer med maskinläsbara etiketter:</b><br />
                                Alla knappar på sidan har en 'aria-label'-attribut så att det ska gå att förstå vad knappen är till för via
                                maskinläsning.
                                <br /><br />
                                <b>3.1.1 (A) Ange sidans språk i koden & 3.1.2 (AA) Ange språkförändringar i koden:</b><br />
                                Det finns inga språkförändringar. Men alla sidor är satta att fungera på korrekt språk (Svenska)
                                <br /><br />
                                <b>3.2.1 (A) & 3.2.2(A) Utför inga oväntade förändringar vid fokusering/inmatning:</b><br />
                                Finns inga events eller något liknande så detta är ej tillämpningsbar.
                                <br /><br />

                                <b>3.3.1 (A) & 3.3.3 (AA) & 3.3.4 (AA): </b><br />
                                Ej tillämpningsbar utifrån koden.
                                <br /><br />
                                <b>3.3.2 (A) Skapa tydliga och klickbara fältetiketter/ledtexter:</b><br />
                                Jag använder label-attribut till alla formulär på sidan!
                                <br /><br />
                                <span style={{ pageBreakAfter: "always" }}></span>
                                <span style={{ pageBreakBefore: "always" }}></span><br />
                                <b>4.1.1 (A) Se till att koden validerar:</b><br />
                                All kod är validerad via w3c verktyget!
                                <br /><br />
                                <b>4.1.2 (A) & 4.1.3 (AA) Se till att skräddarsydda komponenter fungerar i hjälpmedel:</b><br />
                                Det ska fungera som det ska. Kollade upp det via firefox developer-tools.
                            </p>
                        </div>

                    </article>
                </section>
            </main>
        </div>
    )
}

export default ProjectArticle;