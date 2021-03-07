import React, {useState} from "react";
function Header(){
    let[font, setFont] = useState(false);
    const makeBigger= () =>{
        setFont(true);
    }
    const makeSmaller = () => {
        setFont(false);
    }
    return (
        <div className="App">
            <header className="App-header">
                <ul className="header-list">
                    <li className={`header-element ${setFont ? "bigger" : ""}`}>
                        <a
                            onMouseEnter={makeBigger}
                            onMouseLeave={makeSmaller}>
                            Wykonawcy
                        </a>
                    </li>
                    <li className="header-element"><a>O nas</a></li>
                    <li className="header-element"><a>Sklep</a></li>
                    <li className="header-element"><a>Kontakt</a></li>
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