const Newsletter = () => {
    return (
        <div className="formView">
            <div className="formBox">
                <form className="form">
                    <h1>Newsletter</h1>
                    <p>Wpisz swój email</p>
                    <input
                        type="text"
                        value="email"
                    />
                    <button>Wyślij</button>
                </form>
            </div>
        </div>
    );
}
export default Newsletter;