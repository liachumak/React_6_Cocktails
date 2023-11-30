import './footer.css';
import FooterItem from "../FooterItem";

const Footer = () => {
   return (
      <footer>
         <FooterItem content='' isLowersetext={true} />
         <div className="footer">
         <FooterItem content='Головна' isLowersetext={false} />
         <FooterItem content='Карта коктелю' isLowersetext={false} />
         <FooterItem content='Контакти' isLowersetext={false} />
         <FooterItem content='Коктелі' isLowersetext={false} />
         </div>
      </footer>);
}

export default Footer;