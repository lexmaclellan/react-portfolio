import githubLogo from '../assets/github-mark-white.png'
import linkedInLogo from '../assets/linkedin-logo.png'

function Footer() {
    return (
        <footer className="text-center">
            <a href="https://github.com/lexrayne">
                <img src={githubLogo} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/lex-m-962849294/">
                <img src={linkedInLogo} alt="LinkedIn Logo" />
            </a>
        </footer>
    )
}

export default Footer