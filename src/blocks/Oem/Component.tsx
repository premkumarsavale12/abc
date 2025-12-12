import RichText from "@/components/RichText";


interface OemBlockProps {
    richText: any;
    logos: LogoItem[];
    paragraph: any;
    disableInnerContainer?: boolean;

}

interface LogoItem {
    logo: {
        url: string;
        alt: string;
    };
    richText: any;
    para?: string;
    paragraph: any;
}

export const OemBlock: React.FC<OemBlockProps> = ({ richText, logos, paragraph }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">

                <div className="flex justify-center mb-12 -ml-[600px]">
                    {richText && (
                        <RichText
                            className="max-w-4xl text-center prose-h2:text-4xl prose-p:text-lg"
                            data={richText}
                            enableGutter={false}
                        />
                    )}
                </div>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis  ml-[100px]">
                    {paragraph}
                </p>



                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ml-[100px]">
                    {logos?.map((item, index) => (
                        <div
                            key={index}
                            className="w-[400px] border rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center bg-white gap-6"
                        >

                            {item.logo?.url && (
                                <div className="h-20 flex items-center justify-center">
                                    <img
                                        src={item.logo.url}
                                        alt={item.logo.alt || "logo"}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                            )}


                            {item.richText && (
                                <div className="text-center">
                                    <RichText
                                        className="  text-blue-500 mb-0 prose-headings:mb-2 prose-p:mb-0"
                                        data={item.richText}
                                    />
                                </div>
                            )}


                            {item.para && (
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {item.para}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
