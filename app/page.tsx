import SitesList from "./components/sites-list.component";

import { title } from "@/components/primitives";
import TarinClient from "@/clients/tarin";
import { Site } from "@/clients/tarin/tarin.types";

export default async function Home() {
  const client = new TarinClient();
  const sites: Site[] = await client.request({ path: "/sites" });

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="w-full mb-4">
        <h1 className={title()}>
          <span className="w-full inline-block">
            Browse or search your&nbsp;
          </span>
          <span className={title({ color: "violet" })}>websites</span>
        </h1>
      </div>
      <SitesList sites={sites} />
    </section>
  );
}
