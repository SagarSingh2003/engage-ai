import { IoPersonOutline } from 'react-icons/io5';

const ProfileButton = () => {
  return (
    <button className="w-[3.2rem] h-[3.2rem] max-cllmd:w-[2rem] max-cllmd:h-[2rem] bg-gray-200 rounded-lg max-cllmd:rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
      <IoPersonOutline className="text-lg text-gray-600" />
    </button>
  );
};

export default ProfileButton;