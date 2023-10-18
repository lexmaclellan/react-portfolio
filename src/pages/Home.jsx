import profilePicture from '../assets/profile.jpg'

function Home() {
    return (
        <>
            <img className='profile' src={profilePicture} alt='Lex MacLellan' />
            <h1>Lex MacLellan <span className='pronouns'>(she/her, they/them)</span></h1>
            <h2>Web Developer</h2>
            <p>
                My name is Lex and I'm a web developer based out of Atlantic Canada.
            </p>
            <p>
                I am primarily a backend developer working with the MERN stack
                and RESTful APIs.
            </p>
            <p>
                In my free time, I enjoy creative writing and playing the guitar.
            </p>
        </>
    )
}

export default Home