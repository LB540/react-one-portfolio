/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    // height: theme => ({
    //   auto: 'auto',
    //   ...theme('spacing'),
    //   full: '100%',
    //   screen: 'calc(var(--vh) * 100)',
    // }),
    // minHeight: theme => ({
    //   '0': '0',
    //   ...theme('spacing'),
    //   full: '100%',
    //   screen: 'calc(var(--vh) * 100)',
    // }),
  },

  plugins: [],
}