import fs from 'node:fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'node:url'
import http from 'node:http'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 5173;

const fetchResponse = () => {
  return new Promise((res, rej) => {
      try {
          const req = http.request(`http://localhost:${PORT}`, response => res(response.statusCode));
          req.on('error', (err) => rej(err));
          req.end();
      } catch (err) {
          rej(err);
      }
  });
};

const waitForServerReachable = async () => {
  try {
      const statusCode = await fetchResponse();
      if (statusCode === 200) return true;
  } catch (err) {
    console.log('Error: ', err)
    return false
  }
  return false;
};

const convert = async () => {
  console.log('Connected to server ...');
  // Run local server to show page
  const isServerRunning = await waitForServerReachable();
  if(!isServerRunning) {
    throw new Error('Server is not running');
  }
  console.log('Connected');  
  console.log('Exporting ...');

  try {
    const fullDirectoryPath = path.join(__dirname, '../pdf/');
    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}`, {
        waitUntil: 'networkidle2'
    });

    if (!fs.existsSync(fullDirectoryPath)) {
        fs.mkdirSync(fullDirectoryPath);
    }
    
    if(fs.existsSync(fullDirectoryPath + 'resume.pdf')) {
      fs.unlinkSync(fullDirectoryPath + 'resume.pdf')
    }
    await page.pdf({
        path: fullDirectoryPath + 'resume.pdf',
        printBackground: true,
        format: 'A4'
    });
    await browser.close();
  } catch (err) {
    throw new Error(err);
  }

  console.log('Finished exports.');
};

convert();
