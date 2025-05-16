import ScrollCardAnimation from "@/components/ScrollCardAnimation";
import ImageFallback from "@/helpers/ImageFallback";
import RecreationActivitiesPics from "@/layouts/RecreationActivitiesPics";
import { getListPage } from "@/lib/contentParser";
import { humanize } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";

const RecreationActivities = () => {
  const recreation = getListPage("recreation/_index.md");
  const { frontmatter, content } = recreation;
  const { title, meta_title, description, image, video, info, alt } =
    recreation.frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
        <section>
          <div className="container text-center relative">
            <ImageFallback
              src={image}
              height={500}
              width={500}
              alt={alt}
              className="w-full rounded-2xl opacity-40"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor">
              {humanize(title)}
            </h1>
          </div>
        </section>
        <div className="container mt-8">
          <ScrollCardAnimation>
            <p className="my-12 text-lg leading-10 text-fontColor">{content}</p>
            <p className="my-12 text-lg leading-10 text-fontColor">{info}</p>
            <div className="rounded-lg p-6 grid grid-cols-1 gap-4 md:grid-cols-2 pb-10">
              {/* Pool */}
              <div className="rounded-lg">
                <h4 className="text-fontColor text-center">Swimming Pool</h4>
                <RecreationActivitiesPics data={frontmatter.pool} />
              </div>

              {/* Boat */}
              <div className="rounded-lg relative">
                <h4 className="text-fontColor text-center">Boat Cruise</h4>
                <RecreationActivitiesPics data={frontmatter.boat} />
              </div>
            </div>
          </ScrollCardAnimation>
        </div>
      </div>
    </>
  );
};

export default RecreationActivities;
