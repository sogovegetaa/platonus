import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";

function IconArrows_left(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M37 15L20 32l17 17"
      />
    </svg>
  );
}
function IconArrows_right(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M27 15l17 17-17 17"
      />
    </svg>
  );
}
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <div className="bg-[#E2E5E8] h-[10px]"></div>
        <div className="flex justify-end pb-2 mt-3 mr-2 border-b-2">
          <p className="text-[#9b59b6] text-sm">
            Перейти в режим редактирования
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <IconArrows_left />
          <p className="text-[15px] border-b-2 border-blue-500">Личные данные</p>
          <p className="text-[15px]">Документы</p>
          <IconArrows_right />
        </div>
        <p className="text-[21px] font-md ml-3 border-b-2 px-4">Персональные данные</p>
        <div className="flex justify-center mt-3">
        <Image src='/img.jpg' width={200} height={200} alt='' className="rounded-[0.5rem]" />
        </div>
        <div className="flex justify-between mt-2">
          <IconArrows_left />
          <p className="text-[15px] border-b-2 border-blue-500">Ф.И.О</p>
          <p className="text-[15px]">Прежняя ФИО</p>
          <IconArrows_right />
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Фамилия</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Мустах</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Имя</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Куаныш</p>
        </div><div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Отчество</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Уалиханович</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Фамилия транскриптом</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Mustakh</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Имя транскриптом</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Kuanysh</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Отчество транскриптом</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Ualikhanuly</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">ИИН</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">000612550918</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Дата рождения</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">12.06.2000</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Национальность</p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Казах</p>
        </div>
        <div className="mt-3 ml-6">
          <p className="pb-[5px] text-[9px]">Пол </p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Мужской</p>
        </div>
        <div className="mt-3 mb-5 ml-6">
          <p className="pb-[5px] text-[9px]">Гражданство </p>
          <p className="border border-[#3498db] w-[290px] px-3 py-2 rounded-[3px] bg-[#eee]">Казахстан</p>
        </div>
      </div>
      <footer>
        <p className="text-[10px] text-center"> ©Platonus v5.3 (build# 478), 2006-2023 Platonus</p>
      </footer>
    </div>
  );
};

export default Home;
