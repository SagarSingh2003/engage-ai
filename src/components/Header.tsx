import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';


const Header = () => {

  return (
    <header className="sticky z-50 max-clumd:z-0  max-cmd:ml-[270px] max-cllmd:ml-[50px] max-csm:ml-[20px] max-csm:ml-[100px] mt-[10px]">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto ">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-800">Snapshot</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 flex-grow justify-end max-w-2xl ml-4">
          <SearchBar />
          <ProfileButton />
        </div>

      </div>

    </header>
  );
};

export default Header;