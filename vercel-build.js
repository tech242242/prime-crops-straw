const { build } = require('vite');

async function main() {
  await build({
    build: {
      outDir: 'dist'
    }
  });
}

main().catch(console.error);
