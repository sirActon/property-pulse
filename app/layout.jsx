import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find your dream rental property",
  keywords:
    "rental, property, real estate, apartment, house, home, condo, townhouse, duplex, triplex, fourplex, single family, multi family, studio, loft, penthouse, villa, mansion, cottage, cabin, bungalow, flat, unit, room, share, sublet, lease, rent, lease, sublease, sublet, subletting, subleasing",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
