import {ReactComponent as menu} from '../images/icons/menu.svg';
import {ReactComponent as logo} from '../images/icons/logo.svg';

const Header = () => {
    return (
        <div class="layout-navigation-primary__content">
            <div class="layout-navigation-primary__leftmost">
                <button class="layout-navigation-bar-icon layout-navigation-bar-drawer-button" title="메뉴" aria-label="메뉴" type="button">
                    <menu />
                </button>
            </div>
        <div class="layout-navigation-primary__left">
            <a class="layout-navigation-logo layout-navigation__bar__logo" aria-label="오늘의집" href="/">
                <logo />
            </a>
        </div>
        <nav class="layout-navigation-primary__menu">
            <a class="layout-navigation-primary__menu__item" href="/">커뮤니티</a>
            <a class="layout-navigation-primary__menu__item layout-navigation-primary__menu__item--active layout-navigation-primary__menu__item--open" href="/store">스토어</a>
            <a class="layout-navigation-primary__menu__item" href="/experts">인테리어시공</a>
        </nav>
        <div class="layout-navigation-primary__right">
            <div class="layout-navigation-bar-search">
                <div class="layout-navigation-search" id="id-1">
                    <div class="layout-navigation-search__header">
                        <div id="id-1-combobox" class="layout-navigation-search__combobox" role="combobox" aria-haspopup="listbox" aria-expanded="false">
                            <div class="layout-navigation-search__input">
                                <input type="text" class="layout-navigation-search__input__text" value="" autocomplete="off" size="1" id="id-1-input" aria-autocomplete="list" placeholder="스토어 검색" aria-label="스토어 검색">
                                <svg class="layout-navigation-search__input__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" preserveAspectRatio="xMidYMid meet">
                                    <path d="M22 22l-5-5"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="layout-navigation-bar-icon layout-navigation-bar-search-button" title="검색" aria-label="검색" type="button">
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" preserveAspectRatio="xMidYMid meet">
                    <path d="M22 22l-5-5"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                </svg>
            </button>
            <a class="layout-navigation-bar-icon" title="장바구니" aria-label="장바구니" href="/cart">
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linejoin="round" stroke-width="2" preserveAspectRatio="xMidYMid meet">
                    <path stroke-linecap="round" d="M4 5h18l-2.6 10.5a2 2 0 0 1-2 1.5H8.6a2 2 0 0 1-2-1.5L4 5zm4 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0zm7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0z"></path>
                    <path d="M1 2h3v3"></path>
                </svg>
            </a>
            <div class="layout-navigation-bar-login">
                <a class="layout-navigation-bar-login__item" href="/users/sign_in?redirect_to=%2Fstore%3Futm_source%3Dbrand_google%26utm_medium%3Dcpc%26utm_campaign%3Dcommerce%26gclid%3DCj0KCQiAxc6PBhCEARIsAH8Hff0wpzcna3CukhayoUWqAtw8X4dcwADVwhqBWdZO_FyL2I8bbIaYFgMaAj6QEALw_wcB">로그인</a>
                <a class="layout-navigation-bar-login__item" href="/normal_users/new">회원가입</a>
                <a class="layout-navigation-bar-login__item layout-navigation-bar-login__item--xl" href="/customer_center">고객센터</a>
            </div>
            <div class="drop-down layout-navigation-bar-upload-button">
                <button class="layout-navigation-bar-upload-button__button" type="button">글쓰기
                    <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet">
                        <path fill="currentColor" fill-rule="evenodd" d="M2.87 4L1.33 5.5 8 12l6.67-6.5L13.13 4 8 9z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Header;