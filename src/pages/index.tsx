import Patrocinadores from "@/components/commons/Home/Feature-card-patrocinadores";
import { QuemSomos } from "@/components/commons/Home/Feature-quem-somos";
import { Footer } from "@/components/commons/Home/Footer";
// import { Projects } from "@/components/commons/Home/Projects";
import Head from "next/head";


const Home = () => {
  return (
    <> 
    <Head>
      <title>Sobre | DoeMT</title>
      <meta name="description" content="Site sem fins lucatrivos"/>
    </Head>
    <QuemSomos />
    <Patrocinadores />
    <Footer />
  
    </>
  
  );
}
export default Home;