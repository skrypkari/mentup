import Banner from "@/components/Banner";
import HardwareCard from "@/components/HardwareCard";
import Logo from "@/components/Logo";
import LogoBig from "@/components/LogoBig";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const hardware = ['LG 144HZ 24”', 'GMB GAMING', 'RTX 2060', 'I5 9400F', 'COUGAR', 'LOGITECH G102', 'OKLICK 970G', 'ZET GAMING']
  return (
    <div className="bg bg-[#0F0F15] w-full">
      <header className="bg-[#252129]">
        <Navbar />
      </header>
      <main>
        <section className="mt-[20px] cont mx-auto">
          <Banner text1="При покупке кальяна мы дарим полтора часа игры в ПС5 абсолютно бесплатно!" text2="Работаем круглосуточно, без выходных!" text3="Для первых 5 человек вся премиум и стандарт зона бесплатно на всю ночь." imageSrc="/banner.png" buttonText="ЗАБРОНИРОВАТЬ" />
        </section>
        <section className="cont mx-auto mt-[20px]">
          <h2 className="font-bahn text-[36px]">НАШЕ ЖЕЛЕЗО</h2>
          <div className="mt-[30px] flex flex-col gap-[70px]">
            <div className="flex items-center justify-between">
              <div className="bg-[#252129] relative pt-[36px] px-[36px] max-w-[605px] w-full h-[262px] rounded-[16px] flex flex-col">
                <span className="text-[#4275F6] font-bold text-[40px] leading-[40px]">STANDART</span>
                <span className="text-[20px] font-black">· 1 час - 100 ₽</span>
                <p className="font-bahn text-[18px] mt-[18px]">Базовый тариф для повседневной игры и общения.<br />Играй в популярные онлайн-игры без лагов на комфортных настройках. Отличный выбор для быстрых каток, тусовки с друзьями и вечернего гейминга.</p>
                <img src={'/standart.png'} className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2" />
              </div>
              <div className="flex">
                <div className="bg-gradient-to-b from-[#4275F6] to-[#274490] w-[27px] h-[262px] rounded-[4px]" />
                <div className="flex flex-wrap max-w-[568px] w-full ml-[8px] gap-[15px]">
                  {hardware.map((item, index) => (
                    <HardwareCard key={index} imageSrc={`/card.png`} title={item} color1="#27377F" color2="#4275F6" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[#252129] relative pt-[36px] px-[36px] max-w-[605px] w-full h-[262px] rounded-[16px] flex flex-col">
                <span className="text-[#EDF67D] font-bold text-[40px] leading-[40px]">Premium</span>
                <span className="text-[20px] font-black">· 1 час - 100 ₽</span>
                <p className="font-bahn text-[18px] mt-[18px]">Повышенный комфорт и мощное железо для продвинутых игроков.
                  Хочешь максимум фпс и плавность игры? Этот тариф — золотая середина между производительностью и ценой. Приятная атмосфера и минимум ограничений.</p>
                <img src={'/premium.png'} className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2" />
              </div>
              <div className="flex">
                <div className="bg-gradient-to-b from-[#EDF67D] to-[#8B9049] w-[27px] h-[262px] rounded-[4px]" />
                <div className="flex flex-wrap max-w-[568px] w-full ml-[8px] gap-[15px]">
                  {hardware.map((item, index) => (
                    <HardwareCard key={index} imageSrc={`/card.png`} title={item} color1="#767A3F" color2="#EDF67D" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[#252129] relative pt-[36px] px-[36px] max-w-[605px] w-full h-[262px] rounded-[16px] flex flex-col">
                <span className="text-[#8142F6] font-bold text-[40px] leading-[40px]">Extra Premium</span>
                <span className="text-[20px] font-black">· 1 час - 100 ₽</span>
                <p className="font-bahn text-[18px] mt-[18px]">Максимум возможностей для настоящих хардкорщиков и стримеров.
                  Лучшие ПК, элитные кресла, звукоизоляция — всё для того, чтобы ты мог погрузиться в игру на 100%. Подходит для турниров, записи стримов и многопоточной работы.</p>
                <img src={'/extrapremium.png'} className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2" />
              </div>
              <div className="flex">
                <div className="bg-gradient-to-b from-[#8041F4] to-[#4C2790] w-[27px] h-[262px] rounded-[4px]" />
                <div className="flex flex-wrap max-w-[568px] w-full ml-[8px] gap-[15px]">
                  {hardware.map((item, index) => (
                    <HardwareCard key={index} imageSrc={`/card.png`} title={item} color1="#46277F" color2="#8041F4" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cont mx-auto mt-[80px]">
          <div className="flex items-center justify-between gap-[35px]">
            <h2 className="font-bahn text-[36px] leading-[46px] min-w-fit">НОВОСТИ КИБЕРСПОРТА</h2>
            <div className="flex items-center w-full">
              <div className="w-[5px] h-[5px] bg-[#EDF67D] rounded-full" />
              <div className="w-full h-[1px] bg-[#EDF67D]" />
              <div className="w-[5px] h-[5px] bg-[#EDF67D] rounded-full" />
            </div>
            <div className="flex items-center gap-[10px] min-w-fit">
              <LogoBig />
              <span className="font-bold text-[32px]">MENTUP NEWS</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <NewsCard title="Подробности о соревнованиях сезона Fortnite: «ГАЛАКТИЧЕСКАЯ БИТВА»" date="Понедельник 20 мая" tags={["Counter-Strike 2", "Новости", "PC игры"]} imageSrc="/news.png" />
            <NewsCard title="Подробности о соревнованиях сезона Fortnite: «ГАЛАКТИЧЕСКАЯ БИТВА»" date="Понедельник 20 мая" tags={["Counter-Strike 2", "Новости", "PC игры"]} imageSrc="/news.png" />
            <NewsCard title="Подробности о соревнованиях сезона Fortnite: «ГАЛАКТИЧЕСКАЯ БИТВА»" date="Понедельник 20 мая" tags={["Counter-Strike 2", "Новости", "PC игры"]} imageSrc="/news.png" />
          </div>
          <div className="mt-[30px] relative rounded-[16px] overflow-hidden">
            <div className="w-full absolute top-0 h-[120px] backdrop-blur-[30px] bg-white/10 flex items-center justify-between px-[28px]">
              <span className="text-[45px] font-medium text-white/50" style={{ mixBlendMode: "overlay" }}>НОВОСТИ ИГР И КИБЕРСПОРТА</span>
              <button className="bg-gradient-to-br from-[#A3A3CF] to-[#8142F6] drop-shadow-xl drop-shadow-[#925FE3]/50 flex items-center w-[290px] h-[70px] rounded-[16px] text-[25px] font-bold uppercase justify-center">
                News.Mentup.ru
              </button>
            </div>
            <img src="/banner.png" className="w-full h-[120px] object-cover " />
          </div>
        </section>
        <section className="cont mx-auto mt-[60px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col min-w-[295px]">
              <h2 className="font-semibold text-[52px]">Контакты</h2>
              <span className="font-bai text-[28px] text-[#EDF67D] mt-[61px]">Москва</span>
              <div className="flex items-center gap-[8px] mt-[16px] font-bai">
                <img src={'/street.svg'} />
                <span className="text-[20px] leading-[20px] font-bahn text-white">Улица Профсоюзная, 67 </span>
              </div>
              <div className="flex items-center gap-[8px] mt-[16px] font-bai">
                <img src={'/mail.svg'} />
                <span className="text-[20px] leading-[20px] font-bahn text-white">Admin@mentup-store.com </span>
              </div>
              <div className="flex items-center gap-[8px] mt-[16px] font-bai">
                <img src={'/phone.svg'} />
                <span className="text-[20px] leading-[20px] font-bahn text-white">+7 (937) 533 83-38 </span>
              </div>
            </div>
            <img src="/map.png" className="max-w-[900px] w-full" />
          </div>
        </section>
      </main>
      <footer className="mt-[60px] border-t-[1px] border-[#5933A0]">
        <div className="py-[50px] flex items-center justify-center gap-[60px] cont mx-auto">
          <div className="flex items-center gap-[4px]">
            <Logo />
            <div className="flex flex-col">
              <span className="font-darker font-semibold text-[28px] leading-[24px]">MENTUP</span>
              <span className="font-monrope font-medium text-[9px]">КОМПЬЮТЕРНЫЙ КЛУБ</span>
            </div>
          </div>
          <ul className="font-monrope font-base text-[18px] text-white/70 flex flex-col gap-[12px]">
            <li>
              <Link href="/" className="hover:text-white transition-all">Главная</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Услуги</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Турниры</Link>
            </li>
          </ul>
          <ul className="font-monrope text-[18px] text-white/70 flex flex-col gap-[12px]">
            <li>
              <Link href="/" className="hover:text-white transition-all">Новости</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Контакты</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Mentup News</Link>
            </li>
          </ul>
          <ul className="font-monrope text-[18px] text-white/70 flex flex-col gap-[12px]">
            <li>
              <Link href="/" className="hover:text-white transition-all">Конфиденциальность</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Правила пользования</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-all">Copyright ©2023. [TGP] Limited</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
