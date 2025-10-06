import { Link } from '@inertiajs/react';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <h1 className='text-black'>F</h1>
                {/* <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> */}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    <Link href="/" prefetch>
                        <span className="text-white dark:text-white">
                            FrankamDev
                        </span>
                        </Link>
                </span>
            </div>
        </>
    );
}
