import { Button } from "@mui/material";
import React from "react";

type Props = {
	iconUrl?: string;
	title: string;
	location: string;
	selected: boolean;
};

export const MenuItem = ({
	iconUrl,
	title,
	location,
	selected = false,
}: Props) => {
	const handleClick = () => {
		throw Error("#TODO#");
	};

	return (
		<Button
			variant={selected ? "contained" : "outlined"}
			onClick={handleClick}
		>
			{title}
		</Button>
	);
};
