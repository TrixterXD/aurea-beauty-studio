import Landing from "../../components/Landing";
import { localizedContent } from "./languages";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { copy } = await localizedContent(params);
  return <Landing copy={copy} />;
}
