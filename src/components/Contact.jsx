import { storeInfo, openingHours, socials } from "../../constants";

const Contact = () => {
  
  return (
    <section id="contact" className="noise-radial-gradient">
      <h1>{storeInfo.heading}</h1>
      <div className="content">
        <div className="address">
          <p className="label">Visit our store</p>
          <p className="text">{storeInfo.address}</p>
        </div>
        <div className="contact">
          <p className="label">Contact us</p>
          <div className="text">
            <p className="phone">{storeInfo.contact.phone}</p>
            <p className="email">{storeInfo.contact.email}</p>
          </div>
        </div>
        <div className="openingHours">
          <p className="label">Open every day</p>
          <div className="text">
            {openingHours.map((duration, index) => (
              <p key={index} className="duration">
                {duration.day}: {duration.time}
              </p>
            ))}
          </div>
        </div>
        <div className="socials text-center">
          <p className="font-sans font-medium text-lg">Socials</p>
          <div className="text flex flex-row gap-5 ">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/images/footer-left-leaf.png"
        alt="left leaf"
        className="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="right leaf"
        className="f-right-leaf"
      />
      <img src="/images/footer-drinks.png" alt="drinks" className="f-drinks" />
    </section>
  );
};

export default Contact;
