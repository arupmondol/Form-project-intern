const Achivement = () => {
  return (
    <div>
      <div>
        <legend> Choose a theme: </legend>
        <label>
          <input
            type="radio"
            className="forced-colors:appearance-auto appearance-none"
          />
          <p className="forced-colors:block hidden">Cyan</p>
          <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
          <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
        </label>
      </div>

      <div>
        <label className="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
          <svg fill="currentColor"></svg>
          Google Pay
          <input type="radio" className="checked:border-indigo-500 ..." />
        </label>
      </div>
    </div>
  );
};

export default Achivement;
