const lines = ['\r|', '\r/', '\r-', '\r\\', '\r-', '\r\\', '\r|', '\n']

let time = 0;
for (const line of lines) {
  setTimeout(() => {
    process.stdout.write(line);
  }, ((time++) * 200) - 100)
;}
