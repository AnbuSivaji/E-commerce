import coursel from "../images/carousel_2.jpeg";

const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mt-3">
      <img src={coursel} alt="Online Shopping Banner" className="img-fluid mb-3" />
      <b>
        Online shopping is a process whereby consumers directly buy goods, services, etc., from a seller without an intermediary service over the Internet. Shoppers can visit web stores from the comfort of their house and shop while sitting in front of the computer. Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.

        <br />
        <br />

        In traditional systems, shopping is done manually—customers go to physical stores to select and buy products. Selling online offers the advantage of showcasing your products, promotions, and customer reviews digitally. E-commerce (EC), short for electronic commerce, allows the buying and selling of goods and services over electronic networks like the internet.

        <br />
        <br />

        Online shopping platforms are increasingly popular, allowing users to purchase items from anywhere, anytime. Based on the B2C (Business to Customer) model, e-business refers to all transactions carried out online. It offers benefits like global exposure, ease of access, and convenience—helping businesses grow in the digital age.
      </b>
    </div>
  );
};

export default AboutUs;
