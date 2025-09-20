import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-card border-t'>
            <div className='container mx-auto px-4 py-16'>
                <div className='grid md:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div className='md:col-span-1'>
                        <img
                            src={'/teckzilla-logo.png'}
                            alt='Teckzilla'
                            className='h-12 mb-6'
                        />
                        <p className='text-muted-foreground mb-6 leading-relaxed'>
                            Teckzilla Technologies (Formerly Planet Odoo) brings
                            you the most efficient Odoo solutions from some of
                            the most experienced and qualified IT professionals.
                        </p>

                        <div className='mb-8'>
                            <h5 className='font-semibold text-foreground mb-4'>
                                INDIA LOCATION
                            </h5>
                            <div className='space-y-2 text-sm text-muted-foreground'>
                                <p>225, Neo Corporate Plaza, Malad West</p>
                                <p>Mumbai, Maharashtra 400064</p>
                            </div>
                        </div>

                        <div className='mb-8'>
                            <h5 className='font-semibold text-foreground mb-4'>
                                UAE LOCATION
                            </h5>
                            <div className='space-y-2 text-sm text-muted-foreground'>
                                <p>VSM Teckzilla L.L.C-FZ</p>
                                <p>Meydan Grandstand, 6th floor</p>
                                <p>Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <h5 className='font-semibold text-foreground'>
                                CONTACT/WHATSAPP
                            </h5>
                            <div className='flex items-center gap-3'>
                                <Phone className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    +91-8233083333
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Phone className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    +91-9137018743
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Phone className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    +91-9833765812
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MessageCircle className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    +971 55 886 1632 (Whatsapp)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='font-semibold text-foreground mb-6'>
                            Quick Links
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Odoo Implementation And Consulting
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Odoo Migration
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Odoo Support By Teckzilla
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Odoo Training By Teckzilla
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                        <h4 className='font-semibold text-foreground mb-6'>
                            IT Services
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='text-muted-foreground hover:text-primary transition-colors'
                                >
                                    See On Map
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div>
                        <h4 className='font-semibold text-foreground mb-6'>
                            Subscribe to Updates
                        </h4>
                        <p className='text-muted-foreground mb-4 text-sm'>
                            Enter email to subscribe our latest Services, news
                            and articles.
                        </p>
                        <div className='space-y-3 mb-6'>
                            <Input
                                placeholder='Enter email'
                                className='w-full'
                            />
                            <Button className='btn-primary w-full'>
                                Subscribe
                            </Button>
                        </div>

                        <div className='space-y-2'>
                            <div className='flex items-center gap-3'>
                                <Mail className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    sales@teckzilla.net
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    info@teckzilla.net
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className='w-4 h-4 text-primary' />
                                <span className='text-sm text-muted-foreground'>
                                    girish.joshi@teckzilla.net
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className='my-8' />

                <div className='text-center text-muted-foreground'>
                    <p>
                        &copy; {new Date().getFullYear()} Teckzilla Technologies
                        (Formerly Planet Odoo) All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
