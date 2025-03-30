import ContactHero from "../components/Contact/ContactHero";
import QueryTabs from "../components/Contact/QueryTabs";
import ContactForm from "../utils/ContactForm";
import PageTransition from "../utils/PageTransition";

function Contact() {
  return (
    <PageTransition>
      <ContactHero />
      <QueryTabs />
      <ContactForm />
    </PageTransition>
  );
}

export default Contact;
