const footerItem = [
  "About",
  "Download the X app",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "X for Business",
  "Developers",
  "Directory",
  "Settings",
  "© 2024 X Corp",
];
const Footer = () => {
  return (
    <>
      <div className="h-[80px] flex flex-wrap  items-center justify-center gap-0  mt-8 px-4 md:gap-2">
        {footerItem.map((items, i) => {
          return <p className="p-1 text-sm" key={i}>{items}</p>;
        })}
      </div>
    </>
  );
};

export default Footer;
