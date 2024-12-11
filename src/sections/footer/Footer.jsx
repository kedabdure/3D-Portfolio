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
            <img src="/assets/github.svg" alt="github" className="w-1/3 md:w-1/2 h-1/3 md:h-1/2" />
          </div>
          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/3 md:w-1/2 h-1/3 md:h-1/2" />
          </div>
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/3 md:w-1/2 h-1/3 md:h-1/2" />
          </div>
        </div>
        <p className="text-white-500 text-xs md:text-sm">© {getToday()} Abdurehim Kedir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
