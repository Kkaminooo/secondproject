import fb from '../images/facebook-brands.svg'
import insta from '../images/instagram-brands.svg'
import yt from '../images/youtube-brands.svg'
const Footer = () =>{
    return(
        <div className="footer">
            <tr className="footer-categories"> KATEGORIE
                <td>Wykonawcy</td>
                <td>O nas</td>
                <td>Sklep</td>
                <td>Kontakt</td>
            </tr>
            <tr className="footer-information">INFORMACJE
                <td>a</td>
                <td>b</td>
                <td>c</td>
            </tr>
            <div className="footer-social">
                <h2>OBSERWUJ NAS</h2>
                <img src={fb}/>
                <img src={insta}/>
                <img src={yt}/>
            </div>
        </div>
    )
};
export default Footer