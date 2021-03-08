import icon1 from '../images/compact-disc-solid.svg'
import icon2 from '../images/music-solid.svg'
import icon3 from '../images/youtube-brands.svg'
function Content (){
    return (
        <div className="content">
            <div>
                <img alt="foto" src={icon1}/>
                <p>Tłoczymy płyty
                </p>
            </div>
            <div>
                <img alt="foto" src={icon2}/>
                <p>Dostarczanie materiałów na platformy streamingowe
                </p>
            </div>
            <div>
                <img alt="foto" src={icon3}/>
                <p>Monetyzacja YT
                </p>
            </div>
        </div>
    )
}
export default Content