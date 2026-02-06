
export function About() {
    return (
        <main>
            <section id='details'>
                <h1>Laura Smith</h1>
                <h3>Frontend developer</h3>
                <p>laurasmith.website</p>
                <div id="buttonContainer">
                    <button id="email" className="btn">Email</button>
                    <button id="linkedin" className="btn">Linkedin</button>
                </div>
            </section>
            <section id='about_Interests'>
                <div>
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                        I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                </div>

                <div>
                    <h4>Interests</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur.
                        Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

            </section>
        </main>
    )
}