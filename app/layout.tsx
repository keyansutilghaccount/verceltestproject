import './ui/global.css';

import { inter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
      {/* Tailwind antialiased class which smooths out the font.  */}
    </html>
  );
}
