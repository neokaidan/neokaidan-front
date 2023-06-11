import React, {FC} from 'react';
import "./UserCard.scss";

type UserCardProps = {
	name: string;
	position: number;
	cards: string;
}

const UserCard:FC<UserCardProps> = ({name, position, cards}) => {
	return (
		<div className='user_card'>
			<span className='user_card__position'>{position}</span>
			{name}
			<span className='user_card__cards'>{cards}</span>
		</div>
	);
}

export default UserCard;