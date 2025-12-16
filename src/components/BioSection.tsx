'use client'

export default function BioSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8">Sam's Bio</h2>
        
        <div className="space-y-6 text-gray-800 leading-relaxed text-lg">
          <p>
            With over 18 years of experience in policing—including six years with the Montreal Police and twelve years in Halifax—Sam Côté has dedicated his career to building safer, more connected communities. His work has focused on supporting vulnerable populations, particularly children and seniors, both in Canada and abroad.
          </p>
          
          <p>
            Today, as a firefighter in Halifax, Sam continues to serve his community while sharing his expertise through presentations and workshops on digital citizenship, safety, and online well-being.
          </p>
          
          <p>
            Sam studied International Development at Dalhousie University and gained valuable international experience through his role as a UNPOL officer in Haiti with the United Nations mission MINUSTAH. There, he led the development of a community bicycle patrol unit—later adopted across the country. He also contributed to child protection by training police and military personnel in Rwanda with the Roméo Dallaire Child Soldiers Initiative.
          </p>
          
          <p>
            Sam is passionate about the impact of emerging technologies and has attended advanced conferences on artificial intelligence in Stavanger, Norway and Ottawa, Canada, focusing on tech's influence on vulnerable communities—especially youth in schools.
          </p>
          
          <p>
            As a bilingual speaker and entrepreneur, Sam founded Sam Côté Consulting, offering digital citizenship training across Canada in both English and French. His sessions are tailored to different age groups, languages, and cultural realities, helping people of all ages navigate the digital world with confidence, respect, and responsibility.
          </p>
        </div>
        
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/samcoteconsulting/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white rounded-[30px] border-2 border-black font-semibold hover:bg-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
