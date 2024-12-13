const Footer = () => {
  const getToday = () => {
    const today = new Date();
    return today.getFullYear();
  }
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-500 flex justify-between items-center flex-wrap gap-5">
      <div className="flex items-center flex-col justify-center gap-3 mx-auto">
        <div className="flex gap-3">
          <div className="social-icon">
            <a
              href="https://github.com/kedabdure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition transform hover:scale-110 hover:opacity-80 items-center justify-center"
            >
              <img
                src="/assets/github.svg"
                alt="GitHub"
                className="w-1/3 md:w-1/2 h-1/3 md:h-1/2"
              />
            </a>
          </div>

          <div className="social-icon">
            <a
              href="https://twitter.com/kedabdure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition transform hover:scale-110 hover:opacity-80 items-center justify-center"
            >
              <img
                src="/assets/twitter.svg"
                alt="GitHub"
                className="w-1/3 md:w-1/2 h-1/3 md:h-1/2"
              />
            </a>
          </div>

          <div className="social-icon">
            <a
              href="https://instagram.com/kedabdure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transition transform hover:scale-110 hover:opacity-80 items-center justify-center"
            >
              <img
                src="/assets/instagram.svg"
                alt="GitHub"
                className="w-1/3 md:w-1/2 h-1/3 md:h-1/2"
              />
            </a>
          </div>
        </div>
        <p className="text-white-500 text-xs md:text-sm">© {getToday()} Abdurehim Kedir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
