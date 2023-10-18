import profilePicture from '../assets/profile.jpg'

function Home() {
    return (
        <>
            <img className='profile' src={profilePicture} alt='Lex MacLellan' />
            <h1>Lex MacLellan <span className='pronouns'>(she/her, they/them)</span></h1>
            <h2>Web Developer</h2>
            <p>
                Nihil ea vitae recusandae ullam atque nemo. Ut eaque commodi doloribus
                assumenda dicta quia aut praesentium. Et voluptatem rem facilis
                necessitatibus veritatis doloremque quia et.
            </p>
            <p>
                Illo est ullam culpa. Unde delectus sed alias perferendis
                asperiores unde quo neque. Ex praesentium doloribus rerum
                pariatur magni. Dolor ea sapiente unde. Ea veritatis cumque
                sunt unde. Est provident quaerat omnis in voluptate provident.
            </p>
            <p>
                Doloribus voluptatum aperiam provident excepturi dolor aliquam.
                Adipisci omnis vero earum quia corrupti sunt. Nostrum atque
                rerum omnis quia autem. Assumenda voluptate vel praesentium.
                Hic qui laudantium fugit.
            </p>
        </>
    )
}

export default Home