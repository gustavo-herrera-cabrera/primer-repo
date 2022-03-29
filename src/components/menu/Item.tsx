import { Button } from "@mui/material";
import React from "react";

type Props = {
	children?: any;
	icon?: any;
	title: string;
	onClick?: () => void;
	selected?: boolean;
};

export const Item = (props: Props) => {
	const { onClick, selected, icon, title } = props;

	const handleClick = () => onClick && onClick();

	return (
		<Button
			className="menu-item"
			variant={selected ? "contained" : "outlined"}
			onClick={handleClick}
			title={title}
		>
			{icon && icon}
			{title}
		</Button>
	);
};
