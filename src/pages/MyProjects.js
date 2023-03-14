import { useState, useEffect } from 'react';

function MyProjects() {
    const token = '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';
    const url = 'https://api.github.com/users/ixicute/repos';
    const [isLoading, setIsLoading] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const filteredRepos = data.filter(repo => repo.name !== "ixicute" && repo.name !== "lab99");
            setRepos(filteredRepos);
            setIsLoading(false);
        })
        .catch(error => console.error(error));
    }, []);

    if (isLoading) {
        return <div >Hämtar data...</div>;
    }

    return (
        <div className="myProjects">
            <main className="container">
                <section className="card-box" id="repo-container">
                    {repos.map(repo => (
                        <article key={repo.id} className="card">
                            <img className="pic" src="https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg" alt="cute animated bunny coding" />
                            <div className="card-text">
                                <h4>Projektets tittel:</h4>
                                <p>{repo.name}</p>
                                <h4>Använt språk:</h4>
                                <p>{repo.language}</p>
                                <p style={{ textAlign: "center;" }}>
                                    <a className="button" href={repo.html_url} target="_blank" rel="noreferrer">Till Repon</a>
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default MyProjects;
