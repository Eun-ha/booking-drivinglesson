import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>운전연수 예약 페이지 메인입니다.</h1>
      <div>
        <Link href="/new">Login </Link>
        <Link href="/list">Booking List</Link>
      </div>
    </div>
  );
}
