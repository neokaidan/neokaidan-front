import React, {FC, ReactNode} from 'react'
import classnames from 'classnames';

import './Button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	id?: string;
	children: ReactNode;
	onClick: () => void;
	styled?: string;
}

const Button:FC<ButtonProps> = ({id, type, children, onClick, styled}) => {
	return (
		<button id={id} type={type} onClick={onClick} className={classnames('button', styled && styled)}>
			{children}
			<span className='button__separator' />
			<span className='button__press'/>
		</button>
	);
}

export default Button;