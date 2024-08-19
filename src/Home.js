function Home() {
    const title = "Deal Drop";
    return (
        <>
        <h1 className='title'>{title}</h1>
        <div className='content'>
            <p>🎮 Deal Drop is a versatile and feature-rich Discord bot designed to enhance your server with powerful tools for managing announcements and keeping your community engaged.</p>
            <p>With 🎮 Deal Drop, users can stay up-to-date on the latest 🎁 giveaways, 💸 discounts, and 🆓 free games available across major platforms like Steam, Epic Games, and more.</p>
            <p>The bot allows you to easily manage 🔔 notification channels, ensuring that your server members never miss out on the best 🔥 deals and offers.</p>
            <p>Whether you're looking to keep your community informed or simply want to provide them with the best 🎮 gaming deals, Deal Drop has you covered!</p>
        </div>
        <div className="invite">
            <h2>🚀 Invite Deal Drop to your server!</h2>
            <div className="button-container">
                <a href="https://discord.com/oauth2/authorize?client_id=1237724694019313756"><button className="add-button">Add to server</button></a>
                <a href=""><button className="donate-button">Support creator</button></a>
            </div>
            <p></p>
        </div>
        </>
    )
}

export default Home;
