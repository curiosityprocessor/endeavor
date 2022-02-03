import Story from "./Story"
import RollingBanners from "./RollingBanner";

const HomeHeader = () => {
    return (
        <div className="container home-header">
            <div className="row">
                <Story />
                <RollingBanners />
            </div>
        </div>
    )
};
export default HomeHeader;