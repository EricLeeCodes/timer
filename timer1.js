const args = process.argv.slice(2);

for (const element of args) {
  if (element >= 1) {
    if (typeof Number(element) === 'number') {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element * 1000);
    }
  }
}

