import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import i18n from "./i18n";
import type { MetaFunction } from "remix";

import styles from "./tailwind.css";
import sheetstyle from "../styles/sheet.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://pro.fontawesome.com/releases/v5.15.4/css/all.css",
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/react-spring-bottom-sheet/dist/style.css",
    },
    { rel: "stylesheet", href: sheetstyle },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  //i18n.changeLanguage("hi");
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body data-theme="default">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
