import Khadamat from "../../components/landingComponent/khadamat/Khadamat";
import Teachers from "../../components/landingComponent/teacherC/Teachers";
import NewsArticles from "../../components/landingComponent/NewsArticles/NewsArticles";
import Podcast from "../../components/landingComponent/Podcast/Podcast";
import Courses from "../../components/landingComponent/eductional courses/courses";
import Template from "../../components/landingComponent/favorite sorts/template";
import Cadr from "../../components/landingComponent/title/Cadr";
const Landing = () => {
    return ( <>
        <Teachers/>
        <Khadamat/>
        <NewsArticles/>
        <Podcast/>
        <Courses/>
        <Template/>
        <Cadr/>
    </> );
}
 
export default Landing;