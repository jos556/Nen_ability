<template>
  <div class="quiz">
    <template v-if="currentStage === 'intro'">
      <div class="quiz-intro">
        <div class="hunter-animation">
          <div class="nen-circle"></div>
          <div class="hunter-badge"></div>
        </div>
        <h1>{{ quizData.title }}</h1>
        <p class="intro-description">{{ quizData.description }}</p>
        <button @click="startQuiz" class="start-button">
          <span class="button-text">開始測驗</span>
          <span class="button-icon">→</span>
        </button>
      </div>
    </template>

    <template v-else-if="currentStage === 'question'">
      <QuizQuestion
        :question="currentQuestionData"
        :current-question="currentQuestionIndex + 1"
        :total-questions="quizData.questions.length"
        @answer="handleAnswer"
      />
    </template>

    <template v-else-if="currentStage === 'result'">
      <div class="quiz-result" v-if="result">
        <div class="fireworks">
          <div class="firework" v-for="n in 3" :key="n"></div>
        </div>
        <h2>測驗結果</h2>
        <div class="result-content" style="font-weight: 600;">
          <img :src="result.image" :alt="result.name" class="result-image">
          <h2>你是 {{ result.name }}！</h2>
          <p style="font-weight: 700;font-size: large;">{{ result.description }}</p>
        </div>
        <button @click="restartQuiz" class="pill-button restart">重新測驗</button>
        <div class="share-buttons">
          <button @click="shareResult('facebook')" class="pill-button facebook">
            <img src="/images/facebook.png" alt="Facebook" class="share-icon">
            分享到 Facebook
          </button>
          <button @click="shareResult('line')" class="pill-button line">
            <img src="/images/line.png" alt="Line" class="share-icon">
            分享到 Line
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import QuizQuestion from '../components/QuizQuestion.vue';
import { quizData } from '../data/quizData';

const currentStage = ref('intro');
const currentQuestionIndex = ref(0);
const answers = ref([]);

const currentQuestionData = computed(() => {
  return quizData.questions[currentQuestionIndex.value];
});

const result = computed(() => {
  if (currentStage.value !== 'result') return null;
  
  // 修改計算得分的邏輯
  const scores = {
    enhancement: 0,
    emission: 0,
    manipulation: 0,
    conjuration: 0,
    transmutation: 0,
    specialization: 0
  };

  answers.value.forEach(answer => {
    Object.entries(answer.score).forEach(([type, score]) => {
      scores[type] += score;
    });
  });

  // 找出最高分的類型
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(key => scores[key] === maxScore);
  
  return quizData.results[resultType];
});

const startQuiz = () => {
  currentStage.value = 'question';
};

const handleAnswer = (answer) => {
  answers.value.push(answer);
  
  if (currentQuestionIndex.value < quizData.questions.length - 1) {
    setTimeout(() => {
      currentQuestionIndex.value++;
    }, 500);
  } else {
    setTimeout(() => {
      currentStage.value = 'result';
    }, 500);
  }
};

const restartQuiz = () => {
  currentStage.value = 'intro';
  currentQuestionIndex.value = 0;
  answers.value = [];
};

const shareResult = (platform) => {
  const url = window.location.href;
  const text = `我在測驗中發現我是 ${result.value.name}！來測測看你是誰？`;
  
  if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`);
  } else if (platform === 'line') {
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`);
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.quiz-intro {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;

  .hunter-animation {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 30px;

    .nen-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 4px solid #42b983;
      border-radius: 50%;
      animation: nenPulse 2s infinite;
      
      &::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 4px solid #42b983;
        border-radius: 50%;
        animation: nenWave 2s infinite;
        opacity: 0;
      }
    }

    .hunter-badge {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: url('/images/hunter-badge.png') center/contain no-repeat;
      animation: badgeFloat 3s ease-in-out infinite;
    }
  }

  h1 {
    font-size: 3em;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  }

  .intro-description {
    font-size: 1.4em;
    font-weight: 500;
    color: #666;
    line-height: 1.6;
    margin-bottom: 40px;
    padding: 0 20px;
  }

  .start-button {
    background: linear-gradient(45deg, #42b983, #3aa876);
    color: white;
    border: none;
    padding: 20px 50px;
    border-radius: 30px;
    font-size: 1.5em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    
    .button-text {
      position: relative;
      z-index: 1;
    }
    
    .button-icon {
      transition: transform 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
      
      .button-icon {
        transform: translateX(5px);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    
    h1 {
      font-size: 2.2em;
    }

    .intro-description {
      font-size: 1.2em;
      padding: 0 10px;
    }

    .hunter-animation {
      width: 150px;
      height: 150px;

      .nen-circle {
        width: 120px;
        height: 120px;
      }

      .hunter-badge {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.8em;
    }

    .start-button {
      padding: 15px 30px;
      font-size: 1.3em;
    }
  }
}

@keyframes nenPulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
}

@keyframes nenWave {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes badgeFloat {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
}

.quiz-result {
  position: relative;
  overflow: hidden;

  .fireworks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .firework {
    position: absolute;
    width: 10px;
    height: 10px;
    
    &::before, &::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      box-shadow: 0 0 10px 2px;
      animation: explode 1.5s infinite;
    }

    &:nth-child(1) {
      left: 20%;
      top: -10%;
      
      &::before, &::after {
        animation-delay: 0s;
        background: #ff4444;
      }
    }

    &:nth-child(2) {
      left: 50%;
      top: -5%;
      
      &::before, &::after {
        animation-delay: 0.3s;
        background: #42b983;
      }
    }

    &:nth-child(3) {
      left: 80%;
      top: -8%;
      
      &::before, &::after {
        animation-delay: 0.6s;
        background: #2196F3;
      }
    }
  }

  .result-title {
    animation: fadeInUp 0.8s ease-out;
  }

  .result-content {
    animation: fadeInUp 1s ease-out 0.3s both;

    .result-image {
      animation: zoomIn 1.2s ease-out 0.5s both;
    }

    h3 {
      animation: fadeInUp 1s ease-out 0.7s both;
    }

    p {
      animation: fadeInUp 1s ease-out 0.9s both;
    }
  }

  .pill-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 30px;
    border: none;
    border-radius: 50px; // 藥丸形狀
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 10px;
    min-width: 200px;
    color: white;

    .share-icon {
      width: 24px;
      height: 24px;
    }

    &.restart {
      background: linear-gradient(45deg, #42b983, #3aa876);
      &:hover {
        background: linear-gradient(45deg, #3aa876, #2d8a5f);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
      }
    }

    &.facebook {
      background: linear-gradient(45deg, #1877f2, #166fe5);
      &:hover {
        background: linear-gradient(45deg, #166fe5, #1464d1);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(24, 119, 242, 0.3);
      }
    }

    &.line {
      background: linear-gradient(45deg, #00b900, #00a000);
      &:hover {
        background: linear-gradient(45deg, #00a000, #008900);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 185, 0, 0.3);
      }
    }
  }

  .share-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
}

@keyframes explode {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 1;
  }
  50% {
    transform: translate(var(--x, 100px), var(--y, -100px)) scale(1);
  }
  100% {
    transform: translate(var(--x, 200px), var(--y, -200px)) scale(0);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.firework::before {
  --x: 50px;
  --y: -80px;
}

.firework::after {
  --x: -50px;
  --y: -80px;
}

@media (max-width: 768px) {
  .firework {
    &::before, &::after {
      width: 3px;
      height: 3px;
    }
  }

  .quiz-result {
    .share-buttons {
      flex-direction: column;
      align-items: center;
      
      .pill-button {
        width: 80%;
        max-width: 300px;
      }
    }
  }
}
</style> 