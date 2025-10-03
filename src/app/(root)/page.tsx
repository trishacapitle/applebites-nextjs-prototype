import { Hero7 } from "@/components/hero";
import { Pricing2 } from "@/components/pricing";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			This is the landing page.
			<Link href="/login" prefetch={false}>
				Sign In
			</Link>
			<Hero7 />
			<Pricing2 />
		</div>
	);
}
