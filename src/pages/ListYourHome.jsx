import ListPropertyForm from "../components/ListYourHome/ListPropertyForm";
import ListYourHomeHero from "../components/ListYourHome/ListYourHomeHero";
import PageTransition from "../utils/PageTransition";

function ListYourHome() {
  return (
    <PageTransition>
      <ListYourHomeHero />
      <ListPropertyForm />
    </PageTransition>
  );
}

export default ListYourHome;
