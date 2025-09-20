'use client';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Menu, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { name: 'Home', href: '/' },
        {
            name: 'Services',
            items: [
                {
                    name: 'Odoo Implementation and Consulting',
                    href: '/services/odoo-implementation-consulting',
                },
                { name: 'Odoo Migration', href: '/services/odoo-migration' },
                {
                    name: 'Odoo Support By Teckzilla',
                    href: '/services/odoo-support-by-teckzilla',
                },
                {
                    name: 'Odoo Training By Teckzilla',
                    href: '/services/odoo-training-by-teckzilla',
                },
            ],
        },
        { name: 'Career', href: '/career' },
        {
            name: 'Odoo',
            items: [
                { name: 'Odoo Consulting', href: '/odoo-consulting' },
                { name: 'Odoo Implementation', href: '/odoo-implementations' },
                {
                    name: 'Odoo Integration With Third-Party Tools',
                    href: '/odoo-integration-with-third-party-tools',
                },
                {
                    name: 'Odoo Training',
                    href: '/services/odoo-training-by-teckzilla',
                },
                { name: 'After Sales', href: '/after-sales' },
            ],
        },
        {
            name: 'Vertical',
            items: [
                {
                    name: 'Odoo Implementation and Consulting',
                    href: '/vertical/odoo-implementation-consulting',
                },
                { name: 'Odoo Migration', href: '/vertical/odoo-migration' },
                {
                    name: 'Odoo Support By Teckzilla',
                    href: '/vertical/odoo-support-by-teckzilla',
                },
                {
                    name: 'Odoo Training By Teckzilla',
                    href: '/vertical/odoo-training-by-teckzilla',
                },
            ],
        },
        {
            name: 'Case Studies',
            items: [
                { name: 'Case Studies', href: '/' },
                { name: 'Case Studies Detail', href: '/' },
            ],
        },
    ];

    return (
        <header className='w-full bg-background shadow-sm border-b border-border'>
            {/* Top Bar */}
            <div className='bg-primary text-primary-foreground py-2 px-4'>
                <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm'>
                    <div className='flex items-center gap-4 mb-2 sm:mb-0'>
                        <span className='flex items-center gap-1'>
                            <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                            Mon - Fri 10:00 - 20:00 (IST)
                        </span>
                        <span className='hidden sm:block'>
                            Now Hiring: Python developer, Techno Functional
                            Manager, ERP Sales Executive.
                        </span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <span>Social:</span>
                        <div className='flex gap-2'>
                            <Facebook className='w-4 h-4 hover:text-orange-200 cursor-pointer transition-colors' />
                            <Linkedin className='w-4 h-4 hover:text-orange-200 cursor-pointer transition-colors' />
                            <MessageCircle className='w-4 h-4 hover:text-orange-200 cursor-pointer transition-colors' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className='container mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div>
                        <Link href={'/'} className='flex items-center gap-3'>
                            <img
                                src={'/teckzilla-logo.png'}
                                alt='Teckzilla'
                                className='w-10 h-10'
                            />
                            <span className='text-2xl font-bold text-primary'>
                                Teckzilla
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className='hidden lg:flex'>
                        <NavigationMenuList>
                            {navigationItems.map(item => (
                                <NavigationMenuItem key={item.name}>
                                    {item.items ? (
                                        <>
                                            <NavigationMenuTrigger className='text-foreground hover:text-primary font-medium'>
                                                {item.name}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 bg-popover'>
                                                    {item.items.map(subItem => (
                                                        <li key={subItem.name}>
                                                            <NavigationMenuLink
                                                                asChild
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.href
                                                                    }
                                                                    className={cn(
                                                                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                                                    )}
                                                                >
                                                                    <div className='text-sm font-medium leading-none'>
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={item.href}
                                                className='text-foreground hover:text-primary transition-colors font-medium px-4 py-2'
                                            >
                                                {item.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Menu Button */}
                    <button
                        className='lg:hidden p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className='w-6 h-6' />
                        ) : (
                            <Menu className='w-6 h-6' />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='lg:hidden mt-4 pb-4 border-t border-border'>
                        <div className='flex flex-col gap-4 pt-4'>
                            {navigationItems.map(item => (
                                <div key={item.name}>
                                    {item.items ? (
                                        <div className='space-y-2'>
                                            <div className='font-medium text-foreground'>
                                                {item.name}
                                            </div>
                                            <div className='pl-4 space-y-2'>
                                                {item.items.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className='block text-sm text-muted-foreground hover:text-primary transition-colors'
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className='block text-foreground hover:text-primary transition-colors font-medium'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
