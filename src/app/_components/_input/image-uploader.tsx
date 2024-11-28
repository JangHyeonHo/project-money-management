import { ImageUploaderProps } from "@/app/_types/common-types";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export default function ImageUploader({className, id, name}:ImageUploaderProps) {

    const m = useTranslations('msg.common');

    return (
        <div 
        className= {className + " mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"}>
            <div className="text-center">
                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                        htmlFor={name}
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                        <span>{m("upload-file")}</span>
                        <input
                            id={id}
                            name={name}
                            type="file"
                            accept='image/*'
                            className="sr-only" />
                    </label>
                    <p className="pl-1">{m("drag-drop")}</p>
                </div>
                <p className="text-xs/5 text-gray-600">{m("image-limit")}</p>
            </div>
        </div>
    )
}