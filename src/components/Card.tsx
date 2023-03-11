import type {PropsWithChildren} from "react";

export type CardProps = {
    image: string,
    title: string,
}

export default function Card({image, title, children}: PropsWithChildren<CardProps>) {
    return (
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow">
            <img className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg"
                 src={image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <div className="mb-3 font-normal text-gray-700 overflow-hidden text-ellipsis max-h-24">
                    {children}
                </div>
            </div>
        </div>
    )
}