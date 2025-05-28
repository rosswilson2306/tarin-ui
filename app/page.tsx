import SitesList from "./components/sites-list.component";

import { title } from "@/components/primitives";
import TarinClient from "@/clients/tarin";
import { Site } from "@/clients/tarin/tarin.types";

export default async function Home() {
  const client = new TarinClient();
  const sites: Site[] = await client.request({ path: "/sites" });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <SitesList sites={sites} />
      </div>
    </section>
  );
}
