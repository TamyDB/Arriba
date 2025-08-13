import { rm } from 'fs/promises';

const dir = process.argv[2] || 'dist';

try {
    await rm(dir, { recursive: true, force: true });
    console.log("Successfully removed:", dir);
} catch (err) {
    console.error(`❌ Failed to remove "${dir}":`, err.message);
}
