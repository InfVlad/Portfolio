const Footer = () => {
    return (
        <div className="footer w-full text-white">
            <div className="mx-auto flex flex-col items-center justify-center py-8">
                <div className="pb-2">
                    <p>
                        This site was built with NextJs, you can check the code{" "}
                        <span className="text-primary-blue">
                            <a
                                href="https://github.com/InfVlad/Portfolio"
                                target="_blank"
                                aria-label="checkout the github page for more information"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                here!
                            </a>
                        </span>
                    </p>
                </div>
                <p>Vladimir Infante. 2023</p>
            </div>
        </div>
    );
};

export default Footer;
