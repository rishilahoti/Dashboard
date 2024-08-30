import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Nav from "./components/Nav";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WhatBytes",
	description: "Student Dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lexend.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Nav />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
