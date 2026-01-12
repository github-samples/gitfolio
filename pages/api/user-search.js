// WARNING: VULNERABLE CODE - Command Injection Demo
// DO NOT USE IN PRODUCTION
// This API endpoint demonstrates a command injection vulnerability for CodeQL detection

import { execFile } from 'child_process';

export default function handler(req, res) {
  const { username } = req.query;
  
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  // SAFER: Use execFile with arguments array to avoid shell command injection
  const args = [username, '/var/log/users.log'];

  execFile('grep', args, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    if (stderr) {
      return res.status(500).json({ error: stderr });
    }
    
    res.status(200).json({ result: stdout });
  });
}
