import React from 'react';

export interface profileProps {
    name: string;
    birthday: string;
};

export const Profile = (props: profileProps) => {
    return (
        <ul>
            <li>名前：{props.name}</li>
            <li>誕生日：{props.birthday}</li>
        </ul>
    )
};
