import React from "react";
import { Button } from "@components/basic";
import { useNavigate } from "react-router-dom";
import Banner from "../../../../../public/images/banner_eyes_img.png"

import "./MainBanner.scss";

const MainBanner = () => {
	const navigate = useNavigate();
	
	const handleNavigateArtilces = () => {
		navigate('/articles');
	}

    return (
        <section className="banner">
			<div className="banner__content">
				<div className="banner__row banner__row_eyes">
					<img src={Banner} alt="Баннер неокайдан"/>
				</div>
				<div className="banner__row banner__row_upper">
					<span className="banner__item">
						Братство любителей взрослой манги
						<br /><span className="banner__item_comforter">и темной материи</span>
					</span>
					<h1 className="banner__item_title">неокайдан</h1>
				</div>
				<div className="banner__row banner__row_lower">
					<Button type="button" onClick={handleNavigateArtilces}>К статьям</Button>
					<span>Добро пожаловать <strong>домой</strong></span>
				</div>
			</div>
			<span className="separator__line"/>
        </section>
    );
};

export default MainBanner;
