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

export const TextField: React.FC<Props> = () => {
    return(
        <div>
            <input />
        </div>
    )
}