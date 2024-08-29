import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 text-center">
      <p className="pb-5">운전연수예약 메인페이지 입니다!</p>
      <Image
        className="inline"
        src="https://picsum.photos/200/300"
        alt="random image"
        width={200}
        height={300}
      />
    </div>
  );
}
