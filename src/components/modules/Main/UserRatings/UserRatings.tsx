import React from 'react'
import { Button } from '@components/basic';
import {v4 as uuid} from 'uuid';
import { users } from '../__mocks__';

import "./UserRatings.scss";
import UserCard from '../UserCard/UserCard';

const UserRatings = () => {
	const handleClick = () => {
		console.log("Сделать нормальный редирект, когда появится блок по карточкам")
	}

	return (
		<section className="ratings">
			<div className="ratings__helmet">
				<h2 className="ratings__helmet_title">Топ пользователей</h2>
				<span className="ratings__helmet_type">По количеству карточек</span>
			</div>
			<ul className="ratings__items">
				{users.map(user => <li key={uuid()}><UserCard {...user}/></li>)}
			</ul>
			<div className="ratings__about">
				<span>Собирай карточки и твое имя<br/>обязательно <strong>появится в топе!</strong></span>
				<Button type="button" onClick={handleClick}>О карточках</Button>
			</div>
		</section>	
	);
}

export default UserRatings;