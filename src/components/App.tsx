import { Paper } from "@mui/material";
import "./style.scss";
import { Menu } from "./menu/Menu";
import { Item } from "./menu/Item";
import { PersonOutlined } from "@mui/icons-material";

export const App = () => {
	return (
		<>
			<Paper id="main" variant="elevation" elevation={6}>
				<Menu
					entries={[
						{
							title: "Te reviento 1",
							icon: <PersonOutlined />,
							onClick: () =>
								console.log("Kachigga, my nigga 1."),
						},
						{
							title: "te reviento 2",
							icon: <PersonOutlined />,
							onClick: () =>
								console.log("Kachigga, my nigga 2."),
						},
						{
							title: "te reviento 3",
							icon: <PersonOutlined />,
							onClick: () =>
								console.log("Kachigga, my nigga 3."),
						},
					]}
				/>
			</Paper>
		</>
	);
};
