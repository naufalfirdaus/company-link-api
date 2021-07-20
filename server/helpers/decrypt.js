const {
    scryptSync,
    createDecipheriv,
  } = require('crypto');
  
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  // Use the async `crypto.scrypt()` instead.
  const key = scryptSync(password, 'salt', 24);
  // The IV is usually passed along with the ciphertext.
  const iv = Buffer.alloc(16, 0); // Initialization vector.
  
  const decipher = createDecipheriv(algorithm, key, iv);
  
  // Encrypted using same algorithm, key and iv.
  const encrypted =
    '76cb53a0abefa8027bdbb30b0652db5190db7f15';
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(decrypted);
  // Prints: some clear text data