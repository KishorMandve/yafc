import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-page">
      <h1> YAFC </h1>
      <Link href="/sip">
        <div className="option-btn"> SIP </div>
      </Link>
      <div className="option-btn"> Historical SIP </div>
    </div>
  );
}
