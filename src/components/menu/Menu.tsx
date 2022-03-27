import React, { useRef, useState } from "react";
import { Fab, Paper, Stack } from "@mui/material";
import "./style.scss";

export const Menu = () => {
	const [open, setOpen] = useState(true);
	const menuContainer = useRef<HTMLDivElement>(null);
	const menuButton = useRef<HTMLButtonElement>(null);

	const toggleOpen = () => {
		if (
			menuContainer &&
			menuContainer.current &&
			menuButton &&
			menuButton.current
		) {
			if (open) {
				menuContainer.current.classList.add("close");
				menuContainer.current.classList.remove("open");
				menuButton.current.classList.add("close");
				menuButton.current.classList.remove("open");
			} else {
				menuContainer.current.classList.add("open");
				menuContainer.current.classList.remove("close");
				menuButton.current.classList.add("open");
				menuButton.current.classList.remove("close");
			}
			setOpen(!open);
		}
	};

	return (
		<Paper
			className="menu-container"
			ref={menuContainer}
			elevation={6}
		>
			<Stack
				spacing={2}
				direction="column-reverse"
				className="menu"
			>
				<Fab
					ref={menuButton}
					className="toggle-button"
					color="primary"
					onClick={toggleOpen}
				>
					{open ? "<" : ">"}
				</Fab>
			</Stack>
		</Paper>
	);
};
