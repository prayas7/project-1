const Hero = ()=>{
    
    return <main className="hero container">
        <div className="hero-contant">
            <h1>YOUR FEET DESERVE THE BEST</h1>
        
            <p>
            We are here to give you best shoes you cloud ever imagie and you know who we are we are nike.
            </p>
            <div className="hero-btn">
                
                <button>Shop now</button>
                <button className="sec-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also availble at</p>
                <div className="brand-icons">
                    <img src="/images/fk.png" alt="Filpkart-logo"style={{height:
                    'auto',  width: 55}}></img>
                    <img src="/images/Amazon_icon.png" alt="Filpkart-logo"style={{height:
                    'auto',  width: 50}}></img>
                </div>
            </div>
         </div>
        

        <div classname="hero-image">
        <img src="/images/Nike2.png" alt="Filpkart-logo"style={{height:
        'auto',  width: 500}}></img>

        </div>
    </main>
}
export default Hero;