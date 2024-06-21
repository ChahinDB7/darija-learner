export default {
  getArabic(md) {
    const value = this.parseTextFile(md);

    const all = _flatMap(value, (lesson) => {
      return lesson.data.map((translation) => {
        return {
          lession: lesson.lession,
          title: lesson.title,
          english: translation.english,
          arabic: translation.arabic,
          sentences: translation.hasSentences,
        };
      });
    });

    return { value, all };
  },
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  parseTextFile(md) {
    // Split input string into lessons
    const lessonStrings = md.split("\n------------------------\n");

    const lessons = [];
    lessonStrings.forEach((lessonString) => {
      // Extract lesson number and title
      const match = lessonString.match(/# Lession (\d+) - (.+)/);
      if (match) {
        const lessonNumber = match[1];
        let title = match[2];
        let hasSentences = false;

        // Check if the title includes "--sentences" tag
        if (title.includes("--sentences")) {
          title = title.replace("--sentences", "").trim();
          hasSentences = true;
        }

        // Extract word translations
        const wordMatches = lessonString.matchAll(/^(?!#)([^=]+) = ([^\n]+)/gm);
        const lessonData = [...wordMatches].map((match) => ({
          english: this.capitalizeFirstLetter(match[1].trim()),
          arabic: this.capitalizeFirstLetter(match[2].trim()),
        }));

        // Organize data into the desired format
        const lesson = {
          lession: lessonNumber,
          title: title,
          hasSentences: hasSentences,
          data: lessonData,
        };
        lessons.push(lesson);
      }
    });

    return lessons;
  },
};
