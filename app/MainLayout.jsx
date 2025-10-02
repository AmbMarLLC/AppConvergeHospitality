"use client";

import { SessionProvider } from "@node_modules/next-auth/react";

// "children alway has to be small 'c'"
export const MainLayout = ({ children, session }) => {
  return (
    <html lang="en" className="h-full">
      <body>
        <SessionProvider session={session}>
          <main className="app max-w-[90%] px-4 leading-normal mb-12 mx-auto mt-0">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
};
