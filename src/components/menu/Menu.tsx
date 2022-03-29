import { useRef, useState } from "react";
import { Fab, Paper, Stack } from "@mui/material";
import "./style.scss";
import { ItemList } from "./ItemList";

type Props = {
	entries: Entry[];
};

export const Menu = ({ entries }: Props) => {
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
			square
		>
			<Stack
				spacing={2}
				direction="column-reverse"
				className="menu"
			>
				{/* Toggle button */}
				<Fab
					ref={menuButton}
					className="toggle-button"
					color="primary"
					onClick={toggleOpen}
					title={open ? "Cerrar" : "Abrir"}
				>
					{open ? "<" : ">"}
				</Fab>

				<ItemList entries={entries} />
			</Stack>
		</Paper>
	);
};
