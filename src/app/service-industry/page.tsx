import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IndustryCardSection from '@/components/IndustryCardSection';

export default function ServiceIndustryPage() {
    const sections = [
        {
            title: "Exceptional Integration",
            img: "https://teckzilla.net/wp-content/uploads/2023/09/Clarizen-integrated-project-management-1024x883-1.png",
            alt: "Exceptional Integration",
            desc: "Odoo allows you to ideally integrate different processes for better coordination.",
        },
        {
            title: "Facilitates Overall Growth",
            img: "https://teckzilla.net/wp-content/uploads/2023/09/Green-And-White-Isometric-Business-Growth-Poster-e1660200614239.jpg",
            alt: "Facilitates Overall Growth",
            desc: "Odoo solutions at Teckzilla allow you to have exclusive scalability, reliability, and connectivity.",
        },
        {
            title: "Value for End-Customers",
            img: "https://teckzilla.net/wp-content/uploads/2023/09/Shutterstock_19689850273-e1694085131780.jpg",
            alt: "Value for End-Customers",
            desc: "Using analytics to track customer satisfaction, our Odoo solutions cater better",
        },
    ];
    return (
        <div className='min-h-screen bg-background'>
            <Header />
            <main className='py-16'>
                <div className='container mx-auto px-4 max-w-4xl'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-8 text-center'>
                        Our Exclusive Solutions For The Service Industry
                    </h1>
                    <p className='text-lg mb-10 text-muted-foreground'>
                        The service industry is one of the sectors with
                        extensive cut-throat competition. Meeting the
                        expectations of a highly demanding consumer market is
                        beyond a challenge. It doesn’t matter if you are just
                        beginning or have established grounds, consumers will
                        change their preference in less than a matter of time.
                        So, Teckzilla caters to extensive solutions that allow
                        you to enhance your digitisation journey and achieve
                        exceptional customer delight using Odoo’s incredible
                        data analytics and management. Recent statistics show
                        that over 2 million people have been using Odoo for its
                        amazing flexibility and high level of cost-saving. So,
                        if you are willing to embrace digitization in your
                        service industry business, then our Odoo implementation
                        and integration solutions are right there to enhance
                        your operations.
                    </p>
                    <IndustryCardSection sections={sections} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
