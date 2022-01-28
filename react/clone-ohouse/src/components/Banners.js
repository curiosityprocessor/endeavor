
const BannerItem = ({banner}) => {
    return (
        <div>
            <p>{banner.id}</p>
            <p>{banner.imageUrl}</p>
            <p>{banner.linkUrl}</p>
        </div>
    )
}

const Banners = ({
    banners
}) => {
    return(
        <div className="carousel">
            <div className="carousel__list-wrap">
                <div className="carousel__list">
                    <div className="carousel__list__entry">
                        {banners.map(banner => (
                            <BannerItem 
                                key={banner.id}
                                banner={banner}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
};
export default Banners;

