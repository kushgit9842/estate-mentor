import AdvantagesSection from "../components/Tenants/AdvantagesSection";
import CallToAction from "../components/Tenants/CallToAction";
import OurServices from "../components/Tenants/OurServices";
import TenantHero from "../components/Tenants/TenantHero";
import PageTransition from "../utils/PageTransition";

function Tenants() {
  return (
    <PageTransition>
      <TenantHero />
      <AdvantagesSection />
      <OurServices />
      <CallToAction />
    </PageTransition>
  );
}

export default Tenants;
