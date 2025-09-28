// Vagon nazorat raqamini hisoblash uchun universal funksiya (Modul 10 algoritmi)
export const calculateWagonCheckDigit = (wagonNumber) => {
  if (wagonNumber.length !== 7 || !/^\d+$/.test(wagonNumber)) {
    return null;
  }

  const weights = [2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  // Har bir raqamni mos vazniga ko'paytiramiz
  for (let i = 0; i < 7; i++) {
    let digit = parseInt(wagonNumber[i]);
    let weightedDigit = digit * weights[i];

    // Agar ko'paytma ikki xonali bo'lsa, raqamlarini qo'shamiz
    if (weightedDigit > 9) {
      weightedDigit = Math.floor(weightedDigit / 10) + (weightedDigit % 10);
    }
    sum += weightedDigit;
  }

  // Yig'indini 10ga bo'lib, qoldiqni topamiz
  const remainder = sum % 10;

  // Nazorat raqamini hisoblaymiz
  return remainder === 0 ? 0 : 10 - remainder;
};

// Konteyner nazorat raqamini hisoblash uchun universal funksiya (Modul 11 algoritmi)
export const calculateContainerCheckDigit = (containerNumber) => {
  const letterValues = {
    'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15, 'F': 16, 'G': 17, 'H': 18, 'I': 19, 'J': 20,
    'K': 21, 'L': 23, 'M': 24, 'N': 25, 'O': 26, 'P': 27, 'Q': 28, 'R': 29, 'S': 30, 'T': 31,
    'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38
  };
  const weights = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
  
  const formattedNumber = containerNumber.toUpperCase();
  if (formattedNumber.length !== 10) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const char = formattedNumber[i];
    let value;
    
    if (/[A-Z]/.test(char)) {
      value = letterValues[char];
      if (value === undefined) {
        return null; // Noto'g'ri harf
      }
    } else if (/[0-9]/.test(char)) {
      value = parseInt(char);
    } else {
      return null; // Noto'g'ri belgi
    }
    
    sum += value * weights[i];
  }

  const remainder = sum % 11;
  return remainder === 10 ? 0 : remainder;
};