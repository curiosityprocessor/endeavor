import {ReactComponent as IconNew} from '../images/icons/new.svg';

const stypePositionRelative = {
    position: "relative"
}
const Gnb = () => {
    return (
        <div data-sticky-enabled="false" data-sticky-disabled="false" data-sticky-always="true" data-sticky-ignore="false" data-direction="top" data-offset="-41" className="sticky-container layout-navigation-secondary-wrap">
            <div className="sticky-child layout-navigation-secondary" style={stypePositionRelative}>
                <div className="layout-navigation-secondary__content">
                    <nav className="layout-navigation-secondary__menu">
                        <a className="layout-navigation-secondary__menu__item layout-navigation-secondary__menu__item--active" href="/store">스토어홈</a>
                        <a className="layout-navigation-secondary__menu__item hide-mobile" href="/store/category?category=0&amp;order=popular">카테고리</a>
                        <a className="layout-navigation-secondary__menu__item" href="/commerces/ranks">베스트</a>
                        <a className="layout-navigation-secondary__menu__item" href="/commerces/today_deals?special_feed=true">오늘의딜</a>
                        <a className="layout-navigation-secondary__menu__item" href="/exhibitions/2100?special_feed=true">
                            설연휴특가
                            <IconNew />
                        </a>
                        <a className="layout-navigation-secondary__menu__item" href="/exhibitions/2085?special_feed=true">
                            캠핑용품핫딜
                            <IconNew />
                        </a>
                        <a className="layout-navigation-secondary__menu__item" href="/exhibitions/1433?special_feed=true">리퍼마켓</a>
                        <a className="layout-navigation-secondary__menu__item" href="/exhibitions/1763?special_feed=true">지정일배송</a>
                        <a className="layout-navigation-secondary__menu__item" href="/productions/premium">
                            프리미엄
                            <IconNew />
                        </a>
                        <a className="layout-navigation-secondary__menu__item" href="/exhibitions?showroom=false">기획전</a>
                    </nav>
                    <div className="layout-navigation-app-download layout-navigation__bar__app-download">
                        <a className="layout-navigation-app-download__link" href="/3d_intro">
                            <svg className="icon" width="20" height="20" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#35C5F0" d="M16.41 0H3.59A3.59 3.59 0 0 0 0 3.59v12.82A3.59 3.59 0 0 0 3.59 20h12.82A3.59 3.59 0 0 0 20 16.41V3.59A3.59 3.59 0 0 0 16.41 0"></path>
                                    <path fill="#FFF" d="M14.75 10.34c-.74 0-1.33-.6-1.33-1.34 0-.74.6-1.34 1.33-1.34s1.32.6 1.32 1.34c0 .74-.59 1.34-1.32 1.34zm-1 3.53H6.12V8.75l3.82-2.7 2.2 1.55a3.01 3.01 0 0 0-.35 1.4 3 3 0 0 0 1.98 2.83v2.04zm1-7.87c-.34 0-.66.06-.97.17l-3.17-2.24a1.18 1.18 0 0 0-1.35 0L4.5 7.28a1.2 1.2 0 0 0-.51.98v6.54c0 .66.53 1.2 1.19 1.2h9.5a1.2 1.2 0 0 0 1.18-1.2v-3.02A3 3 0 0 0 17.7 9c0-1.65-1.32-3-2.96-3z"></path>
                                </g>
                            </svg>
                            3D인테리어
                            <svg className="icon-beta" width="30" height="14" preserveAspectRatio="xMidYMid meet">
                                <g fill="none" fillRule="evenodd">
                                    <rect width="30" height="14" fill="#757575" rx="7"></rect>
                                    <path fill="#FFF" fillRule="nonzero" d="M7.1 10.59c1.52 0 2.24-.82 2.24-1.96 0-1-.53-1.48-1.33-1.64v-.03c.76-.26 1.05-.78 1.05-1.5 0-1.09-.64-1.73-2.12-1.73H4.69v6.86h2.4zm-.37-3.94h-.9V4.64h.95c.74 0 1.13.25 1.13.99 0 .78-.5 1.02-1.18 1.02zm.2 3.02h-1.1v-2.2h1.04c.82 0 1.26.3 1.26 1.09 0 .75-.42 1.11-1.2 1.11zm7.65.92v-.97h-2.92V7.54h2.22v-.96h-2.22V4.7h2.86v-.97h-4.01v6.86h4.07zm3.8 0V4.7h1.83v-.97h-4.83v.97h1.85v5.89h1.15zm2.92 0l.58-1.74h2.39l.58 1.74h1.2l-2.3-6.86h-1.18l-2.34 6.86h1.07zm2.68-2.66h-1.83l.9-2.74h.03l.9 2.74z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Gnb;