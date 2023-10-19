import githubLogo from '../assets/github-mark-white.png'

function Footer() {
    return (
        <footer className="text-center">
            <a href="https://github.com/lexrayne">
                <img src={githubLogo} alt="GitHub Logo" />
            </a>
        </footer>
    )
}

export default Footer