const Footer = () => {
    return <>
        <div className="bg-gray-100 w-full py-8 mt-16">
            <div className="container flex flex-wrap items-center justify-center md:justify-between">
                <p className="font-Mukta">
                    © {new Date().getFullYear()} पौडेल-परिवार ™
                </p>
                <p className="font-Nunito mt-2 md:mt-0">
                    Designed & developed by&nbsp;
                    <a href="https://bibhuti.me/" target="_blank" rel="noopener noreferrer" className="site-link">Bibhuti Poudyal</a>
                </p>
            </div>
        </div>
    </>
}


export default Footer;