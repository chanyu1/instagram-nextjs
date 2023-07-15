import Avatar from './Avatar';
import { User } from './model/user';

type Props = {
  user: User;
};

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-500 mt-8">About</p>
      <p className="font-bold text-sm text-neutral-500 mt-8">
        @Copyright INSTAGRAM from METAL
      </p>
    </>
  );
}
