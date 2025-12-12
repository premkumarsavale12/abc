import RichText from "@/components/RichText"


interface MainBlockProps {
    media: any,
    richText: any,

}


export const MainBlock: React.FC<MainBlockProps> = ({ media, richText }) => {

    return (

        <>


            {media && (



                <div className="mt-8 flex justify-center">

                    <img
                        src={media.url}
                        alt={media.alt || "Main image"}
                        className="w-full max-w-5xl rounded-xl shadow-xl object-contain "

                    />

                </div>
            )}

            <div>
                {richText && <RichText className="mb-0 text-black text-center" data={richText} enableGutter={false} />}
            </div>
        </>

    )

}


