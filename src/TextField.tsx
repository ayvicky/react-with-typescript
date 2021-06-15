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
    person: Person

}

export const TextField: React.FC<Props> = ({
    person,
    text
}) => {
    const [count, setCount] = React.useState<number | null | undefined | string>(5);
    const [title, setTitle] = React.useState<{text: string}>(5);
    return(
        <div>
            <input />
        </div>
    )
}