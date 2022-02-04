import Categories from "./Categories";
import HomeHeader from "./HomeHeader";
import TodayDeal from "./TodayDeal";

const Contents = () => {
    return (
        <div className="home-page">
            <HomeHeader />
            <Categories />
            <TodayDeal />
        </div>
    )
};
export default Contents;