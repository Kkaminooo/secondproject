const Newsletter = () => {
    return (
        <form className="form">
            <h1>Newsletter</h1>
            <p>Wpisz swój email</p>
            <input
                type="text"
                value="email"
            />
            <button>Wyślij</button>
        </form>
    );
}
export default Newsletter;