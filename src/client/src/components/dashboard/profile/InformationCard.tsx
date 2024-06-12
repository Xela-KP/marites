import { Card, Label } from 'flowbite-react';

import type { User } from '../../../types/user';

export const InformationCard = ({ user }: { user: User }) => {
    const { about, createdAt } = user;
    const date = new Date(createdAt);
    const formattedDate = `${
        date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    }-${
        date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    }-${date.getFullYear()}`;
    return (
        <Card>
            <Label className="text-2xl">General Information</Label>
            <div>
                <Label className="text-md">About me</Label>
                <p className="text-gray-500 max-w-lg">{about}</p>
            </div>
            <div className="flex flex-col">
                <Label className="text-gray-600">Join Date</Label>
                <Label className="text-md">{formattedDate}</Label>
            </div>
        </Card>
    );
};
