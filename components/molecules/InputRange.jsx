export default function InputRange({ min, max, value, onChange, name }) {
  const doChange = (e) => {
    onChange({ name: e.currentTarget.name, value: e.currentTarget.value });
  };
  return (
    <div>
      <label
        htmlFor={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Min-max range
      </label>
      <input
        id={name}
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={doChange}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}
