import fb from '../images/facebook-brands.svg'
import insta from '../images/instagram-brands.svg'
import yt from '../images/youtube-brands.svg'
const Footer = () =>{
    return(
        <footer className="footer">
            <tr className="footer-categories"> KATEGORIE
                <a href="#artists">Wykonawcy</a>
                <a href="">O nas</a>
                <a href="">Sklep</a>
                <a href="">Kontakt</a>
            </tr>
            <tr className="footer-information">INFORMACJE
                <td>a</td>
                <td>b</td>
                <td>c</td>
            </tr>
            <div className="footer-social">
                <h2>OBSERWUJ NAS</h2>
                <a href="https://www.facebook.com/AutomatikPL"><img src={fb} /></a>
                <a href="https://www.instagram.com/automatik.pl/"><img src={insta} /></a>
                <a href="https://www.youtube.com/channel/UCItb8o-yCss2eSjtah-80TA"><img src={yt}/></a>
            </div>
        </footer>
    )
};
export default Footer