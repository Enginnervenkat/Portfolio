import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <div className="portfolio">
            <h1>My Portfolio.</h1>
            <section>
                <h2>Projects</h2>
                <ul>
                    <li>
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                    </li>
                    <li>
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </li>
                    <li>
                        <h3>Project 3</h3>
                        <p>Description of Project 3.</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                </ul>
            </section>
        </div>
    );
};

export default Portfolio;