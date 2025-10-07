import React from "react";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none mb-4 lg:mb-0">
      <img
        src="/images/Logo.jpg"
        alt="Logo"
        className="w-32 sm:w-40 lg:w-[200px] mx-auto lg:mx-0 mb-4"
      />
      <h2 className="text-center lg:text-left mb-3 lg:mb-2">Menu</h2>
      <hr className="my-2 lg:my-2" />
      <div className="space-y-3 lg:space-y-2">
        <a
          href="/incidentReporting/incidentForm"
          className="block text-center lg:text-left hover:text-[#5c9c45] transition-colors duration-200 text-sm lg:text-base py-2 lg:py-0"
        >
          Create new incident report
        </a>
        {/* <hr className="my-2" />
        <a href="/expenseReporting/dashboard" className="hover:text-[#5c9c45]">
          Create new expense report
        </a> */}
        <hr className="my-2 lg:my-2" />
        {session?.user?.property === "Corporate Office" && (
          <>
            <a
              href="/newUser"
              className="block text-center lg:text-left hover:text-[#5c9c45] transition-colors duration-200 text-sm lg:text-base py-2 lg:py-0"
            >
              Create new user
            </a>
            <hr className="my-2 lg:my-2" />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
