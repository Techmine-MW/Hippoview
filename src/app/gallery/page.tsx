import SeoMeta from "../../layouts/partials/SeoMeta";
import Image from "next/image";
import ScrollCardAnimation from "../../layouts/components/ScrollCardAnimation";
import { getListPage } from "../../lib/contentParser";
import GalleryPagePhotoGallery from "../../layouts/components/GalleryPagePhotoGallery";

const Gallery = () => {
    const galleryPage = getListPage("gallery/_index.md");
    const { frontmatter } = galleryPage;
    const { gallery }: { gallery: { images: any } } = frontmatter

    return (
        <>
            <SeoMeta title={"Hippoview  Lodge Gallery | Capturing Moments by Shire River in Liwonde, Malawi"} />
            <div className="rounded-lg relative">
                <Image
                    className="mx-auto mb-6 opacity-40"
                    src={galleryPage.frontmatter.gallery.image}
                    width={1500}
                    height={1500}
                    alt="aerial view of paddle boats jetski and boat on the lake"
                />
                <h1
                    className="mb-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fontColor"
                >Gallery</h1>
            </div>
            <div className="bg-gradient-to-t from-sectionBackgroundColor to-white border-b border-border">
                <section className="container mt-10 pb-10">
                    <ScrollCardAnimation>
                        <p className="text-lg mt-12 pb-12 leading-10 text-fontColor">Explore the gallery and let the vibrant snapshots tell tales of the unforgettable moments waiting for you at Hippoview . Get a sneak peek into the fun-filled memories created here. Scroll, smile, and get ready to make your own stories!</p>
                        <GalleryPagePhotoGallery data={gallery} />
                    </ScrollCardAnimation>
                </section>
            </div>
        </>
    );
};

export default Gallery;