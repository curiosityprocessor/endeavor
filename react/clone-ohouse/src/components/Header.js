import {ReactComponent as Menu} from '../images/icons/menu.svg';
import {ReactComponent as IconLogo} from '../images/icons/logo.svg';
import {ReactComponent as IconSearch} from '../images/icons/search.svg';
import {ReactComponent as IconSearchStore} from '../images/icons/searchStore.svg';
import {ReactComponent as IconCart} from '../images/icons/cart.svg';
import {ReactComponent as IconWrite} from '../images/icons/write.svg';

const Header = () => {
    return (
        <div className="layout-navigation-primary__content">
            <div className="layout-navigation-primary__leftmost">
                <button className="layout-navigation-bar-icon layout-navigation-bar-drawer-button" title="메뉴" aria-label="메뉴" type="button">
                    <Menu />
                </button>
            </div>
            <div className="layout-navigation-primary__left">
                <a className="layout-navigation-logo layout-navigation__bar__logo" aria-label="오늘의집" href="/">
                    <IconLogo />
                </a>
            </div>
            <nav className="layout-navigation-primary__menu">
                <a className="layout-navigation-primary__menu__item" href="/">커뮤니티</a>
                <a className="layout-navigation-primary__menu__item layout-navigation-primary__menu__item--active layout-navigation-primary__menu__item--open" href="/store">스토어</a>
                <a className="layout-navigation-primary__menu__item" href="/experts">인테리어시공</a>
            </nav>
            <div className="layout-navigation-primary__right">
                <div className="layout-navigation-bar-search">
                    <div className="layout-navigation-search" id="id-1">
                        <div className="layout-navigation-search__header">
                            <div id="id-1-combobox" className="layout-navigation-search__combobox" role="combobox" aria-haspopup="listbox" aria-expanded="false">
                                <div className="layout-navigation-search__input">
                                    <input type="text" className="layout-navigation-search__input__text" defaultValue="" autoComplete="off" size="1" id="id-1-input" aria-autocomplete="list" placeholder="스토어 검색" aria-label="스토어 검색" />
                                    <IconSearchStore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="layout-navigation-bar-icon layout-navigation-bar-search-button" title="검색" aria-label="검색" type="button">
                    <IconSearch />
                </button>
                <a className="layout-navigation-bar-icon" title="장바구니" aria-label="장바구니" href="/cart">
                    <IconCart />
                </a>
                <div className="layout-navigation-bar-login">
                    <a className="layout-navigation-bar-login__item" href="/users/sign_in?redirect_to=%2Fstore%3Futm_source%3Dbrand_google%26utm_medium%3Dcpc%26utm_campaign%3Dcommerce%26gclid%3DCj0KCQiAxc6PBhCEARIsAH8Hff0wpzcna3CukhayoUWqAtw8X4dcwADVwhqBWdZO_FyL2I8bbIaYFgMaAj6QEALw_wcB">로그인</a>
                    <a className="layout-navigation-bar-login__item" href="/normal_users/new">회원가입</a>
                    <a className="layout-navigation-bar-login__item layout-navigation-bar-login__item--xl" href="/customer_center">고객센터</a>
                </div>
                <div className="drop-down layout-navigation-bar-upload-button">
                    <button className="layout-navigation-bar-upload-button__button" type="button">글쓰기
                        <IconWrite />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Header;