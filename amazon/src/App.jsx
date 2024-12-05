import './App.css'
import logo from './assets/logo.png'
import location from './assets/location.png'
import downarrow from './assets/downarrow.png'
import searchicon from './assets/searchicon.png'
import indianflag from './assets/indianflag.png'
import carticon from './assets/carticon.png'
import hamburgericon from './assets/hamburgericon.png'
import leftarrow from './assets/leftarrow.png'
import rightarrow from './assets/rightarrow.png'
import image17 from './assets/image17.png'
import image18 from './assets/image18.png'
import image19 from './assets/image19.png'
import image20 from './assets/image20.png'
import image21 from './assets/image21.png'
import image22 from './assets/image22.png'
import image24 from './assets/image24.png'
import image25 from './assets/image25.png'
import image26 from './assets/image26.png'
import image28 from './assets/image28.png'

function App() {

  return (
    <>
      <div className="header">
        <div className="header1">
            <div className="logo">
                <img id="logo" src={logo} alt=""/>
            </div>
            <div className="location">
                <div className="hello">Hello</div>
                <div className="locationflex">
                    <div className="locationimg">
                        <img id="locationimg" src={location} alt=""/>
                    </div>
                    <div className="locationtext1">
                        Select you address
                    </div>
                </div>
            </div>
            <div className="searchbar">
                <div className="allsearch">
                    <div className="all">
                        <div className="allflex ">
                            <div className="alltext">All</div>
                            <div className="downarrow">
                                <img id="downarrow" src={downarrow} alt=""/>
                            </div>
                        </div>
                        <div className="search">
                            <img id="search" src={searchicon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flag">
                <div id="flag">
                    <img className="indianflag" src={indianflag} alt=""/>
                </div>
                <div className="flagdownarrow">
                    <img id="flagdownarrow" src={downarrow} />
                </div>
            </div>
            <div className="signin">
                <div className="smalltext">Hello, Sign in</div>
                <div className="account">
                    <div id="mediumtextaccountsidts" className="mediumtext">Account & Lists</div>
                    <div className="accountimg">
                        <img id="accountimg" src={downarrow} alt=""/>
                    </div>
                </div>
            </div>
            <div className="returnorder">
                <div id="retuen" className="smalltext">Return</div>
                <div className="mediumtext">& Order</div>
            </div>
            <div className="cart">
                <div className="cartimg">
                    <img id="cartimg" src={carticon} alt=""/>
                </div>
                <div id="carttext" className="mediumtext">cart</div>
            </div>
        </div>

        <div className="header2">
            <div className="header21">
                <div id="flexjustify1" className="header2">
                    <div>
                        <img id="threearrow" src={hamburgericon} alt=""/>
                    </div>
                    <div id="flexjustifytext1">All</div>
                </div>
                <div className="header2">
                    <div className="headertext2">Best Seller</div>
                </div>
                <div className="header2">
                    <div className="headertext3">Mobile</div>
                </div>
                <div className="header2">
                    <div className="headertext4">Customer Service</div>
                </div>
                <div className="header2">
                    <div className="headertext5">Today's Deals</div>
                </div>
                <div className="header2">
                    <div className="headertext6">Fashion</div>
                </div>
                <div className="header2">
                    <div className="headertext7">Electonics</div>
                </div>
                <div className="header2">
                    <div className="headertext8">Books</div>
                </div>
                <div id="flexjustify1" className="header2">
                    <div className="headertext9">
                        Prime
                    </div>
                    <div>
                        <img id="downarrow21" src={downarrow} alt=""/>
                    </div>

                </div>
                <div className="header2">
                    <div className="headertext10">New Releases</div>
                </div>
                <div className="header2">
                    <div className="headertext11">Home & Kitchen</div>
                </div>
                <div className="header2">
                    <div className="headertext12">Amazon Pay</div>
                </div>
            </div>
        </div>
    </div>

    <div className="main">
        <div className="mainflex">
            <div className="sidearrow">
                <img id="sidearrowimage1" src={leftarrow} alt=""/>
            </div>
            <div className="sidearrow">
                <img id="sidearrowimage2" src={rightarrow} alt=""/>
            </div>    
        </div>
        <div className="flexthemain">
            <div className="boxs">
                <div className="parent">
                    <div className="maingrid">
                        <div id="box1" className="box">
                            <div className="maintext"> <b>Upgrade your home | Amazon Brands & more</b></div>
                            
                            <div className="subgrid">
                                <div className="subimg1">
                                    <div>
                                        <img className="subimg" src={image17} alt=""/>
                                    </div>
                                    <div className="imgtext">
                                        Smart LED TVs
                                    </div>
                                </div>
                                <div className="subimg">
                                    <div>
                                        <img className="subimg" src={image18} alt=""/>
                                    </div>
                                    <div className="imgtext">
                                        Appliances
                                    </div>
                                </div>
                                <div className="subimg1">
                                    <div>
                                        <img className="subimg" src={image20} alt=""/>
                                    </div>
                                    <div className="imgtext">
                                        Furniture
                                    </div>
                                </div>
                                <div className="subimg">
                                    <div>
                                        <img className="subimg" src={image19} alt=""/>
                                    </div>
                                    <div className="imgtext">
                                        Kitchen products
                                    </div>
                                </div>
                            </div>
                            <div className="shopnow">
                                shop now
                            </div>
                        </div>
                        <div className="box"><div className="maintext">Revamp your home in style</div>
                            
                        <div className="subgrid">
                            <div className="subimg1">
                                <div>
                                    <img className="subimg" src={image25} alt=""/>
                                </div>
                                <div className="imgtext">
                                    Smart LED TVs
                                </div>
                            </div>
                            <div className="subimg">
                                <div>
                                    <img className="subimg" src={image24} alt=""/>
                                </div>
                                <div className="imgtext">
                                    Smart LED TVs
                                </div>
                            </div>
                            <div className="subimg1">
                                <div>
                                    <img className="subimg" src={image22} alt=""/>
                                </div>
                                <div className="imgtext">
                                    Smart LED TVs
                                </div>
                            </div>
                            <div className="subimg">
                                <div>
                                    <img className="subimg" src={image21} alt=""/>
                                </div>
                                <div className="imgtext">
                                    Smart LED TVs
                                </div>
                            </div>
                        </div>
                        <div className="shopnow">
                            Explore all
                        </div>
                    </div>
                        <div className="box">
                            <div className="maintext">Upto 70%off | Clearance store</div>
                            <div className="laptopsaleflex">
                                <div className="laptopsale">
                                    <img id="laptopsaleimg" src={image26} alt=""/>
                                </div>
                            </div>
                            <div id="laptopshopnow" className="shopnow">
                                See more
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="signinsecurly">
                        <div className="bigsignintext">
                            <div className="bigsignintextb">
                                <b>Sign in for your best expreience</b>
                            </div>
                        </div>
                        <div className="signinbuttonflex">
                            <div className="signinbuttonmain">
                                <div className="signinbutton">
                                    Sign in securely
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topbrandslaptop">
                        <img id="topbrandslaptop" src={image28} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
