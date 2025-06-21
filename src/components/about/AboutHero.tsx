import Link from "next/link";


const AboutHero = () => {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins', color: '#1F2937' }}>
              Our Story
            </h1>
            <p className="text-lg mb-8" style={{ color: '#4B5563' }}>
            At old glory orthodontics and dental care Our strength is to give confident smile to our patients with help of our skilled team of specialized and experienced orthodontist Dr Tanmay sharma and Prof.Dr Ridam Jain , With their experience of more than 15+ years you can trust their treatment  completely and recieve the best outcomes for your oral health care. Moreover with their expert MDS  consultants in various field of dentistry will help you to decide and choose the best option for your oral health care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#team"
                className="px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
                style={{ 
                  backgroundColor: '#0077B6',
                  color: 'white',
                  fontFamily: 'Poppins'
                }}
              >
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
                style={{ 
                  backgroundColor: 'white',
                  color: '#0077B6',
                  fontFamily: 'Poppins',
                  border: '2px solid #0077B6'
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#0077B6' }}></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#2E8B57' }}></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/aboutus.png"
                alt="Dental Clinic"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 