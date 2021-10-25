import React from 'react';

function Resume() {
    return (
        <section className="mx-5">
            <h1 style={{ textAlign: "end" }}>Resume</h1>
            <br />
            <div className="flex-row">
                <div className="col">
                    <h3>Education</h3>
                    <ul>
                        <li>- Full Stack Certification:
                            UCLA extension
                        </li>
                        <br />
                        <br />
                        <li>- Bachelors in Linguistics: California State University, Long Beach</li>
                        <br />
                        <br />
                        <li>- Associates in English: Rio Hondo Community College</li>
                        <br />
                    </ul>
                </div>
                <div className="col">
                    <h3>Work</h3>
                    <ul>
                        <li>- Univeristy of Southern California: Research Assistant</li>
                        <br />
                        <br />
                        <li>- California State University, Long Beach: Research Assistant</li>
                        <br />
                        <br />
                        <li>- Ghost Roasters: Roaster</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;