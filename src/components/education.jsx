export function Education() {
  return (
    <div className='rounded-xl bg-gray-900/60 backdrop-blur-sm p-6'>
      <h2 className='text-xl font-semibold mb-4'>Education</h2>
      <div className='space-y-4'>
        <div>
          <h3 className='font-medium text-sm'>High School (2019 - Today)</h3>
          <p className='text-xs text-gray-400'>
            I am currently attending the 10th class of a Gemeinschaftsschule in
            Germany.
          </p>
        </div>
        <div>
          <h3 className='font-medium text-sm'>
            CS50&apos;s Introduction to Computer Science (2021)
          </h3>
          <p className='text-xs text-gray-400'>
            I took part in the online course CS50&apos;s Introduction to
            Computer Science by Harvard University.
          </p>
        </div>
        <div>
          <h3 className='font-medium text-sm'>
            CS50&apos;s Introduction to Game Development (2022)
          </h3>
          <p className='text-xs text-gray-400'>
            I took part in the online course CS50&apos;s Introduction to Game
            Development by Harvard University in order to learn more about game
            development with Lua.
          </p>
        </div>
      </div>
    </div>
  );
}
