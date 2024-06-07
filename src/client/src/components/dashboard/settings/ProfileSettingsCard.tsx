import { Card, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { User } from '../../../types/user';

export default () => {
    const { currentUser } = useSelector((state: RootState) => state.user);
    const { username, profilePicture } = currentUser as User;
    return (
        <Card className="">
            <div className="w-64 p-3">
                <div className="mb-2 flex items-center justify-between">
                    <a href="#">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={profilePicture as string}
                            alt={username as string}
                        />
                    </a>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 dark:text-white mb-2">
                    <a href="#" className="hover:underline">
                        @{username}
                    </a>
                </p>
                <TextInput placeholder="Bio"></TextInput>
                <p className="mb-4 text-sm"></p>
                <ul className="flex text-sm">
                    <li className="me-2">
                        <a href="#" className="hover:underline">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                799
                            </span>
                            <span>Following</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                3,758
                            </span>
                            <span>Followers</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Card>
    );
};
