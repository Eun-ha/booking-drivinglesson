"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <Link href="/">Go to Main</Link>
      <br />
      <Link href="/new">New Booking</Link>
      <br />
      <Link href="/list">Go to List</Link>
    </div>
  );
}
