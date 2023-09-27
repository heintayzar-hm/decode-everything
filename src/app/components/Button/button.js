import {
    Button as MuiButton,
} from '@material-tailwind/react'

export const Button = ({
    children,
    className,
    ...props
}) => {
    let defClassName = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'

    if (props?.colorScheme === 'green') {
        defClassName = 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
    }

    return (
        <MuiButton type="button" className={`${className} ${defClassName}`}
            {...props}
        >{
                children}
            </MuiButton>

    )
}
