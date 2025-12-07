export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 section-animate visible">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1D2F5F] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Faculty
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">Experienced educators dedicated to student success</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Dr. Rajesh Kumar",
              subject: "Principal",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Ms. Priya Sharma",
              subject: "Mathematics",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Mr. Arjun Singh",
              subject: "Science",
              image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
            {
              name: "Ms. Neha Gupta",
              subject: "English",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
            },
          ].map((member, i) => (
            <div key={i} className="feature-card bg-light rounded-lg overflow-hidden text-center hover:shadow-lg">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-[#1D2F5F]">{member.name}</h3>
                <p className="text-[#E74C3C] text-sm">{member.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
