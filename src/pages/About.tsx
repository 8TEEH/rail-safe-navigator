
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Solution</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Railway stations are complex environments with many facilities such as ticket
            counters, platforms, restrooms, and food courts. Passengers often struggle
            to navigate these spaces. Our solution aims to simplify navigation using a
            smart UI and AI chatbot.
          </p>
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Pranav Gawai", "Vinit Kale", "Pranav Dhawale", "Sejal Kakani"].map(
              (member) => (
                <div key={member} className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {member.split(" ")[0][0]}
                      {member.split(" ")[1]?.[0]}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{member}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
