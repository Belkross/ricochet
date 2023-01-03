import { ChangeEvent, useState } from "react";

type FunctionReturn = [{ value: string; validity: boolean }, (event: ChangeEvent<HTMLInputElement>) => void];

export default function useValidTextInput(initialValue: string, function_checkValidity: (input: string) => boolean): FunctionReturn {
	const [input, setInput] = useState({ value: initialValue, validity: function_checkValidity(initialValue) });

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;

		setInput({
			value,
			validity: function_checkValidity(value),
		});
	};

	return [input, onInputChange];
}
