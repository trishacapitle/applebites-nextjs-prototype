import { Hero7 } from "@/components/hero";
import { Navbar1 } from "@/components/navbar";
import { Pricing2 } from "@/components/pricing";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Navbar1 />
			<Hero7 />
			<Pricing2 />
		</div>
	);
}
