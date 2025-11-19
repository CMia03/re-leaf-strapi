// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });


import os from 'os';

// Patch pour éviter l'erreur hostname sur Vercel
if (!os.hostname) {
  os.hostname = () => 'localhost';
} else {
  const originalHostname = os.hostname;
  os.hostname = () => {
    try {
      return originalHostname();
    } catch {
      return 'localhost';
    }
  };
}

export default ({ env }) => ({
  host: env('HOST', 'localhost'), // <-- utiliser localhost au lieu de 0.0.0.0
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
