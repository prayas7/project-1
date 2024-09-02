const Navigation =()=>{
    return(
        <nav className="container">
            <div classname="logo">
                <img src="/images/nike.png" alt="logo"style={{ width: '100px', height: 'auto' }}/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
         <button>Login</button>
        </nav>
    );
}
export default Navigation;