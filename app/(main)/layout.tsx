import '../globals.css';

export const metadata = {
  title: 'Desilicious - Authentic Desi Cuisine',
  description: 'Authentic desi cuisine with traditional biryani, kababs, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}