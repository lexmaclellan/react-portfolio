import freshFinder from '../assets/freshfinder.jpg'
import pokePlaylist from '../assets/pokeplaylist.jpg'
import picTalk from '../assets/pictalk.jpg'

function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <div className='portfolio'>
                <div className='sample' style={{ backgroundImage: `url(${freshFinder})` }}>
                    <p>
                        <a href="https://github.com/lexrayne/Fresh-Finder">Fresh Finder</a>
                    </p>
                    <p>
                        Full stack app that finds the freshest items in your local grocery stores
                    </p>
                    </div>
                <div className='sample' style={{ backgroundImage: `url(${pokePlaylist})` }}>
                    <p>
                        <a href="https://stms15.github.io/PokePlaylist-app/">PokePlaylist</a>
                    </p>
                    <p>
                        Creates a Spotify playlist based on the user's choice of Pokemon
                    </p>
                    </div>
                <div className='sample' style={{ backgroundImage: `url(${picTalk})` }}>
                    <p>
                        <a href="https://github.com/lexrayne/PicTalk">PicTalk</a>
                    </p>
                    <p>
                        Social media API that lets the user post photos
                    </p>
                </div>
            </div>
        </>
    )
}

export default Portfolio