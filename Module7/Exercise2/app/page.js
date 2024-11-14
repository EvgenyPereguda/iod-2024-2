import Image from "next/image";
import BitcoinRates from "../components/BitcoinRates";



const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: { // author is also an object
  name: 'Hello Kitty',
  avatarUrl: 'https://placekitten.com/g/64/64',
  },
  };

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BitcoinRates/>
        </main>
    </div>
  );
}
