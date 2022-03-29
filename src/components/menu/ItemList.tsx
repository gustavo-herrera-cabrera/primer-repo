import { Grid } from "@mui/material";
import {
	useMemo,
	useRef,
	useState,
} from "react";
import { Item } from "./Item";

type Props = { entries: Entry[] };

interface ItemCreator {
	entries: Entry[];
	selected: number;
	setSelected: (i: number) => void;
}

interface ClickHandler {
	i: number;
	setSelected: (i: number) => void;
	definedAction?: () => void;
}

const createItems = ({
	entries,
	selected,
	setSelected,
}: ItemCreator) =>
	entries.map((e, i) => (
		<Item
			title={e.title}
			icon={e.icon}
			key={e.title}
			onClick={() =>
				handleClick({
					i,
					setSelected,
					definedAction: e.onClick,
				})
			}
			selected={selected === i}
		/>
	));

const handleClick = ({
	i,
	setSelected,
	definedAction,
}: ClickHandler) => {
	setSelected(i);
	definedAction && definedAction();
};

export const ItemList = ({ entries }: Props) => {
	const [selected, setSelected] = useState(0);
	const elements = useMemo(
		() =>
			createItems({
				entries,
				selected,
				setSelected,
			}),
		[entries, selected]
	);
	const isInitialized = useRef(false);

	return (
		<Grid
			direction={"column"}
			justifyContent="center"
			alignItems="stretch"
			spacing={0}
			container
		>
			{elements}
		</Grid>
	);
};
