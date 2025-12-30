# Plagiarism Checker System

A web-based plagiarism detection system that checks textual similarity between documents and reports plagiarism percentage with highlighted matching content.  
This project is built for academic evaluation and portfolio demonstration.

---

### Features

- Text-based plagiarism detection
- Sentence-level similarity comparison
- Plagiarism percentage calculation
- Highlighted matching sentences
- Clean and responsive UI
- Stores documents for comparison

---

### Tech Stack

### Frontend
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

---

### Working Methodology

1. User submits text through the frontend
2. Text is preprocessed:
   - Converted to lowercase
   - Punctuation removed
   - Stopwords removed
3. Text is split into sentences
4. Sentences are converted into vectors
5. Similarity is calculated using:
   - Cosine Similarity / Jaccard Similarity
6. Plagiarism percentage is computed
7. Matching sentences are highlighted in the output

---

---

### How to Run the Project

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm start

```
### frontend
```bash
cd frontend
npm install
npm run dev
```

### Future Enhancements
1. File upload support (PDF/DOCX)
2. Multi-document comparison
3. Semantic similarity using NLP models
4. User authentication

### Use Case
1. Academic plagiarism checking
2. College project submission
3. Learning text similarity algorithms
4. Portfolio project for web development

### Author
Developed by Shagun Jangra
Computer Science Engineering Student

### License

This project is for educational purposes only.
---

Now hear me — **don’t touch code yet**.  
Commit this first.

### Git steps (do exactly this):
```bash
git init
git add README.md
git commit -m "Initial commit: project README"








