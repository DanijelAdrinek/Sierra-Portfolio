

const NavigationLink = ({ name }) => {

    // ADD USE-EFFECT TO SELECT THE ACTIVE LINK

    return (
        <div className="nav-link"><span className="nav-link-span"><span className="u-nav">{name}</span></span></div>
    )
}

export default NavigationLink;