const Footer = () => {
    return <>
        <div className="bg-gray-100 w-full py-4 mt-8 md:py-8 md:mt-16">
            <div className="container flex flex-wrap items-center justify-between text-xs md:text-base">
                <p className="font-Mukta">
                    © {new Date().getFullYear()} पौडेल-परिवार ™
                </p>
                <p className="font-Nunito italic">
                    Built by&nbsp;
                    <a href="https://bibhuti.me/" target="_blank" rel="noopener noreferrer" className="site-link">Bibhuti Poudyal</a>
                </p>
            </div>
        </div>
    </>
}


export default Footer;