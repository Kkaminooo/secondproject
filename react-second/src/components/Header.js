import React, {useState} from "react";
function Header(){
    let[font, setFont] = useState("header-element");
    const makeBigger= () =>{
        setFont(true);
    }
    const makeSmaller = () => {
        setFont(false);
    }

    const mover =(e)=>{
        setFont(prev => "bigger")
    }
    const leaver =(e)=>{
        setFont(prev =>"header-element")
    }


    return (
        <div className="App">
            <header className="App-header">
                <ul className="header-list">
                    <li className="header-artists">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}
                        href="#artists"
                        >
                            Artyści
                        </a>
                    </li>
                    <li className="header-element">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}
                           href="http://5amartists.com/"
                        >O nas
                        </a>
                    </li>
                    <li className="header-element">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}
                            href="http://plays.pl/"
                        >Sklep
                        </a>
                    </li>
                    <li className="header-element">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}>Kontakt
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;