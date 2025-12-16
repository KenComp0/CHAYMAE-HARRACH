import express, { type Express } from "express";
import fs from "fs";
import path from "path";

// @ts-ignore - __dirname is available in CJS build
declare const __dirname: string;

export function serveStatic(app: Express) {
  // In production build (CJS), __dirname points to dist/, so public is at dist/public
  // In development, this function isn't called (Vite handles it)
  const distPath = typeof __dirname !== "undefined" 
    ? path.resolve(__dirname, "public")
    : path.resolve(process.cwd(), "dist", "public");
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
