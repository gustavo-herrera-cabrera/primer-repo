import { Paper, Stack } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { Menu } from "./menu/Menu";

export const App = () => {
	return (
		<>
			{/* Roboto Font */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
			<Box width="100%" height="100%">
				<Menu />
			</Box>
		</>
	);
};
