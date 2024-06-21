<template>
  <div class="content container" :class="{ loaded: !loading }">
    <Head>
      <Title>Learning Darija</Title>
    </Head>
    <div class="body">
      <Loader v-if="loading" message="Getting data..." :dark-mode="true" />

      <ClientOnly>
        <template v-if="specificLession">
          <Head>
            <Title>Learning {{ specificLession?.title }}</Title>
          </Head>
          <div class="navigate-home">
            <BreadCrumbs
              v-once
              :border="false"
              :links="[
                {
                  href: `/learning/${currentRouteId}`,
                  label: specificLession.title,
                },
                {
                  href: `/learning/sentences/${specificLession.lession}`,
                  label: 'Sentences',
                },
              ]"
            />
            <div class="actions no-select">
              <div class="learn">
                <span class="label">Learning</span>
                <RadioButtonsRectangle
                  v-model:value="learning"
                  v-memo="[learning]"
                  class="radio-buttons"
                  :items="['Arabic', 'English']"
                />
              </div>
            </div>
            <div v-if="!askWhatToDo" class="actions-content mobile">
              <div class="what-to-do clickable" @click="askWhatToDo = true">
                Different learning method
              </div>
              <div class="what-to-do clickable" @click="learnStars(true)">
                Learns stars with hint
              </div>

              <div class="what-to-do clickable" @click="learnStars(false)">
                Learns stars
              </div>

              <div class="what-to-do clickable" @click="shuffle">Reshuffle</div>

              <div class="what-to-do clickable" @click="unstarAll">
                Unstar all
              </div>
            </div>
          </div>
          <div v-if="!askWhatToDo" class="actions-content desktop">
            <div class="what-to-do clickable" @click="askWhatToDo = true">
              Different learning method
            </div>
            <div class="what-to-do clickable" @click="learnStars(true)">
              Learns stars with hint
            </div>
            <div class="what-to-do clickable" @click="learnStars(false)">
              Learns stars
            </div>

            <div class="what-to-do clickable" @click="shuffle">Reshuffle</div>

            <div class="what-to-do clickable" @click="unstarAll">
              Unstar all
            </div>
          </div>
          <h2 v-once class="title">
            Learn <span class="gold">{{ specificLession.title }}</span>
          </h2>
          <div v-if="!askWhatToDo" class="learning">
            <div v-if="currentWord" class="card-item">
              <template v-if="settings.showHint">
                <span class="">{{ currentWord.english }}</span
                >:
                <span class="gold">{{ currentWord.arabic }}</span>
              </template>
              <h2 v-else>
                What is the {{ learning }} word for
                <span class="gold">{{
                  learning === "Arabic"
                    ? currentWord.english
                    : currentWord.arabic
                }}</span>
                ?
              </h2>
            </div>
            <div class="input-container">
              <div class="left">
                <Icon
                  :class="{ invincible: currentIndex === 0 }"
                  :clickable="currentIndex !== 0"
                  name="chevron-left"
                  @click="goPrevious"
                />
              </div>
              <div class="input">
                <input
                  v-model="inputText"
                  type="text"
                  :class="{ correct: correct, 'in-correct': inCorrect }"
                  :placeholder="placeholderText"
                  @input="textChange($event)"
                />
                <div class="icons clickable">
                  <template v-if="inputText !== ''">
                    <Icon
                      name="cross"
                      tooltip="Clear text"
                      width="25px"
                      height="25px"
                      @click="inputText = ''"
                    />
                    <Icon
                      name="checkmark-rectangle"
                      tooltip="This word is correct"
                      width="25px"
                      height="25px"
                      @click="goNext(true)"
                    />
                  </template>
                  <template v-if="!settings.showHint">
                    <Icon
                      v-if="showHintIcons"
                      tooltip="Show hint"
                      name="progress-help"
                      width="25px"
                      height="25px"
                      @click="settings.hintLetters++"
                    />
                    <Icon
                      name="help"
                      :tooltip="settings.showWord ? 'Hide word' : 'Show word'"
                      width="25px"
                      height="25px"
                      @click="settings.showWord = !settings.showWord"
                    />
                  </template>
                  <Icon
                    v-show="currentWord.star"
                    name="star-filled"
                    width="25px"
                    height="25px"
                    @click="setStar(false)"
                  />
                  <Icon
                    v-show="!currentWord.star"
                    name="star"
                    width="25px"
                    height="25px"
                    @click="setStar(true)"
                  />
                  <Icon
                    name="checkmark"
                    width="25px"
                    tooltip="Correct, next question"
                    height="25px"
                    @click="correctNextQuestion"
                  />
                </div>
              </div>
              <div class="right">
                <Icon
                  class="clickable"
                  name="chevron-right"
                  @click="goNext(false)"
                />
              </div>
            </div>
            <div class="label-status">
              <div class="left">
                <Icon
                  :class="{ invincible: currentIndex === 0 }"
                  :clickable="currentIndex !== 0"
                  name="chevron-left"
                  @click="goPrevious"
                />
              </div>
              <div class="text">
                {{ currentIndex + 1 }} of the {{ allWords.length }} sentences
              </div>
              <div class="right">
                <Icon
                  class="clickable"
                  name="chevron-right"
                  @click="goNext(false)"
                />
              </div>
            </div>
            <div class="navigation-container no-select">
              <ul class="pagination">
                <li
                  v-for="(question, index) in allWords"
                  :key="question.id"
                  class="page-item"
                >
                  <div
                    class="page-link clickable"
                    :class="{
                      clickable: question.visible,
                      answered: question.correct,
                      star: question.star,
                      current: currentIndex === index,
                    }"
                    @click="currentIndex = index"
                  >
                    <span>{{ index + 1 }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div v-else class="ask-what-to-do">
            <h4>What do you want to do?</h4>
            <div class="buttons">
              <button class="button" @click="whatToDoNext('learn-with-hint')">
                Learn with hint
              </button>
              <button class="button" @click="whatToDoNext('learn-no-hint')">
                Learn without hint
              </button>
            </div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import darijaLib from "@lib/darija";
import toast from "@lib/toast";

export default {
  name: "LearningSentences",

  setup() {
    const mainStore = MainStore();

    return { mainStore };
  },

  data() {
    return {
      darijaLib,
      debouncedGoNext: _debounce(this.goNext, 1000),
      inputText: "",
      learning: "Arabic",
      currentIndex: 0,
      correct: false,
      initial: true,
      inCorrect: false,
      preventGoNext: false,
      allWords: [],
      askWhatToDo: true,
      settings: {
        showHint: true,
        hintLetters: 0,
        showWord: false,
      },
    };
  },

  computed: {
    mainStoreComputed() {
      if (_isNil(this.mainStore.$state)) return {};
      return this.mainStore.$state;
    },
    loading() {
      if (_isNil(this.mainStoreComputed.loading)) return true;
      if (_isNil(this.specificLession)) return true;
      return this.mainStoreComputed.loading;
    },
    specificLession() {
      if (_isEmpty(this.mainStoreComputed.arabic)) return null;
      return this.mainStoreComputed.arabic.find(
        (item) => item.lession === this.currentRouteId,
      );
    },
    learningWord() {
      if (this.learning === "Arabic") return this.currentWord.arabic;
      return this.currentWord.english;
    },
    placeholderText() {
      if (_isNil(this.currentWord)) return "";

      if (!this.settings.showHint) {
        if (this.settings.showWord) {
          return `Fill in: ${this.learningWord}`;
        } else if (this.settings.hintLetters > 0) {
          return `Fill in: ${this.learningWord.substring(
            0,
            this.settings.hintLetters,
          )}`;
        }
        return ``;
      }

      return `Fill in: ${this.learningWord}`;
    },
    showHintIcons() {
      if (this.settings.showHint) return false;
      return this.placeholderText !== `Fill in: ${this.learningWord}`;
    },
    currentWord() {
      if (_isEmpty(this.specificLession)) return null;
      return this.allWords[this.currentIndex];
    },
    currentRouteId() {
      return this.$route.params.id;
    },
  },
  watch: {
    specificLession: {
      handler(newValue, oldValue) {
        if (_isEmpty(newValue) || _isNil(newValue)) return;
        this.reloadQuestion(newValue.data);
      },
      immediate: true,
    },
    "settings.hintLetters": {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        if (newValue === 0) return;
        if (!this.settings.showHint && newValue > 0) {
          this.inputText = "";

          if (this.placeholderText === `Fill in: ${this.learningWord}`) {
            this.settings.showWord = true;
          }
        }
      },
    },
    "settings.showWord": {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        if (!this.settings.showHint && newValue) {
          this.inputText = "";
          this.settings.hintLetters = 0;
        }
      },
    },
    learning: {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        this.currentIndex = 0;
        this.inputText = "";
        this.shuffle();
        this.settings = {
          showHint: this.settings.showHint,
          hintLetters: 0,
          showWord: false,
        };
      },
    },
    askWhatToDo: {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        if (newValue) {
          this.currentIndex = 0;
          this.inputText = "";
          this.allWords = _map(this.allWords, (item, index) => {
            return { ...item, id: index + 1, correct: false, star: false };
          });
        }
      },
    },
    currentIndex: {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        this.inputText = "";
        this.settings.showWord = false;
        this.settings.hintLetters = 0;

        if (this.allWords[newValue].correct) {
          const split = this.splitString(this.learningWord);

          this.inputText = split[0].toLowerCase();
        }
      },
    },
  },

  mounted() {},
  methods: {
    textChange(event) {
      if (this.preventGoNext) return;

      const value = event.target.value.toLowerCase();
      this.inputText = value;
      const valueToFind = this.parseText(this.learningWord);
      const split = this.splitString(valueToFind);

      if (split.includes(value)) {
        this.correct = true;
        this.debouncedGoNext(false);
        this.preventGoNext = true;

        setTimeout(() => {
          this.preventGoNext = false;
        }, 2000);
      } else {
        this.inCorrect = true;
      }

      setTimeout(() => {
        this.inCorrect = false;
        this.correct = false;
      }, 2000);
    },

    parseText(item) {
      let _item = item.toLowerCase();

      if (_item.includes("(p)")) {
        _item = _item.replace("(p)", "");
      }

      if (_item.includes("(a)")) {
        _item = _item.replace("(a)", "");
      }

      if (_item.includes("(s)")) {
        _item = _item.replace("(s)", "");
      }

      if (_item.includes("(m)")) {
        _item = _item.replace("(m)", "");
      }

      if (_item.includes("(i)")) {
        _item = _item.replace("(i)", "");
      }

      if (_item.includes("____")) {
        _item = _item.replace("____", "");
      }

      return _item;
    },

    splitString(inputString) {
      let array = [];

      if (inputString.includes("/")) {
        array = inputString.split("/").map((item) => item.trim());
      } else {
        array = [inputString.trim()];
      }

      array = array.map((item) => {
        item = this.parseText(item);

        return item;
      });

      return array;
    },
    goNext(forceCorrect = false) {
      const value = this.inputText.toLowerCase();
      const valueToFind = this.parseText(this.learningWord);
      const split = this.splitString(valueToFind);

      this.allWords[this.currentIndex].correct = forceCorrect
        ? true
        : split.includes(value);

      const hasIncorrect = _filter(
        this.allWords,
        (o) => !o.correct && o.visible,
      );
      if (_isEmpty(hasIncorrect)) {
        setTimeout(() => {
          const hasStarQuestions = _filter(
            this.allWords,
            (o) => o.star && o.visible,
          );

          if (_isEmpty(hasStarQuestions)) {
            this.reloadQuestion(this.specificLession.data);
            this.askWhatToDo = true;
            toast.alert("Great job!", 4000, "success");
            return;
          } else {
            toast.alert("Only star questions are shown.", 4000, "info");

            this.allWords = _filter(this.allWords, (o) => o.star);
            this.allWords = _map(this.allWords, (item, index) => {
              return {
                ...item,
                id: index + 1,
                correct: false,
              };
            });
            this.currentIndex = 0;
            this.inputText = "";
          }
        }, 1000);
        return;
      }

      if (this.currentIndex === this.allWords.length - 1) {
        this.inCorrect = true;
        const incorrectIndex = _findIndex(this.allWords, (o) => !o.correct);
        this.currentIndex = incorrectIndex;
        setTimeout(() => {
          this.inCorrect = false;
        }, 1000);
        return;
      }

      this.currentIndex++;
    },

    shuffle() {
      this.allWords = _shuffle(this.allWords);
      this.currentIndex = 0;
      this.inputText = "";

      this.allWords = _map(this.allWords, (item, index) => {
        return { ...item, id: index + 1, correct: false };
      });
    },

    goPrevious() {
      if (this.currentIndex === 0) return;

      const value = this.inputText.toLowerCase();
      const valueToFind = this.parseText(this.learningWord);
      const split = this.splitString(valueToFind);

      this.allWords[this.currentIndex].correct = split.includes(value);

      this.currentIndex--;
    },

    whatToDoNext(state) {
      if (state === "learn-with-hint") {
        this.settings.showHint = true;
      } else if (state === "learn-no-hint") {
        this.settings.showHint = false;
      }

      this.shuffle();
      this.settings.hintLetters = 0;
      this.settings.showWord = false;
      this.askWhatToDo = false;
      this.inputText = "";
      this.initial = false;
    },

    setStar(state) {
      this.allWords[this.currentIndex].star = state;
    },

    reloadQuestion(newValue) {
      this.allWords = newValue;

      this.allWords = _map(this.allWords, (item, index) => {
        return {
          ...item,
          id: index + 1,
          correct: false,
          star: false,
          visible: true,
        };
      });
    },

    learnStars(withHint) {
      const allStars = _filter(this.allWords, (o) => o.star);

      if (_isEmpty(allStars)) {
        toast.alert("No stars found.", 4000, "info");
        return;
      }

      this.allWords = allStars;

      this.settings.showHint = withHint;
      this.settings.hintLetters = 0;
      this.settings.showWord = false;

      this.allWords = _map(this.allWords, (item, index) => {
        return {
          ...item,
          id: index + 1,
          correct: false,
        };
      });
      this.currentIndex = 0;
      this.inputText = "";
    },

    unstarAll() {
      this.allWords = _map(this.allWords, (item, index) => {
        return {
          ...item,
          id: index + 1,
          star: false,
        };
      });
    },

    correctNextQuestion() {
      this.allWords[this.currentIndex].correct = true;
      this.goNext(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #131722;
  border-radius: 40px;
  display: flex;
  min-height: 230px;
  justify-content: center;
  padding: 30px;

  .body {
    position: relative;
    width: 100%;
    h2.title {
      text-align: center;
    }

    .navigate-home {
      display: flex;
      margin-bottom: 30px;
      gap: 30px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid white;
      padding-bottom: 20px;

      .actions {
        display: flex;
        align-items: center;
        gap: 30px;
        .learn {
          display: flex;
          align-items: center;
          gap: 20px;
        }
      }

      .actions-content {
        gap: 30px;
        display: none;
      }
    }

    .actions-content.desktop {
      position: absolute;
      right: 0;
      text-align: right;
    }

    .learning {
      margin: 40px 0 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .card-item {
        font-size: 30px;
        text-align: center;
      }

      .input-container {
        display: flex;
        align-items: center;
        gap: 30px;

        .input {
          position: relative;

          input {
            width: 100%;
            min-width: 450px;
            padding-right: 135px;
            transition: border-color 0.4s linear;
          }

          .icons {
            height: 100%;
            display: flex;
            align-items: center;
            right: 15px;
            color: #969696;
            position: absolute;
            top: 0;
          }
        }

        .left,
        .right {
          .invincible {
            opacity: 0;
          }
        }
      }

      .label-status {
        display: flex;
        gap: 30px;
        align-items: end;

        .left,
        .right {
          display: none;
        }
      }

      .navigation-container {
        .pagination {
          display: flex;
          padding-left: 0;
          list-style: none;
          border-radius: 0.25rem;
          max-width: 700px;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;

          .page-item {
            list-style: none;

            .page-link {
              border-radius: 50%;
              width: 25px;
              height: 25px;
              color: black;
              font-weight: bold;
              font-size: 12px;
              background-color: white;
              display: flex;
              justify-content: center;
              align-items: center;

              &.answered {
                background-color: #131722;
                color: #4de975;
                border-color: #4de975;
              }

              &.star {
                background-color: #131722;
                color: white;
                &.answered {
                  border-color: #4de975;
                  color: white;
                }
              }

              &.current {
                background-color: #131722 !important;
                border-color: gold !important;
                color: gold !important;
              }
            }
          }
        }
      }
    }

    .ask-what-to-do {
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .buttons {
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .button {
          background-color: #131722;
          color: white;
          border: 1px solid gold;
        }
      }
    }
  }

  @media (max-width: $d-l-mobile) {
    min-height: 100dvh;
    border-radius: 0;
  }

  @media (max-width: $d-l-ipad) {
    .body {
      .navigate-home {
        flex-direction: column;

        .actions-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }

      .actions-content.desktop {
        display: none;
      }

      .learning {
        .input-container {
          position: relative;
          width: 100%;

          .input {
            width: 100%;

            input {
              min-width: unset;
            }
          }

          .left,
          .right {
            display: none;
          }
        }

        .label-status {
          .left,
          .right {
            display: block;
          }
        }
      }
    }
  }
}
</style>
