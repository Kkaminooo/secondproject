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
                    <li>
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}>
                            Wykonawcy
                        </a>
                    </li>
                    <li className="header-element">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}>O nas
                        </a>
                    </li>
                    <li className="header-element">
                        <a className= {font}
                            onMouseEnter={mover}
                            onMouseLeave={leaver}>Sklep
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


// const Header = () => {
//     return (
//         <header>
//             <h1>tracker</h1>
//         </header>
//     );
// };

export default Header;