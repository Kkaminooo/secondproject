import React, {useState} from 'react';
import Popup from 'reactjs-popup';

const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [send, setSend] = useState();
    const sendingIt =()=> setSend("input.value")

    return (
        <div className="newsletter">
            <div className="newsletter-container">
                <h2 className="newsletter-title"> Jeśli chcesz wiedzieć więcej zapisz się do naszego wypasionego newslettera</h2>
                <button type="button" className="button" onClick={() => setOpen(o => !o)}>
                    KLIKNIJ TUTAJ
                </button>
                <Popup className="popup" open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <a className="close" onClick={closeModal}>
                            &times;
                        </a>
                        <form className="form">
                            <h1>MISZCZU KOCHANY!!! WSPANIALE!!! </h1>
                            <p>Nawet nie wiesz jak się cieszymy! </p>
                            <p>Wstukaj tylko mejla</p>
                            <input
                                type="email"
                                placeholder="Tutaj wpisz adres email"
                            />
                            <button onClick={closeModal}>Wyślij</button>
                        </form>
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default ControlledPopup