
function Header(){
    return(
        <div>
            <h3>오늘은 📆</h3>
            <h2>{new Date().toLocaleDateString()}</h2>
        </div>
    );
}

export default Header;