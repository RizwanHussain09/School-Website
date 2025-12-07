export default function Faculty() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1D2F5F] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced educators dedicated to student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Dr. Rajesh Kumar",
              position: "Principal",
              qualification: "PhD in Education",
              experience: "25+ years",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Ms. Priya Sharma",
              position: "Mathematics Department Head",
              qualification: "M.Sc Mathematics",
              experience: "18 years",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Mr. Arjun Singh",
              position: "Science Coordinator",
              qualification: "M.Sc Physics",
              experience: "15 years",
              image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Ms. Neha Gupta",
              position: "English Department Head",
              qualification: "MA English Literature",
              experience: "12 years",
              image:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
          ].map((member, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1D2F5F] mb-2">{member.name}</h3>
                <p className="text-[#E74C3C] font-semibold mb-3">{member.position}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#1D2F5F]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                    {member.qualification}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#1D2F5F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    Experience: {member.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}