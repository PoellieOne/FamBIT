import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const CONTENT_ROOT = path.resolve("src/content");
const EN_ROOT = path.join(CONTENT_ROOT, "en");
const ES_ROOT = path.join(CONTENT_ROOT, "es");

function flattenKeys(value, prefix = "") {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenKeys(item, `${prefix}[${index}]`));
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, nested]) => {
      const next = prefix ? `${prefix}.${key}` : key;
      return flattenKeys(nested, next);
    });
  }

  return [prefix];
}

async function readJsonFile(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function main() {
  const enFiles = (await readdir(EN_ROOT)).filter((file) => file.endsWith(".json")).sort();
  const esFiles = (await readdir(ES_ROOT)).filter((file) => file.endsWith(".json")).sort();

  const missingInEs = [];
  const missingInEn = [];

  for (const file of enFiles) {
    if (!esFiles.includes(file)) {
      missingInEs.push(`${file} (file missing in es)`);
      continue;
    }

    const [enJson, esJson] = await Promise.all([
      readJsonFile(path.join(EN_ROOT, file)),
      readJsonFile(path.join(ES_ROOT, file))
    ]);

    const enKeys = new Set(flattenKeys(enJson));
    const esKeys = new Set(flattenKeys(esJson));

    for (const key of enKeys) {
      if (!esKeys.has(key)) {
        missingInEs.push(`${file}: ${key}`);
      }
    }

    for (const key of esKeys) {
      if (!enKeys.has(key)) {
        missingInEn.push(`${file}: ${key}`);
      }
    }
  }

  for (const file of esFiles) {
    if (!enFiles.includes(file)) {
      missingInEn.push(`${file} (file missing in en)`);
    }
  }

  if (missingInEs.length || missingInEn.length) {
    console.error("Parity check failed.");
    if (missingInEs.length) {
      console.error("Missing in ES:");
      for (const item of missingInEs) {
        console.error(`- ${item}`);
      }
    }
    if (missingInEn.length) {
      console.error("Missing in EN:");
      for (const item of missingInEn) {
        console.error(`- ${item}`);
      }
    }
    process.exit(1);
  }

  console.log(`Parity check passed for ${enFiles.length} locale file pairs.`);
}

await main();
