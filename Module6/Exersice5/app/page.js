import Image from "next/image";
import {ExampleComponent, ExampleComponent2} from "../components/ExampleComponent"
import {FullName} from "../components/Fullname"
import {ComplexComment, Comment} from "../components/ComplexComponent"
import Link from "next/link";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <a className="text-decoration: underline" href="./BigCats" >
        BigCats
        </a>

      </main>
    </div>
  );
}