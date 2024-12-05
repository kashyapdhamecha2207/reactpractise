import './App.css'
import Spotifylogo from './assets/Spotifylogo.png'
import Home from './assets/Home.png'
import Search from './assets/Search.png'
import Yourlibrary from './assets/Yourlibrary.png'
import Create from './assets/Create.png'
import Liked from './assets/Liked.png'
import xyz from './assets/xyz.png'
import yourepisodes from './assets/yourepisodes.png'
import toparrownavigation from './assets/toparrownavigation.png'
import User from './assets/User.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'
import image9 from './assets/image9.png'
import image10 from './assets/image10.png'
import image11 from './assets/image11.png'
import xyz2 from './assets/xyz2.png'
import MusicPlayerOptions from './assets/MusicPlayerOptions.png'
import Rightoptions from './assets/Rightoptions.png'

function App() {

  return (
    <>
    <div className="sp">
        <div className="lside">
            <div className="sidebar">
                <div className="logo"><img src={Spotifylogo} alt="" className="logo_img"/></div>
                <div className="buttons">
                    <div><img src={Home} alt="" className="home_img"/></div>
                    <div className="home">Home</div>
                    <div><img src={Search} alt="" className="home_img"/></div>
                    <div className="home">Search</div>
                    <div><img src={Yourlibrary} alt="" className="home_img"/></div>
                    <div className="home">Your library</div>
                </div>

                <div className="sidebar1">
                    <div className="img"><img src={Create} alt="" className="icon_img"/></div>
                    <div className="home1">Create Playlist</div>
                    <div className="img"><img src={Liked} alt="" className="icon_img"/></div>
                    <div className="home1">Liked songs</div>
                    <div className="img"><img src={yourepisodes} alt="" className="icon_img"/></div>
                    <div className="home1">Your Episodes</div>
                </div>

                <div className="text">
                    <div className="text1">FAV</div>
                    <div className="text1">Daily Mix1</div>
                    <div className="text1">Discover Weekly</div>
                    <div className="text1">Malayalam</div>
                    <div className="text1">Dance/Electronix Mix</div>
                    <div className="text1">EDM/Popular</div>
                </div>

                <div className="sidebar2">
                    <div className="buttons">
                        <div><img src={xyz} alt="" className="home_img"/></div>
                        <div className="inst">Install App</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rside">
            <div className="navbar">
                <div><img src={toparrownavigation} alt="" className="arrow"/></div>
                <div><img src={User} alt="" className="user"/></div>
            </div>
            <div className="text2">Good Morning</div>
            <div className="box">
                <div className="liked">
                    <div><img src={Liked} alt="" /></div>
                    <div className="l">Liked Songs</div>
                </div>
                <div className="liked">
                    <div><img src={image4} alt="" /></div>
                    <div className="l">Neffex Playlist</div>
                </div>
                <div className="liked">
                    <div><img src={image3} alt="" /></div>
                    <div className="l">K/DA</div>
                </div>
                <div className="liked">
                    <div><img src={image1} alt="" /></div>
                    <div className="l">Liked Songs</div>
                </div>
                <div className="liked">
                    <div><img src={image2} alt="" /></div>
                    <div className="l">Dance/electronic Mix</div>
                </div>
            </div>
            <div className="text2">Shows you might like</div>
            <div className="box2">
                <div className="poster">
                    <div className="img"><img src={image9} alt="" /></div>
                    <div className="title">Weeky Motivatio...</div>
                    <div className="stitle"></div>
                </div>
                <div className="poster">
                    <div className="img"><img src={image8} alt="" /></div>
                    <div className="title">MEDITATION SELF</div>
                    <div className="stitle"></div>
                </div>
                <div className="poster">
                    <div className="img"><img src={image7} alt="" /></div>
                    <div className="title">World Beyond act</div>
                    <div className="stitle"></div>
                </div>
                <div className="poster">
                    <div className="img"><img src={image6} alt="" /></div>
                    <div className="title">THE ALEXA SHOW</div>
                    <div className="stitle"></div>
                </div>
                <div className="poster">
                    <div className="img"><img src={image5} alt="" /></div>
                    <div className="title">THE Stories oF MA...</div>
                    <div className="stitle"></div>
                </div>
                <div className="poster">
                    <div className="img"><img src={image10} alt="" /></div>
                    <div className="title">Motivation daily b...</div>
                    <div className="stitle"></div>
                </div>
            </div>
        </div>

    </div>
    <div className="bottom">
        <div className="left">
            <div><img src={image11} alt="" className="bottom_img"/></div>
            <div className="name">Dreaming On NEFFEX</div>
            <div className="like"><img src={xyz2} alt="" className="like_img"/></div>
        </div>
        <div className="center">
            <div><img src={MusicPlayerOptions} alt="" className="music_player"/></div>
        </div>
        <div className="right">
            <div><img src={Rightoptions} alt="" className="right_option"/></div>
        </div>

    </div>
    </>
  )
}

export default App
