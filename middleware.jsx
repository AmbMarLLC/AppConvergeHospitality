export { default } from "next-auth/middleware";

// This will protect any page listed below from unauthorized access.
export const config = { matcher: ["/dashboard", "/dashboardCorporate"] };
