import { Wrapper, Input, Icon } from "../styledComponent/SearchBox.styled";

export const SearchBox = ({ value, onChange }) => {
	return (
		<Wrapper>
			<Icon />
			<Input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</Wrapper>
	);
};
