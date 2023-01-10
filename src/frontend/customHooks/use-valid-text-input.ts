import { ChangeEvent, useState } from "react";

type InputData = { value: string; validity: boolean };
type InputChanger = (event: ChangeEvent<HTMLInputElement>) => void;

export default function useValidTextInput(initialValue: string, function_checkValidity: (input: string) => boolean): [InputData, InputChanger] {
	const [input, setInput] = useState({ value: initialValue, validity: function_checkValidity(initialValue) });

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setInput({
			value,
			validity: function_checkValidity(value),
		});
	};

	return [input, onInputChange];
}
