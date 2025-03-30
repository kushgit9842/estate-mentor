import PartnerForm from "../components/PartnerWithUs/PartnerForm";
import PartnerHero from "../components/PartnerWithUs/PartnerHero";
import PageTransition from "../utils/PageTransition";

function PartnerWithUs() {
  return (
    <PageTransition>
      <PartnerHero />
      <PartnerForm />
    </PageTransition>
  );
}

export default PartnerWithUs;
