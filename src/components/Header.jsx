"use client";
import { React, useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";
import Link from "next/link";

const header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sing In", url: "/login" },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`search/${keyword}`);
      setKeyword('');
    }
  };
  return (
    <div className="flex items-center gap-3 h-20 p-5">
      <div className="bg-slate-400 rounded-lg p-3 text-2xl font-bold">
      <Link href={"/"}>Movie App</Link>
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
        value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama Yap..."
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default header;
