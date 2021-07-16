import Link from 'next/link'

export default function Layout(props: { children: any}) {
    return (
        <>
            <div className='navigation'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/environment'>
                    <a>env</a>
                </Link>
                <Link href='/demos'>
                    <a>&gt;DEMO</a>
                </Link>
            </div>
            {props.children}
        </>
    )
}