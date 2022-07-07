function CardOne() {
    return (
        <div className="body-card-one">
            <div className="profile">
                <img src="https://picsum.photos/100" alt="img"/>
                <div className="info">
            <span className="name">
                Andrée-Ann Labranche
            </span>
                    <span className="date">
                18 Nov
            </span>
                </div>
            </div>

            <div className="body">
                We must believe that we are gifted for something, and that this thing, at whatever cost, must be
                attained.
            </div>

            <div className="footer-card-one">
                <div className="share-icon">
                    {/*<i className="fa fa-strawberry"></i>*/}
                    {/*<i className="fa fa-car"></i>*/}
                    icon-share
                </div>
                <div className="icon-chat-love">
                    <div className="chat">
                        {/*<i className="fa fas fa-share"></i>*/}
                        <spa>24</spa>
                        {" "}
                        i-chat
                    </div>
                    <div className="love">
                        {/*<i className="fa fa-solid fa-heart"></i>*/}
                        <spa>10</spa>
                        {" "}
                        i-love
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardOne;




