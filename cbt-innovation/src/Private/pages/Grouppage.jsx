const groups = [
  { name: "UTME 2025", members: 1200, imag: "/undraw_fill-the-blank_n29z.svg" },
  { name: "WAEC Math", members: 800, imag: "/file/png" },
  { name: "Global Scholarships", members: 450 },
];

export default function Grouppage() {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-lg font-semibold mb-4">Communities</h1>
      <div className="grid md:grid-cols-3 gap-2">
        {groups.map((g, i) => (
            <div key={i} className="border rounded-xl p-4 mb-3 bg-white">
                <img src={g.imag} alt={g.name} className="w-fit border border-gray-200 bg-gradient-to-t from-5% h-30 rounded-2xl p-2"/>
            <p className="font-medium mt-3">{g.name}</p>
            <p className="text-sm text-gray-500">{g.members} members</p>

            <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-xl">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
