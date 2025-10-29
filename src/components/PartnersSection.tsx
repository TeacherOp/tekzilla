import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';

// Add your client data here
const clientData = [
    {
        img: '/clientlogs/1client.webp',
        url: 'https://www.aco.in/',
        name: 'ACO IN',
    },
    {
        img: '/clientlogs/13client.avif',
        url: 'https://aashniandco.com/',
        name: 'Aashni & Co',
    },
    {
        img: '/clientlogs/2client.webp',
        url: 'https://www.chemitek.co.in/',
        name: 'Chemitek',
    },
    {
        img: '/clientlogs/3client.webp',
        url: 'https://www.rishitechtex.com/',
        name: 'Rishi Techtex',
    },
    {
        img: '/clientlogs/4client.webp',
        url: 'https://eternitytechnologies.com/',
        name: 'Eternity Technologies',
    },
    {
        img: '/clientlogs/5client.webp',
        url: 'https://durosteel.ch/',
        name: 'Durosteel',
    },
    {
        img: '/clientlogs/6client.webp',
        url: 'https://www.ymnrental.co.in/',
        name: 'YMN Rental',
    },
    {
        img: '/clientlogs/7client.webp',
        url: 'https://client7.com',
        name: 'Client 7',
    },
    {
        img: '/clientlogs/8client.webp',
        url: 'https://lakecement.co.tz/',
        name: 'Lake Cement',
    },
    {
        img: '/clientlogs/9client.webp',
        url: 'https://www.homestolife.in/',
        name: 'Homes To Life',
    },
    {
        img: '/clientlogs/10client.webp',
        url: 'https://ronakhealthcare.in/',
        name: 'Ronak Healthcare',
    },
    {
        img: '/clientlogs/11client.webp',
        url: 'https://hi-fab.com/',
        name: 'Hi-Fab',
    },
    {
        img: '/clientlogs/12client.webp',
        url: 'https://www.sms-group.com/',
        name: 'SMS group',
    },
];

const PartnersSection = () => {
    return (
        <section className='py-24 px-4 relative overflow-hidden'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5' />
            <div className='absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl' />
            <div className='absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl' />

            <div className='container mx-auto max-w-7xl relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/20'>
                        <Star className='w-4 h-4 mr-2' />
                        WHO ARE OUR PARTNERS?
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold text-foreground mb-6  bg-clip-text '>
                        We Pride Ourselves In Our Clients
                    </h2>
                    <div className='w-24 h-1  mx-auto rounded-full' />
                </div>

                {/* Client Logos Marquee */}
                <div className='mb-24 overflow-hidden'>
                    <div
                        className='flex w-max hover:pause-marquee'
                        style={{
                            animation: 'marquee-effect 60s linear infinite',
                        }}
                    >
                        {[...clientData, ...clientData].map((client, index) => (
                            <Card
                                key={`${client.url}-${index}`}
                                className='group bg-card/50 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 flex-shrink-0 mx-4 min-w-[200px]'
                            >
                                <CardContent className='p-2 flex items-center justify-center h-20'>
                                    <a
                                        href={client.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-full h-full flex items-center justify-center'
                                    >
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={client.img}
                                            alt={client.name}
                                            className='max-h-20 object-contain transition-transform duration-300 group-hover:scale-105'
                                            style={{
                                                width: 'auto',
                                                maxWidth: '160px',
                                            }}
                                            loading='lazy'
                                        />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
