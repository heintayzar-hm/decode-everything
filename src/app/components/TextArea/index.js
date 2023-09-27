export const TextArea = ({ className, children, ...props }) => {
    return (
        <textarea className={
            `block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`
        } {...props}>
            {children}
        </textarea>
    )
}


export const TextAreaWithLabel = ({ className, label, children,id, ...props }) => {
    return (
        <div className="flex flex-col">
            <label for={
                id
} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{
                label
                }</label>
            <TextArea className="mt-1" {...props}>
                {children}
            </TextArea>
        </div>
    )
}
