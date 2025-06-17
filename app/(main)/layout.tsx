import SideBar from '@/components/SideBar';
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
      <body style={{ margin: 0, padding: 0 }}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideBar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}