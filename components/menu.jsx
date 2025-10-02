import React from "react";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <>
      <img src="/images/Logo.jpg" alt="Logo" className="w-[200px]" />
      <h2>Menu</h2>
      <hr className="my-2" />
      <a
        href="/incidentReporting/incidentForm"
        className="hover:text-[#5c9c45]"
      >
        Create new incident report
      </a>
      {/* <hr className="my-2" />
      <a href="/expenseReporting/dashboard" className="hover:text-[#5c9c45]">
        Create new expense report
      </a> */}
      <hr className="my-2" />
      {session?.user?.property === "Corporate Office" && (
        <>
          <a href="/newUser" className="hover:text-[#5c9c45]">
            Create new user
          </a>
          <hr className="my-2" />
        </>
      )}
    </>
  );
};

export default Menu;
