const TodayDeal = () => {
    return (
        <section className="container store-index-section store-index-today-deal-list">
            <header className="store-index-today-deal-list__header">
                <h1 className="store-index-today-deal-list__title">오늘의딜</h1>
                <a
                className="store-index-today-deal-list__detail-link"
                href="/commerces/today_deals?affect_type=StoreHomeDeal&amp;affect_id=5"
                >더보기</a
                >
            </header>
            <div className="store-index-today-deal-list__content row">
                <div className="col-12 col-md-4 col-lg-3">
                <div className="today-deal-item--wrapper">
                    <article className="today-deal-item">
                    <a
                        className="today-deal-item__overlay"
                        href="/productions/145716/selling?affect_type=StoreHomeDeal&amp;affect_id=1"
                    ></a>
                    <div className="today-deal-item__image">
                        <div className="today-deal-item__image__item">
                        <div className="production-item-image">
                            <img
                            className="image"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&amp;w=360&amp;h=360&amp;c=c&amp;q=0.8"
                            srcSet="
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;q=0.8   1.5x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;q=0.8   2x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162679699600663118.jpeg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;q=0.8 3x
                            "
                            alt=""
                            /><button
                            className="production-item-scrap-badge production-item-image__scrap-badge"
                            type="button"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="inactive-icon"
                            >
                                <defs>
                                <path
                                    id="scrap-icon-2-b"
                                    d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"
                                ></path>
                                <filter
                                    id="scrap-icon-2-a"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feOffset
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feComposite
                                    in="shadowBlurOuter1"
                                    in2="SourceAlpha"
                                    operator="out"
                                    result="shadowBlurOuter1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowBlurOuter1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                                    ></feColorMatrix>
                                </filter>
                                <filter
                                    id="scrap-icon-2-c"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feOffset
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"
                                    ></feOffset>
                                    <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                    ></feColorMatrix>
                                </filter>
                                </defs>
                                <g
                                fill="none"
                                fillRule="nonzero"
                                transform="matrix(1 0 0 -1 0 24)"
                                >
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-2-a)"
                                    href="#scrap-icon-2-b"
                                ></use>
                                <use
                                    fill="#FFF"
                                    fillOpacity=".4"
                                    href="#scrap-icon-2-b"
                                ></use>
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-2-c)"
                                    href="#scrap-icon-2-b"
                                ></use>
                                <path
                                    stroke="#FFF"
                                    d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"
                                ></path>
                                </g>
                            </svg>
                            <svg
                                className="active-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="#35C5F0"
                                fillRule="nonzero"
                                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
                                ></path>
                            </svg>
                            </button>
                            <div className="production-item-image__dark-overlay"></div>
                            <div className="today-deal-item__timer"><div>6일 남음</div></div>
                        </div>
                        </div>
                    </div>
                    <div className="today-deal-item__content">
                        <div className="today-deal-item__content--wrap">
                        <h1 className="today-deal-item__header">
                            <span className="today-deal-item__header__brand">라뽐므 </span><span className="today-deal-item__header__name">노르빅 호텔식 차렵침구세트 S/Q/K 3Color 시즌오프</span>
                        </h1>
                        <div className="today-deal-item__stats-mobile">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path>
                            </svg>
                            <strong className="avg">4.7</strong> 리뷰 2,421
                            </p>
                        </div>
                        <span className="production-item-price"><span className="production-item-price__rate">59<span className="percentage">% </span></span><span className="production-item-price__price">33,900</span></span>
                        <div className="today-deal-item__stats-pc">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.7</strong> 리뷰 2,421
                            </p>
                        </div>
                        <span className="production-item-badge-list"
                            ><svg
                            className="icon"
                            aria-label="무료배송"
                            width="47"
                            height="20"
                            viewBox="0 0 47 20"
                            preserveAspectRatio="xMidYMid meet"
                            >
                            <g fill="none" fillRule="evenodd">
                                <rect
                                width="47"
                                height="20"
                                fill="#000"
                                fillOpacity=".07"
                                fillRule="nonzero"
                                rx="4"
                                ></rect>
                                <path
                                fill="#757575"
                                d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
                                ></path>
                            </g></svg>
                            </span>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                <div className="today-deal-item--wrapper">
                    <article className="today-deal-item">
                    <a
                        className="today-deal-item__overlay"
                        href="/productions/314121/selling?affect_type=StoreHomeDeal&amp;affect_id=2"
                    ></a>
                    <div className="today-deal-item__image">
                        <div className="today-deal-item__image__item">
                        <div className="production-item-image">
                            <img
                            className="image"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&amp;w=360&amp;h=360&amp;c=c&amp;q=0.8"
                            srcSet="
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;q=0.8   1.5x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;q=0.8   2x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159797179944305943.jpg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;q=0.8 3x
                            "
                            alt=""
                            /><button
                            className="production-item-scrap-badge production-item-image__scrap-badge"
                            type="button"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="inactive-icon"
                            >
                                <defs>
                                <path
                                    id="scrap-icon-3-b"
                                    d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"
                                ></path>
                                <filter
                                    id="scrap-icon-3-a"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feOffset
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feComposite
                                    in="shadowBlurOuter1"
                                    in2="SourceAlpha"
                                    operator="out"
                                    result="shadowBlurOuter1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowBlurOuter1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                                    ></feColorMatrix>
                                </filter>
                                <filter
                                    id="scrap-icon-3-c"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feOffset
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"
                                    ></feOffset>
                                    <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                    ></feColorMatrix>
                                </filter>
                                </defs>
                                <g
                                fill="none"
                                fillRule="nonzero"
                                transform="matrix(1 0 0 -1 0 24)"
                                >
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-3-a)"
                                    href="#scrap-icon-3-b"
                                ></use>
                                <use
                                    fill="#FFF"
                                    fillOpacity=".4"
                                    href="#scrap-icon-3-b"
                                ></use>
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-3-c)"
                                    href="#scrap-icon-3-b"
                                ></use>
                                <path
                                    stroke="#FFF"
                                    d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"
                                ></path>
                                </g>
                            </svg>
                            <svg
                                className="active-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="#35C5F0"
                                fillRule="nonzero"
                                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
                                ></path>
                            </svg>
                            </button>
                            <div className="production-item-image__dark-overlay"></div>
                            <div className="today-deal-item__timer"><div>6일 남음</div></div>
                        </div>
                        </div>
                    </div>
                    <div className="today-deal-item__content">
                        <div className="today-deal-item__content--wrap">
                        <h1 className="today-deal-item__header">
                            <span className="today-deal-item__header__brand">홈앤하우스 </span><span className="today-deal-item__header__name">멀티코팅 바지걸이 20개</span>
                        </h1>
                        <div className="today-deal-item__stats-mobile">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.7</strong> 리뷰 26,400
                            </p>
                        </div>
                        <span className="production-item-price"><span className="production-item-price__rate">43<span className="percentage">% </span></span><span className="production-item-price__price">9,500</span></span>
                        <div className="today-deal-item__stats-pc">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.7</strong> 리뷰 26,400
                            </p>
                        </div>
                        <span className="production-item-badge-list"
                            ><svg
                            className="icon"
                            aria-label="무료배송"
                            width="47"
                            height="20"
                            viewBox="0 0 47 20"
                            preserveAspectRatio="xMidYMid meet"
                            >
                            <g fill="none" fillRule="evenodd">
                                <rect
                                width="47"
                                height="20"
                                fill="#000"
                                fillOpacity=".07"
                                fillRule="nonzero"
                                rx="4"
                                ></rect>
                                <path
                                fill="#757575"
                                d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"
                                ></path>
                            </g></svg></span>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                <div className="today-deal-item--wrapper">
                    <article className="today-deal-item">
                    <a
                        className="today-deal-item__overlay"
                        href="/productions/976295/selling?affect_type=StoreHomeDeal&amp;affect_id=3"
                    ></a>
                    <div className="today-deal-item__image">
                        <div className="today-deal-item__image__item">
                        <div className="production-item-image">
                            <img
                            className="image"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&amp;w=360&amp;h=360&amp;c=c&amp;q=0.8"
                            srcSet="
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;q=0.8   1.5x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;q=0.8   2x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163460876051361692.jpg?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;q=0.8 3x
                            "
                            alt=""
                            /><button
                            className="production-item-scrap-badge production-item-image__scrap-badge"
                            type="button"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="inactive-icon"
                            >
                                <defs>
                                <path
                                    id="scrap-icon-4-b"
                                    d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"
                                ></path>
                                <filter
                                    id="scrap-icon-4-a"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feOffset
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feComposite
                                    in="shadowBlurOuter1"
                                    in2="SourceAlpha"
                                    operator="out"
                                    result="shadowBlurOuter1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowBlurOuter1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                                    ></feColorMatrix>
                                </filter>
                                <filter
                                    id="scrap-icon-4-c"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feOffset
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"
                                    ></feOffset>
                                    <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                    ></feColorMatrix>
                                </filter>
                                </defs>
                                <g
                                fill="none"
                                fillRule="nonzero"
                                transform="matrix(1 0 0 -1 0 24)"
                                >
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-4-a)"
                                    href="#scrap-icon-4-b"
                                ></use>
                                <use
                                    fill="#FFF"
                                    fillOpacity=".4"
                                    href="#scrap-icon-4-b"
                                ></use>
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-4-c)"
                                    href="#scrap-icon-4-b"
                                ></use>
                                <path
                                    stroke="#FFF"
                                    d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"
                                ></path>
                                </g></svg><svg
                                className="active-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="#35C5F0"
                                fillRule="nonzero"
                                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
                                ></path>
                            </svg>
                            </button>
                            <div className="production-item-image__dark-overlay"></div>
                            <div className="today-deal-item__timer"><div>6일 남음</div></div>
                        </div>
                        </div>
                    </div>
                    <div className="today-deal-item__content">
                        <div className="today-deal-item__content--wrap">
                        <h1 className="today-deal-item__header">
                            <span className="today-deal-item__header__brand">집드리 </span><span className="today-deal-item__header__name">[해외] 모닥불 불멍 분위기 대용량 무드 가습기 200ml</span>
                        </h1>
                        <div className="today-deal-item__stats-mobile">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.2</strong> 리뷰 170
                            </p>
                        </div>
                        <span className="production-item-price"
                            ><span className="production-item-price__rate">57<span className="percentage">% </span></span><span className="production-item-price__price">27,900</span></span>
                        <div className="today-deal-item__stats-pc">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.2</strong> 리뷰 170
                            </p>
                        </div>
                        <span className="production-item-badge-list"
                            ><svg
                            className="icon"
                            aria-label="해외직구"
                            width="47"
                            height="20"
                            viewBox="0 0 47 20"
                            preserveAspectRatio="xMidYMid meet"
                            >
                            <g fill="none" fillRule="evenodd">
                                <rect width="47" height="20" fill="#EDEDED" rx="4"></rect>
                                <path
                                fill="#000"
                                fillOpacity=".54"
                                fillRule="nonzero"
                                d="M13.349 14.801h-1.221V9.994h-.814v4.356h-1.199V5.176h1.199V8.96h.814V5h1.221v9.801zm-3.85-4.037c0 1.232-.869 2.035-2.145 2.035-1.265 0-2.145-.869-2.145-2.035 0-1.243.891-2.035 2.145-2.035 1.276 0 2.145.803 2.145 2.035zM5 8.366V7.343h4.675v1.023H5zm3.344 2.398c0-.605-.418-1.023-.99-1.023-.561 0-.979.418-.979 1.023 0 .616.418 1.023.979 1.023.572 0 .99-.429.99-1.023zM6.067 6.782V5.759h2.64v1.023h-2.64zm14.861 5.797c-1.694.209-4.29.341-6.127.341a34.003 34.003 0 0 1-.187-1.034c.825 0 1.65 0 2.442-.022v-1.562c-1.177-.209-2.002-1.045-2.002-2.233 0-1.364 1.122-2.387 2.629-2.387s2.662 1.012 2.662 2.387c0 1.166-.825 1.991-1.991 2.222v1.518c.913-.055 1.76-.121 2.486-.22l.088.99zM22.666 5v9.801h-1.298V5h1.298zm-3.597 3.069c0-.825-.638-1.309-1.386-1.309-.737 0-1.364.517-1.364 1.309 0 .759.638 1.221 1.364 1.221.726 0 1.386-.462 1.386-1.221zm5.412-1.353V5.693h5.17v1.023H27.77c.099 1.408 1.1 2.343 2.2 2.695l-.715 1.012c-.748-.286-1.705-1.045-2.134-1.947-.275.957-1.32 1.87-2.277 2.2l-.759-1.001c1.386-.495 2.31-1.529 2.365-2.959h-1.969zm1.034 4.477h6.644v3.619h-1.298v-2.607h-5.346v-1.012zm6.633-.484h-1.287V5.011h1.287v5.698zm9.13-5.181c0 1.584-.099 3.058-.319 4.18h1.452v1.023h-3.806v4.07h-1.287v-4.07h-3.762V9.708h6.182c.176-.847.264-1.947.264-3.146h-5.357V5.528h6.633z"
                                ></path>
                            </g></svg></span>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                <div className="today-deal-item--wrapper">
                    <article className="today-deal-item">
                    <a
                        className="today-deal-item__overlay"
                        href="/productions/1180891/selling?affect_type=StoreHomeDeal&amp;affect_id=4"
                    ></a>
                    <div className="today-deal-item__image">
                        <div className="today-deal-item__image__item">
                        <div className="production-item-image">
                            <img
                            className="image"
                            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/164302963165929655.png?gif=1&amp;w=360&amp;h=360&amp;c=c&amp;q=0.8"
                            srcSet="
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/164302963165929655.png?gif=1&amp;w=640&amp;h=640&amp;c=c&amp;q=0.8   1.5x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/164302963165929655.png?gif=1&amp;w=720&amp;h=720&amp;c=c&amp;q=0.8   2x,
                                https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/164302963165929655.png?gif=1&amp;w=1080&amp;h=1080&amp;c=c&amp;q=0.8 3x
                            "
                            alt=""
                            /><button
                            className="production-item-scrap-badge production-item-image__scrap-badge"
                            type="button"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="inactive-icon"
                            >
                                <defs>
                                <path
                                    id="scrap-icon-5-b"
                                    d="M12.472 6.93l7.056-3.811A1 1 0 0 1 21 4.002v15.496c0 .83-.672 1.502-1.5 1.502h-15c-.828 0-1.5-.673-1.5-1.502V4.002a1 1 0 0 1 1.472-.883l7.056 3.811a.999.999 0 0 0 .944 0z"
                                ></path>
                                <filter
                                    id="scrap-icon-5-a"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feOffset
                                    in="SourceAlpha"
                                    result="shadowOffsetOuter1"
                                    ></feOffset>
                                    <feGaussianBlur
                                    in="shadowOffsetOuter1"
                                    result="shadowBlurOuter1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feComposite
                                    in="shadowBlurOuter1"
                                    in2="SourceAlpha"
                                    operator="out"
                                    result="shadowBlurOuter1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowBlurOuter1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
                                    ></feColorMatrix>
                                </filter>
                                <filter
                                    id="scrap-icon-5-c"
                                    width="150%"
                                    height="150%"
                                    x="-25%"
                                    y="-25%"
                                    filterUnits="objectBoundingBox"
                                >
                                    <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1.5"
                                    ></feGaussianBlur>
                                    <feOffset
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"
                                    ></feOffset>
                                    <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"
                                    ></feComposite>
                                    <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                                    ></feColorMatrix>
                                </filter>
                                </defs>
                                <g
                                fill="none"
                                fillRule="nonzero"
                                transform="matrix(1 0 0 -1 0 24)"
                                >
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-5-a)"
                                    href="#scrap-icon-5-b"
                                ></use>
                                <use
                                    fill="#FFF"
                                    fillOpacity=".4"
                                    href="#scrap-icon-5-b"
                                ></use>
                                <use
                                    fill="#000"
                                    filter="url(#scrap-icon-5-c)"
                                    href="#scrap-icon-5-b"
                                ></use>
                                <path
                                    stroke="#FFF"
                                    d="M12.71 7.37h-.002a1.5 1.5 0 0 1-1.417 0L4.236 3.56a.499.499 0 0 0-.736.442v15.496c0 .553.448 1.002 1 1.002h15c.552 0 1-.449 1-1.002V4.002a.499.499 0 0 0-.734-.443l-7.057 3.81zm-.475-.88h-.001z"
                                ></path>
                                </g></svg><svg
                                className="active-icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="#35C5F0"
                                fillRule="nonzero"
                                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
                                ></path>
                            </svg>
                            </button>
                            <div className="production-item-image__dark-overlay"></div>
                            <div className="today-deal-item__timer"><div>6일 남음</div></div>
                        </div>
                        </div>
                    </div>
                    <div className="today-deal-item__content">
                        <div className="today-deal-item__content--wrap">
                        <h1 className="today-deal-item__header">
                            <span className="today-deal-item__header__brand">앙플랜트 </span><span className="today-deal-item__header__name">키우기 쉬운 인테리어 식물+독일토분 set 모음전 (소형/중형)</span>
                        </h1>
                        <div className="today-deal-item__stats-mobile">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.6</strong> 리뷰 572
                            </p>
                        </div>
                        <span className="production-item-price">
                            <span className="production-item-price__rate">29<span className="percentage">% </span></span><span className="production-item-price__price">27,360 외</span></span>
                        <div className="today-deal-item__stats-pc">
                            <p className="production-item-stats production-item-stats--review">
                            <svg
                                className="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
                                ></path></svg><strong className="avg">4.6</strong> 리뷰 572
                            </p>
                        </div>
                        <span className="production-item-badge-list"></span>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
            </div>
            <a
                className="button button--color-gray-7 button--size-45 button--shape-4 store-index-today-deal-list__more-btn"
                href="/commerces/today_deals?affect_type=StoreHomeDeal&amp;affect_id=5"
                >오늘의딜 더보기<svg
                className="right-icon"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                >
                <path d="M2.5 8.2L5.63 5 2.5 1.8l.94-.97L7.5 5 3.44 9.17z"></path></svg></a>
        </section>
    )
};
export default TodayDeal;