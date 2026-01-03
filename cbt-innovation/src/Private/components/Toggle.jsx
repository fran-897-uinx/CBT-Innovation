export default function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 rounded-full relative transition ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition ${
          checked ? "right-0.5" : "left-0.5"
        }`}
      />
    </button>
  );
}
