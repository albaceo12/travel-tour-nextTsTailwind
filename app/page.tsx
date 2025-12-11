// app/page.tsx
// ------------------------------------------
// This file replaces the old App.jsx/App.js file and serves as the main Home Page.
// ------------------------------------------

import Home from "@/Components/Home/Home";
import Main from "@/Components/Main/Main";
// 💡 Note: We use '@/' to import components, which usually refers to the root folder.

export default function HomePage() {
  return (
    <>
      <Home />
      <Main />
    </>
  );
}
