import { Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC, createContext, useContext } from "react";
import { State } from "../../state";

interface AppProps {
	state: State;
}

export const StateContext = createContext<State | undefined>(undefined);
export const useAppState = () => {
	const state = useContext(StateContext);
	if (!state) {
		throw new Error("State not found");
	}
	return state;
};

const App: FC<AppProps> = observer(({ state }) => {
	return (
		<Container>
			<StateContext.Provider value={state}>
				<Typography variant="h1">Start hacking</Typography>
			</StateContext.Provider>
		</Container>
	);
});

export default App;
