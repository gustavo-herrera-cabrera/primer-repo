import {
  Button,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

export const Revientometro = () => {
	return (
		<>
			<Stack spacing={2}>
				<h1>Revientómetro</h1>
				<TextField label="¿A quén reventar?" />
				<br />
				<Typography variant="h5">
					Intensidad de la reventación:
				</Typography>
				<Stack direction="row" spacing={1}>
					<Typography variant="h6">1%</Typography>
					<Slider defaultValue={50} min={1} max={100} step={1} valueLabelDisplay="auto"/>
					<Typography variant="h6">100%</Typography>
				</Stack>
				<Button variant="contained">Destuir</Button>
			</Stack>
		</>
	);
};
