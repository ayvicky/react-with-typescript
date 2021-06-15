import React from 'react';

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    total?: number;
    fn?: () => void;
    fn2?: (bob: string) => string;
    obj?: {
        f1: string
    };
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({
    handleChange
}) => {
    const [count, setCount] = React.useState<number | null | undefined | string>(5);
    const [title, setTitle] = React.useState<TextNode>({text: 'hello'});
    const inputRef = React.useRef<HTMLInputElement>(null);
    const divRef = React.useRef<HTMLDivElement>(null);

    setCount('hello');
    return(
        <div ref={divRef}>
            <input ref={inputRef} onChange={e => {
                e.preventDefault();
            }}/>

        </div>
    )
}