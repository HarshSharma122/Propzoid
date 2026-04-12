import Aside from "./_components/sidebar/Aside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Aside />
      <div className="lg:ml-55 p-2">{children}</div>
    </div>
  );
}
