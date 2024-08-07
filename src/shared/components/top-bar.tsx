import { FC } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Button } from '../../design-system/button';

//TODO ajouter un badge au dessus a gauche du bouton panier "nombre de commande"

interface TopBarProps {
    setSidebarOpen: (open: boolean) => void;
    setDrawerOpen: (open: boolean) => void;
}

const TopBar: FC<TopBarProps> = ({ setSidebarOpen, setDrawerOpen }) => {
    return (
        <div
            className="sticky top-0 z-40 flex h-24 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
            </button>
            <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden"/>
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <form action="#" method="GET" className="relative flex flex-1">
                    <label htmlFor="search-field" className="sr-only">
                        Search
                    </label>
                    <MagnifyingGlassIcon aria-hidden="true"
                                         className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"/>
                    <input
                        id="search-field"
                        name="search"
                        type="search"
                        placeholder="Rechercher"
                        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    />
                </form>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                    <Button 
                        children="Panier"
                        onClick={() => setDrawerOpen(true)}
                        size="large"
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBar;
