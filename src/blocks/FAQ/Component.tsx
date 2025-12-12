import RichText from "@/components/RichText";
import React from "react";

interface FAQBlockProps {

    items: {
        Question: any,
        richText: any;


    }[],



}

export const FAQBlock: React.FC<FAQBlockProps> = ({ items = [] }) => {

    // console.log(items);




    return (

        <>
            {
                items.map((item: any, index: number) => {

                    return (
                        <div key={item.index}
                            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm space-y-3 "
                        >
                            <h1 className="text-2xl font-bold text-blue-700">
                                {item.Question}
                            </h1>

                            {item.richText && (
                                <RichText
                                    className="prose max-w-none text-blue-900"
                                    data={item.richText}
                                    enableGutter={false}
                                />
                            )}
                        </div>
                    );



                })



            }





        </>
    )
}